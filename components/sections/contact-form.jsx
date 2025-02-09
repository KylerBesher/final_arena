'use client';

import React, { useState } from 'react';

import { getBackgroundStyle } from '../../lib/styles';
import debug from '../../lib/utils/debug';

const defaultFields = [
    { label: 'name', type: 'text', placeholder: 'Your Name', required: true },
    { label: 'email', type: 'email', placeholder: 'Your Email', required: true },
    { label: 'message', type: 'textarea', placeholder: 'Your Message', required: true },
];

const ContactForm = ({
    title,
    description,
    fields = defaultFields,
    background = 'white',
    customBackground,
    padding = 'default',
    width = 'narrow',
}) => {
    const [formData, setFormData] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const bgStyle = getBackgroundStyle(background, customBackground);
    const isDark = background?.includes('dark') || background?.includes('black');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Here you would typically send the form data to your backend
            debug.log('Form submitted:', formData);
            setSubmitStatus('success');
            setFormData({});
        } catch (error) {
            debug.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

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
                <div className={`max-w-2xl mx-auto ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {submitStatus === 'success' && (
                        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                            Thank you for your message. We&apos;ll get back to you soon!
                        </div>
                    )}
                    {submitStatus === 'error' && (
                        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
                            Sorry, there was an error sending your message. Please try again.
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {fields.map((field, index) => (
                            <div key={index}>
                                <label
                                    htmlFor={field.label}
                                    className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}
                                >
                                    {field.label.charAt(0).toUpperCase() + field.label.slice(1)}
                                </label>
                                {field.type === 'textarea' ? (
                                    <textarea
                                        id={field.label}
                                        name={field.label}
                                        rows={4}
                                        className={`w-full px-4 py-2 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                                        placeholder={field.placeholder}
                                        required={field.required}
                                        value={formData[field.label] || ''}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <input
                                        type={field.type}
                                        id={field.label}
                                        name={field.label}
                                        className={`w-full px-4 py-2 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
                                        placeholder={field.placeholder}
                                        required={field.required}
                                        value={formData[field.label] || ''}
                                        onChange={handleChange}
                                    />
                                )}
                            </div>
                        ))}
                        <div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-3 px-4 rounded-lg font-medium text-white 
                                    ${isSubmitting ? 'bg-gray-400' : 'bg-primary hover:bg-primary/90'} 
                                    transition-colors duration-200`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
