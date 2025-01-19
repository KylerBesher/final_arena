'use client';

import React, { useState } from 'react';
import { PortableText } from '@portabletext/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export function FAQ({ title, items }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="border rounded-lg overflow-hidden"
                        >
                            <button
                                className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50"
                                onClick={() => toggleItem(index)}
                            >
                                <span className="font-medium">{item.question}</span>
                                <ChevronDownIcon
                                    className={`w-5 h-5 transform transition-transform ${
                                        openIndex === index ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>
                            {openIndex === index && (
                                <div className="p-4 bg-gray-50 prose prose-sm">
                                    <PortableText value={item.answer} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 