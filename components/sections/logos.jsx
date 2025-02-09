import Image from 'next/image';
import React from 'react';

import { getBackgroundStyle } from '../../lib/styles';

const LogoImage = ({ src, index }) => {
    const [error, setError] = React.useState(false);

    if (!src || error) {
        return (
            <div className="w-40 h-20 bg-gray-100 flex items-center justify-center rounded">
                <span className="text-gray-400 text-sm">Logo {index + 1}</span>
            </div>
        );
    }

    return (
        <Image
            src={src}
            alt={`Partner logo ${index + 1}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            onError={() => setError(true)}
        />
    );
};

const Logos = ({
    title,
    description,
    logos = [],
    background = 'white',
    customBackground,
    padding = 'default',
    width = 'default',
}) => {
    const bgStyle = getBackgroundStyle(background, customBackground);
    const isDark = background?.includes('dark') || background?.includes('black');

    // Filter out empty or invalid logo URLs
    const validLogos = logos.filter((logo) => logo && typeof logo === 'string' && logo.trim() !== '');

    if (!validLogos || validLogos.length === 0) {
        return null;
    }

    return (
        <section className={`${bgStyle} ${padding ? `p-${padding}` : ''}`}>
            <div
                className={`container mx-auto ${width === 'narrow' ? 'max-w-3xl' : width === 'default' ? 'max-w-5xl' : 'max-w-full'}`}
            >
                {(title || description) && (
                    <div className="text-center mb-12">
                        {title && (
                            <h2
                                className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
                            >
                                {title}
                            </h2>
                        )}
                        {description && (
                            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                {description}
                            </p>
                        )}
                    </div>
                )}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
                    {validLogos.map((logo, index) => (
                        <div key={`${logo}-${index}`} className="relative w-40 h-20">
                            <LogoImage src={logo} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Logos;
