'use client';

import React, { useState } from 'react';
import { PortableText } from '@portabletext/react';

export function ContactForm({ title, description, fields }) {
    const [formData, setFormData] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Replace with your form submission logic
            await new Promise(resolve => setTimeout(resolve, 1000));
            setSubmitStatus('success');
            setFormData({});
        } catch (error) {
            setSubmitStatus('error');
        }

        setIsSubmitting(false);
    };

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
                    {description && (
                        <div className="prose prose-lg mx-auto mb-8 text-center">
                            <PortableText value={description} />
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {fields.map((field, index) => (
                            <div key={index}>
                                <label
                                    htmlFor={field.label}
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    {field.label}
                                    {field.required && <span className="text-red-500">*</span>}
                                </label>
                                {field.type === 'textarea' ? (
                                    <textarea
                                        id={field.label}
                                        name={field.label}
                                        required={field.required}
                                        value={formData[field.label] || ''}
                                        onChange={handleChange}
                                        rows={4}
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                                    />
                                ) : (
                                    <input
                                        type={field.type}
                                        id={field.label}
                                        name={field.label}
                                        required={field.required}
                                        value={formData[field.label] || ''}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                                    />
                                )}
                            </div>
                        ))}
                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                        {submitStatus === 'success' && (
                            <p className="text-green-600 text-center">Message sent successfully!</p>
                        )}
                        {submitStatus === 'error' && (
                            <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
} 