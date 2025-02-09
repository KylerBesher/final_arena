import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { cache } from 'react';

async function getNavigationItemsRecursive(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const items = [];

    for (const entry of entries) {
        if (entry.isDirectory()) {
            const fullPath = path.join(dir, entry.name);
            const indexPath = path.join(fullPath, 'index.md');

            try {
                const content = await fs.readFile(indexPath, 'utf8');
                const { data } = matter(content);

                const showInNav = data.metadata?.navigation?.show_in_nav ?? false;
                const pageWeight = data.metadata?.navigation?.page_weight ?? 0;
                const showChildren = data.metadata?.navigation?.show_children ?? false;
                const isDraft = data.metadata?.draft ?? false;
                const isHidden = data.metadata?.hidden ?? false;

                // Skip draft pages entirely
                if (isDraft) continue;

                if (showInNav) {
                    const relativePath = path.relative(
                        path.join(process.cwd(), 'content/pages'),
                        fullPath,
                    );
                    const item = {
                        title: data.metadata?.title ?? data.title,
                        href: isHidden ? null : `/${relativePath}`,
                        weight: pageWeight,
                        children: showChildren ? await getNavigationItemsRecursive(fullPath) : [],
                        isHidden,
                    };
                    items.push(item);
                }
            } catch (error) {
                if (error.code !== 'ENOENT') {
                    console.error(`Error reading ${indexPath}:`, error);
                }
            }
        }
    }

    return items.sort((a, b) => a.weight - b.weight);
}

export const getNavigationItems = cache(async () => {
    const pagesDir = path.join(process.cwd(), 'content/pages');
    return getNavigationItemsRecursive(pagesDir);
});
