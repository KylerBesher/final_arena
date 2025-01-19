import React from 'react';
import { PortableText } from '@portabletext/react';

export function Video({ title, url, description }) {
    // Extract video ID from YouTube URL
    const getYouTubeId = (url) => {
        const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
        return match ? match[1] : null;
    };

    const videoId = getYouTubeId(url);

    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                {title && (
                    <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
                )}
                <div className="max-w-4xl mx-auto">
                    <div className="relative pb-[56.25%] h-0">
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title={title || 'Video'}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                        />
                    </div>
                    {description && (
                        <div className="mt-6 prose prose-lg mx-auto">
                            <PortableText value={description} />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
} 