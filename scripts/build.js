const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Clear require cache to get fresh configs
function clearRequireCache() {
    Object.keys(require.cache).forEach(key => {
        if (key.includes('/config/') && !key.includes('/config/build.js')) {
            delete require.cache[key];
        }
    });
}

// Import configurations
function getConfigs() {
    clearRequireCache();
    const baseConfig = require('../cms/base');
    const pagesConfig = require('../cms/collections/pages');
    const settingsConfig = require('../cms/collections/settings');
    return { baseConfig, pagesConfig, settingsConfig };
}

// Combine configurations
function buildConfig() {
    const { baseConfig, pagesConfig, settingsConfig } = getConfigs();
    const config = {
        ...baseConfig,
        collections: [
            settingsConfig,
            pagesConfig,
            // Add more collections here
        ]
    };

    // Ensure output directory exists
    const outputDir = path.join(__dirname, '../public/admin');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // Convert to YAML and write to file
    const yamlStr = yaml.dump(config, {
        indent: 2,
        lineWidth: -1, // Prevent line wrapping
        noRefs: true,  // Prevent aliases
    });

    fs.writeFileSync(
        path.join(outputDir, 'config.yml'),
        yamlStr,
        'utf8'
    );

    console.log('CMS config generated successfully!');
}

// Run the build
buildConfig(); 