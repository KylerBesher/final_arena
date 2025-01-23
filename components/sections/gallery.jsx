import React from 'react';
import Image from 'next/image';
import { getBackgroundStyle } from '../../lib/styles';

const GalleryImage = ({ src, index }) => {
    const [error, setError] = React.useState(false);

    if (!src || error) {
        return (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center rounded">
                <span className="text-gray-400 text-sm">Image {index + 1}</span>
            </div>
        );
    }

    return (
        <Image
            src={src}
            alt={`Gallery image ${index + 1}`}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setError(true)}
        />
    );
};

const Gallery = ({ title, description, images = [], background = 'white', customBackground, padding = 'default', width = 'default' }) => {
    const bgStyle = getBackgroundStyle(background, customBackground);
    const isDark = background?.includes('dark') || background?.includes('black');

    // Filter out empty or invalid image URLs
    const validImages = images.filter(image => image && typeof image === 'string' && image.trim() !== '');

    if (!validImages || validImages.length === 0) {
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
                    {validImages.map((image, index) => (
                        <div key={`${image}-${index}`} className="relative aspect-[4/3]">
                            <GalleryImage src={image} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery; 