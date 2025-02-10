const fs = require('fs');
const path = require('path');

const matter = require('gray-matter');

function generateNavigation() {
    const pagesDir = path.join(process.cwd(), 'content/pages');
    const navTree = [];

    // Helper function to read directory recursively
    function readDirectory(dir, parentPath = '') {
        const items = fs.readdirSync(dir);
        const navItems = [];

        items.forEach((item) => {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);

            // Skip files that start with _ or .
            if (item.startsWith('_') || item.startsWith('.')) return;

            if (stat.isDirectory()) {
                const indexPath = path.join(fullPath, 'index.md');
                if (fs.existsSync(indexPath)) {
                    const fileContent = fs.readFileSync(indexPath, 'utf8');
                    const { data } = matter(fileContent);

                    // Only include in nav if nav property exists and is not false
                    if (data.nav !== false) {
                        const relativePath = path.relative(pagesDir, fullPath);
                        const href = `/${relativePath}`;
                        const children = readDirectory(fullPath, href);

                        navItems.push({
                            title: data.nav?.title || data.title || item,
                            href,
                            order: data.nav?.order || 999,
                            children:
                                children.length > 0 ? children : undefined,
                        });
                    }
                }
            }
        });

        // Sort by order, then alphabetically
        return navItems.sort((a, b) => {
            if (a.order !== b.order) return a.order - b.order;
            return a.title.localeCompare(b.title);
        });
    }

    // Generate the navigation tree
    navTree.push(...readDirectory(pagesDir));

    // Write to public directory
    const outputPath = path.join(process.cwd(), 'public/nav.json');
    fs.writeFileSync(outputPath, JSON.stringify(navTree, null, 2));

    console.log('Navigation tree generated successfully!');
}

generateNavigation();
