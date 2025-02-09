import Link from 'next/link';
import React from 'react';

import { getBackgroundStyle } from '../../lib/styles';

const CTA = ({
    title,
    description,
    buttonText = 'Get Started',
    buttonUrl,
    background = 'white',
    customBackground,
    padding = 'default',
    width = 'default',
}) => {
    const bgStyle = getBackgroundStyle(background, customBackground);
    const isDark = background?.includes('dark') || background?.includes('black');

    const href =
        buttonUrl && typeof buttonUrl === 'string' && buttonUrl.trim() !== '' ? buttonUrl : '/';

    return (
        <section className={`${bgStyle} ${padding ? `p-${padding}` : ''}`}>
            <div
                className={`container mx-auto ${width === 'narrow' ? 'max-w-3xl' : width === 'default' ? 'max-w-5xl' : 'max-w-full'}`}
            >
                <div className="text-center">
                    {title && (
                        <h2
                            className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
                        >
                            {title}
                        </h2>
                    )}
                    {description && (
                        <p className={`text-xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            {description}
                        </p>
                    )}
                    <Link
                        href={href}
                        className="inline-block py-3 px-8 rounded-lg font-medium text-white bg-primary hover:bg-primary/90 transition-colors duration-200"
                    >
                        {buttonText}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTA;
