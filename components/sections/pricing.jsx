import React from 'react';
import Link from 'next/link';
import { getBackgroundStyle } from '../../lib/styles';

const PricingPlan = ({ plan, isDark }) => {
    // Ensure we have a valid URL for the button
    const href = plan.buttonUrl && typeof plan.buttonUrl === 'string' && plan.buttonUrl.trim() !== '' 
        ? plan.buttonUrl 
        : '/contact';

    return (
        <div className={`p-6 rounded-lg shadow-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
            <div className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>{plan.price}</div>
            <ul className="mb-8 space-y-3">
                {plan.features?.map((feature, index) => (
                    <li key={index} className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        {feature}
                    </li>
                ))}
            </ul>
            <Link
                href={href}
                className={`block w-full py-3 px-4 text-center rounded-lg font-medium text-white bg-primary hover:bg-primary/90 transition-colors duration-200`}
            >
                {plan.buttonText || 'Get Started'}
            </Link>
        </div>
    );
};

const Pricing = ({ 
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
                    {items.map((plan, index) => (
                        <PricingPlan key={index} plan={plan} isDark={isDark} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing; 