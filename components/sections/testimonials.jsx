import React from 'react';
import Image from 'next/image';

export function Testimonials({ title, items }) {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg p-6 flex flex-col"
                        >
                            <div className="flex-grow">
                                <p className="text-gray-600 italic mb-4">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </p>
                            </div>
                            <div className="flex items-center mt-4">
                                {testimonial.image && (
                                    <div className="flex-shrink-0 mr-4">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.author}
                                            width={48}
                                            height={48}
                                            className="rounded-full"
                                        />
                                    </div>
                                )}
                                <div>
                                    <p className="font-semibold">{testimonial.author}</p>
                                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
