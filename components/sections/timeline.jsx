import React from 'react';
import { PortableText } from '@portabletext/react';

export function Timeline({ title, items }) {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
                <div className="max-w-4xl mx-auto">
                    {items.map((item, index) => (
                        <div key={index} className="relative pl-8 pb-8">
                            {/* Line */}
                            {index !== items.length - 1 && (
                                <div className="absolute left-[11px] top-[26px] bottom-0 w-0.5 bg-gray-200" />
                            )}
                            {/* Dot */}
                            <div className="absolute left-0 top-[6px] w-[22px] h-[22px] rounded-full border-4 border-primary-500 bg-white" />
                            <div>
                                <p className="text-sm font-medium text-gray-500 mb-1">
                                    {item.date}
                                </p>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <div className="prose prose-sm">
                                    <PortableText value={item.description} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
