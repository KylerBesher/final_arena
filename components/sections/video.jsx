import React from 'react';

import { getBackgroundStyle } from '../../lib/styles';

const Video = ({
    title,
    description,
    videoUrl,
    background = 'white',
    customBackground,
    padding = 'default',
    width = 'default',
}) => {
    // Extract video ID from YouTube URL
    const getYouTubeId = (url) => {
        if (!url) return null;
        const match = url.match(
            /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/,
        );
        return match ? match[1] : null;
    };

    const videoId = getYouTubeId(videoUrl);
    const bgStyle = getBackgroundStyle(background, customBackground);
    const isDark = background?.includes('dark') || background?.includes('black');

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
                {videoId ? (
                    <div className="relative pb-[56.25%] h-0">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title={title || 'Video'}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                ) : (
                    <div className="bg-gray-100 rounded-lg p-8 text-center">
                        <p className="text-gray-600">Please provide a valid YouTube URL</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Video;
