'use client';

import { useState } from 'react';
import Link from 'next/link';

function NavItem({ item, isMobile = false }) {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const linkConfig = item.link?.[0];
    const href = linkConfig?.pageLink ? `/${linkConfig.pageLink}` : linkConfig?.url || '#';

    if (!item.children?.length) {
        return (
            <Link
                href={href}
                className={isMobile ? 
                    "block px-4 py-2 hover:bg-blue-800 text-white" :
                    "px-3 py-2 text-white hover:text-gray-300"
                }
            >
                {item.label}
            </Link>
        );
    }

    if (isMobile) {
        return (
            <div className="w-full">
                <button
                    onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                    className="flex items-center justify-between w-full px-4 py-2 text-left hover:bg-blue-800 text-white"
                >
                    <span>{item.label}</span>
                    <svg className={`w-4 h-4 transition-transform ${isSubMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                <div className={`pl-4 ${isSubMenuOpen ? 'block' : 'hidden'}`}>
                    {item.children.map((child, index) => (
                        <NavItem key={`${href}-${index}`} item={child} isMobile={true} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="relative group">
            <button className="px-3 py-2 text-white hover:text-gray-300">
                {item.label}
                <svg className="w-4 h-4 ml-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div className="absolute left-0 hidden pt-2 group-hover:block">
                <div className="bg-blue-800 rounded-md shadow-lg">
                    {item.children.map((child, index) => (
                        <NavItem key={`${href}-${index}`} item={child} isMobile={false} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export function NavBar({ items }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-blue-900 shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-white text-xl font-bold">
                            LOGO
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-4">
                        {items.map((item, index) => (
                            <NavItem key={`desktop-${index}`} item={item} isMobile={false} />
                        ))}
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 hover:bg-blue-800"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {items.map((item, index) => (
                            <NavItem key={`mobile-${index}`} item={item} isMobile={true} />
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
} 