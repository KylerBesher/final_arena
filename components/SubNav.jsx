import Link from 'next/link';
import React from 'react';

export function SubNav({ items }) {
    if (!items?.length) return null;

    return (
        <>
            <div className="fixed top-[90px] left-0 right-0 bg-background/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-40">
                <div className="container mx-auto px-4">
                    <nav className="flex items-center space-x-6 h-12">
                        {items.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-text hover:text-primary transition-colors text-sm"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
            {/* Add a spacer div for the subnav when it exists */}
            <div className="h-12" />
        </>
    );
}
