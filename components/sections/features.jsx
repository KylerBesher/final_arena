import React from 'react';
import Link from 'next/link';
import { getBackgroundStyle } from '../../lib/styles';

const FeatureItem = ({ feature, isDark }) => {
    const Content = (
        <>
            {feature.icon && (
                <div className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <i className={`fas fa-${feature.icon} text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'}`} />
                </div>
            )}
            <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{feature.title}</h3>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{feature.description}</p>
        </>
    );

    if (feature.url) {
        return (
            <Link 
                href={feature.url}
                className={`block p-6 rounded-lg transition-colors duration-200 ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`}
            >
                {Content}
            </Link>
        );
    }

    return (
        <div className="p-6">
            {Content}
        </div>
    );
};

const Features = ({ 
    title, 
    description, 
    items = [], 
    background = 'white', 
    customBackground, 
    padding = 'default', 
    width = 'default' 
}) => {
    const bgStyle = getBackgroundStyle(background, customBackground);
    const isDark = background?.includes('dark') || background?.includes('black');

    if (!items || items.length === 0) {
        return null;
    }

    return (
        <section className={`${bgStyle} ${padding ? `p-${padding}` : ''}`}>
            <div className={`container mx-auto ${width === 'narrow' ? 'max-w-3xl' : width === 'default' ? 'max-w-5xl' : 'max-w-full'}`}>
                {(title || description) && (
                    <div className="text-center mb-12">
                        {title && <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h2>}
                        {description && <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>}
                    </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <FeatureItem key={index} feature={item} isDark={isDark} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features; 