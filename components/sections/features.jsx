import Link from 'next/link';
import React from 'react';

const FeatureItem = ({ feature, isDark }) => {
    const Content = (
        <>
            {feature.icon && (
                <div
                    className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}
                >
                    <i
                        className={`fas fa-${feature.icon} text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                    />
                </div>
            )}
            <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {feature.title}
            </h3>
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

    return <div className="p-6">{Content}</div>;
};

export function Features({ title, description, features }) {
    return (
        <div className="container mx-auto bg-red">
            kyler was here
            {title && <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>}
            {description && <p className="text-xl text-center mb-12">{description}</p>}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features?.map((feature, index) => (
                    <FeatureItem key={index} feature={feature} />
                ))}
            </div>
        </div>
    );
}

export default Features;
