import React from 'react';
import Link from 'next/link';
import { DarkModeToggle } from './DarkModeToggle';
import siteConfig from '../content/settings/site.json';
import { getNavigationItems } from '../lib/navigation.server';

function NavItem({ item, isChild }) {
    if (item.children && item.children.length > 0) {
        return (
            <div className="relative group">
                <Link
                    href={item.href}
                    className={`text-text hover:text-primary transition-colors inline-flex items-center justify-between ${
                        isChild ? 'w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800' : ''
                    }`}
                >
                    {item.title}
                    <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isChild ? 'M9 5l7 7-7 7' : 'M19 9l-7 7-7-7'}
                        />
                    </svg>
                </Link>
                <div
                    className={`${
                        isChild
                            ? 'absolute left-full top-0 hidden group-hover:block ml-0.5'
                            : 'absolute left-0 hidden pt-2 group-hover:block'
                    } z-50`}
                >
                    <div className="bg-background border border-gray-200 dark:border-gray-800 rounded-md shadow-lg min-w-[200px]">
                        {item.children.map(child => (
                            <div key={child.href} className="relative group/child">
                                <Link
                                    href={child.href}
                                    className="block w-full px-4 py-2 text-text hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors inline-flex items-center justify-between"
                                >
                                    {child.title}
                                    {child.children?.length > 0 && (
                                        <svg
                                            className="w-4 h-4 ml-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    )}
                                </Link>
                                {child.children?.length > 0 && (
                                    <div className="absolute left-full top-0 hidden group-hover/child:block ml-0.5">
                                        <div className="bg-background border border-gray-200 dark:border-gray-800 rounded-md shadow-lg min-w-[200px]">
                                            {child.children.map(grandchild => (
                                                <div
                                                    key={grandchild.href}
                                                    className="relative group/grandchild"
                                                >
                                                    <Link
                                                        href={grandchild.href}
                                                        className="block w-full px-4 py-2 text-text hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors inline-flex items-center justify-between"
                                                    >
                                                        {grandchild.title}
                                                        {grandchild.children?.length > 0 && (
                                                            <svg
                                                                className="w-4 h-4 ml-1"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M9 5l7 7-7 7"
                                                                />
                                                            </svg>
                                                        )}
                                                    </Link>
                                                    {grandchild.children?.length > 0 && (
                                                        <div className="absolute left-full top-0 hidden group-hover/grandchild:block ml-0.5">
                                                            <div className="bg-background border border-gray-200 dark:border-gray-800 rounded-md shadow-lg min-w-[200px]">
                                                                {grandchild.children.map(
                                                                    greatGrandchild => (
                                                                        <Link
                                                                            key={
                                                                                greatGrandchild.href
                                                                            }
                                                                            href={
                                                                                greatGrandchild.href
                                                                            }
                                                                            className="block w-full px-4 py-2 text-text hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                                                        >
                                                                            {greatGrandchild.title}
                                                                        </Link>
                                                                    ),
                                                                )}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <Link
            href={item.href}
            className={`text-text hover:text-primary transition-colors ${
                isChild ? 'block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800' : ''
            }`}
        >
            {item.title}
        </Link>
    );
}

export async function Header() {
    const { features } = siteConfig;
    const navItems = await getNavigationItems();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 bg-[var(--color-primary)] ">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="text-text font-bold text-xl">
                        {siteConfig.branding.name}
                    </Link>

                    <div className="flex items-center space-x-4">
                        <nav className="hidden md:flex items-center space-x-4">
                            {navItems.map(item => (
                                <NavItem key={item.href} item={item} />
                            ))}
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
