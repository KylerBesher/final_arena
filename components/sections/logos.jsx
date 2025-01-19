import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Logos({ title, items }) {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                {title && (
                    <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
                )}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
                    {items.map((logo, index) => {
                        const LogoContent = (
                            <div className="relative w-40 h-20">
                                <Image
                                    src={logo.image}
                                    alt={logo.name}
                                    fill
                                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-200"
                                />
                            </div>
                        );

                        return (
                            <div key={index} className="flex items-center justify-center">
                                {logo.link ? (
                                    <Link
                                        href={logo.link}
                                        className="hover:opacity-80 transition-opacity duration-200"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {LogoContent}
                                    </Link>
                                ) : (
                                    LogoContent
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
} 