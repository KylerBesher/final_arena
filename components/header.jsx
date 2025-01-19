import React from 'react';
import Link from 'next/link';
import { DarkModeToggle } from './DarkModeToggle';
import siteConfig from '../content/settings/site.json';
import { getNavigationItems } from '../lib/navigation.server';

export async function Header() {
    const { features } = siteConfig;
    const navItems = await getNavigationItems();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="text-text font-bold text-xl">
                        {siteConfig.branding.name}
                    </Link>

                    <div className="flex items-center space-x-4">
                        <nav className="hidden md:flex items-center space-x-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-text hover:text-primary transition-colors"
                                >
                                    {item.title}
                                </Link>
                            ))}
                            {/* Additional links from page metadata */}
                            {navItems.flatMap((item) => 
                                item.additionalLinks?.map((link, index) => (
                                    <Link
                                        key={`${item.href}-additional-${index}`}
                                        href={link.link_url}
                                        className="text-text hover:text-primary transition-colors"
                                    >
                                        {link.link_title}
                                    </Link>
                                )) ?? []
                            )}
                        </nav>
                        
                        <div className="flex items-center">
                            {features.darkMode && <DarkModeToggle />}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}