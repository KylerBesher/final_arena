import React from 'react';
import { PortableText } from '@portabletext/react';

export function RichText({ content, backgroundColor = 'white' }) {
    const bgColors = {
        white: 'bg-white',
        gray: 'bg-gray-100',
        primary: 'bg-primary-50',
    };

    return (
        <section className={`py-12 ${bgColors[backgroundColor]}`}>
            <div className="container mx-auto px-4">
                <div className="prose prose-lg max-w-none">
                    <PortableText value={content} />
                </div>
            </div>
        </section>
    );
} 