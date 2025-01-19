import React from 'react';
import Image from 'next/image';

export function Gallery({ title, images, columns = 3 }) {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                {title && (
                    <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
                )}
                <div
                    className="grid gap-4"
                    style={{
                        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                    }}
                >
                    {images.map((item, index) => (
                        <div key={index} className="relative group">
                            <div className="aspect-w-4 aspect-h-3">
                                <Image
                                    src={item.image}
                                    alt={item.caption || ''}
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                            {item.caption && (
                                <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-black bg-opacity-50 text-white p-4 w-full text-center rounded-b-lg">
                                        <p className="text-sm">{item.caption}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 