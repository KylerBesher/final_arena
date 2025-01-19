import React from 'react';
import Link from 'next/link';

export function Pricing({ title, items }) {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {items.map((plan, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg p-8 flex flex-col"
                        >
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <div className="flex items-center justify-center">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    {plan.period && (
                                        <span className="text-gray-500 ml-2">/{plan.period}</span>
                                    )}
                                </div>
                            </div>
                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center">
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href={plan.ctaLink}
                                className="block w-full py-3 px-4 text-center text-white bg-primary-500 hover:bg-primary-600 rounded-lg transition duration-200"
                            >
                                {plan.ctaText}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 