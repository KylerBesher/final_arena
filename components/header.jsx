import React from 'react';
import Link from 'next/link';
import { DarkModeToggle } from './DarkModeToggle';
import siteConfig from '../content/settings/site.json';

export function Header() {
    const { features } = siteConfig;

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="text-text font-bold text-xl">
                        {siteConfig.branding.name}
                    </Link>

                    <div className="flex items-center space-x-4">
                        <nav className="hidden md:flex items-center space-x-4">
                            <Link href="/about" className="text-text hover:text-primary transition-colors">
                                About
                            </Link>
                            <Link href="/products" className="text-text hover:text-primary transition-colors">
                                Products
                            </Link>
                            <Link href="/contact" className="text-text hover:text-primary transition-colors">
                                Contact
                            </Link>
                        </nav>
                        
                        {features.darkMode && <DarkModeToggle />}
                    </div>
                </div>
            </div>
        </header>
    );
}