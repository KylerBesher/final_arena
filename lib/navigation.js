import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export async function getNavigationItems() {
    const pagesDir = path.join(process.cwd(), 'content/pages');
    const items = [];

    try {
        const entries = await fs.readdir(pagesDir, { withFileTypes: true });

        for (const entry of entries) {
            if (entry.isDirectory()) {
                const indexPath = path.join(pagesDir, entry.name, 'index.md');
                try {
                    const content = await fs.readFile(indexPath, 'utf8');
                    const { data } = matter(content);

                    // Check if page should be shown in navigation
                    const showInNav =
                        data.metadata?.navigation?.show_in_nav ??
                        data.navigation?.show_in_nav ??
                        false;
                    const pageWeight =
                        data.metadata?.navigation?.page_weight ?? data.navigation?.page_weight ?? 0;

                    if (showInNav) {
                        items.push({
                            title: data.metadata?.title ?? data.title,
                            href: `/${entry.name}`,
                            weight: pageWeight,
                            showChildren:
                                data.metadata?.navigation?.show_children ??
                                data.navigation?.show_children ??
                                false,
                            additionalLinks:
                                data.metadata?.navigation?.additional_links ??
                                data.navigation?.additional_links ??
                                [],
                        });
                    }
                } catch (error) {
                    console.error(`Error reading ${indexPath}:`, error);
                }
            }
        }
    } catch (error) {
        console.error('Error reading pages directory:', error);
        return [];
    }

    // Sort by weight
    return items.sort((a, b) => a.weight - b.weight);
}
