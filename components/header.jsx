import Image from 'next/image';
import Link from 'next/link';
import netlifyLogo from 'public/netlify-logo.svg';
import githubLogo from 'public/images/github-mark-white.svg';
import fs from 'fs/promises';
import path from 'path';
import yaml from 'js-yaml';

async function getNavigationData() {
    try {
        const filePath = path.join(process.cwd(), 'content/settings/navigation.yml');
        const fileContent = await fs.readFile(filePath, 'utf8');
        const data = yaml.load(fileContent);
        return data?.mainMenu || [];
    } catch (error) {
        console.error('Error reading navigation:', error);
        return [];
    }
}

const renderNavItem = (item) => {
    // Get the link configuration
    const linkConfig = item.link?.[0];
    const href = linkConfig?.pageLink ? `/${linkConfig.pageLink}` : linkConfig?.url || '#';

    // If it has children, render a dropdown
    if (item.children) {
        return (
            <div className="relative group">
                <Link
                    href={href}
                    className="inline-block px-1.5 py-1 transition hover:opacity-80 sm:px-3 sm:py-2"
                >
                    {item.label}
                </Link>
                <div className="absolute left-0 hidden pt-2 group-hover:block">
                    <ul className="p-2 bg-blue-800 rounded shadow-lg min-w-48">
                        {item.children.map((child, index) => (
                            <li key={index}>{renderNavItem(child)}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }

    // Simple link without children
    return (
        <Link
            href={href}
            className="inline-block px-1.5 py-1 transition hover:opacity-80 sm:px-3 sm:py-2"
        >
            {item.label}
        </Link>
    );
};

export async function Header() {
    const navItems = await getNavigationData();

    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-24">
            <div className="flex items-center gap-8">
                <Link href="/" className="inline-block px-1.5 py-1 font-bold hover:opacity-80">
                    Home
                </Link>
                {!!navItems?.length && (
                    <ul className="flex flex-wrap gap-x-4 gap-y-1">
                        {navItems.map((item, index) => (
                            <li key={index}>{renderNavItem(item)}</li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="flex-grow justify-end hidden lg:flex lg:mr-1">
                <Link
                    href="https://github.com/netlify-templates/next-platform-starter"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image src={githubLogo} alt="GitHub logo" className="w-7" />
                </Link>
            </div>
        </nav>
    );
}
