import { notFound } from 'next/navigation';
import fs from 'fs/promises';
import path from 'path';
import { SectionComponent } from '../../../components/sections';
import { processMarkdown } from '../../../lib/markdown';
import { SubNav } from '../../../components/SubNav';
import { getNavigationItems } from '../../../lib/navigation.server';
import SiteSettings from '../../../content/settings/site.json';

export default async function Page({ params }) {
    try {
        // Await the params object
        const resolvedParams = await params;
        if (!resolvedParams?.slug) {
            notFound();
        }

        // Handle array of slug parts for nested routes
        const slugPath = Array.isArray(resolvedParams.slug)
            ? resolvedParams.slug.join('/')
            : resolvedParams.slug;

        // Don't try to handle image requests at all
        if (slugPath.includes('images/')) {
            return null;
        }

        const filePath = path.join(process.cwd(), 'content/pages', slugPath, 'index.md');

        const fileContent = await fs.readFile(filePath, 'utf8');
        const { data, content } = processMarkdown(fileContent);

        // Get navigation items to find current page's children
        const navItems = await getNavigationItems();
        const currentNavItem = navItems.find(item => item.href === `/${resolvedParams.slug[0]}`);
        const showSubNav = resolvedParams.slug.length === 1 && currentNavItem?.children?.length > 0;

        return (
            <>
                {showSubNav && <SubNav items={currentNavItem.children} />}
                <div>
                    {data.sections?.map((section, index) => (
                        <SectionComponent
                            key={index}
                            section={section}
                            pageStyle={data.style}
                            siteStyle={SiteSettings.style}
                        />
                    ))}
                    {!data.sections && (
                        <div>
                            <h1>{data.title}</h1>
                            <div>{content}</div>
                        </div>
                    )}
                </div>
            </>
        );
    } catch (error) {
        console.error('Error loading page:', error);
        notFound();
    }
}
