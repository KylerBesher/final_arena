import React from 'react';

export function Hero({ title, subtitle, backgroundImage, className }) {
    return (
        <div
            className={`relative min-h-[60vh] flex items-center ${className || ''}`}
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-20 w-full">
                <div className="container mx-auto max-w-5xl px-4 text-center text-white">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        {title}
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                        {subtitle}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
