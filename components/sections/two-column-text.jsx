import React from 'react';
import { PortableText } from '@portabletext/react';

export function TwoColumnText({ leftContent, rightContent, ratio = '50/50' }) {
    const ratioClasses = {
        '50/50': 'lg:w-1/2 lg:w-1/2',
        '60/40': 'lg:w-3/5 lg:w-2/5',
        '40/60': 'lg:w-2/5 lg:w-3/5',
    };

    const [leftWidth, rightWidth] = ratioClasses[ratio].split(' ');

    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className={`${leftWidth}`}>
                        <div className="prose prose-lg">
                            <PortableText value={leftContent} />
                        </div>
                    </div>
                    <div className={`${rightWidth}`}>
                        <div className="prose prose-lg">
                            <PortableText value={rightContent} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
