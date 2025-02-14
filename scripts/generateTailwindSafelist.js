/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const glob = require('glob');

function extractHexColors(content) {
    const hexRegex = /#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})\b/g;
    const matches = content.match(hexRegex) || [];
    return matches.map((color) =>
        color.startsWith('#') ? color : `#${color}`
    );
}

function generateSafelist() {
    // For the main site - keep the optimized list
    const colors = new Set();
    const siteConfig = require('../content/settings/site.json');
    const siteColors = [
        ...Object.values(siteConfig.section_style.colors.lightMode || {}),
        ...Object.values(siteConfig.section_style.colors.darkMode || {}),
    ];
    siteColors.forEach((color) => colors.add(color));

    const contentFiles = glob.sync('content/**/*.{json,md,mdx}');
    contentFiles.forEach((file) => {
        const content = fs.readFileSync(file, 'utf8');
        extractHexColors(content).forEach((color) => colors.add(color));
    });

    // Update tailwind.config.js with only the colors in use
    const safelist = Array.from(colors).flatMap((color) => [
        `bg-[${color.toUpperCase()}]`,
        `text-[${color.toUpperCase()}]`,
        `dark:bg-[${color.toUpperCase()}]`,
        `dark:text-[${color.toUpperCase()}]`,
        `hover:bg-[${color.toUpperCase()}]`,
        `hover:text-[${color.toUpperCase()}]`,
    ]);

    const configPath = path.join(__dirname, '../tailwind.config.js');
    let configContent = fs.readFileSync(configPath, 'utf8');
    const safelistStr = JSON.stringify(safelist, null, 4);
    configContent = configContent.replace(
        /safelist:\s*\[([\s\S]*?)\],/,
        `safelist: ${safelistStr},`
    );
    fs.writeFileSync(configPath, configContent);

    console.log(
        `Updated tailwind.config.js with ${colors.size} colors (${safelist.length} classes)\n`
    );
}

generateSafelist();
