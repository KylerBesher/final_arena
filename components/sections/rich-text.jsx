import React from 'react';
import { Markdown } from '../../components/markdown';

export function RichText({ 
    content,
    style = {
        background: 'transparent',
        text: 'default',
        padding: 'default',
        width: 'default',
        container: true,
        prose: true,
        align: 'left'
    }
}) {
    // Background styles
    const bgStyles = {
        transparent: '',
        white: 'bg-white',
        light: 'bg-gray-50',
        dark: 'bg-gray-900',
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        accent: 'bg-accent'
    };

    // Text styles
    const textStyles = {
        default: 'text-gray-900 dark:text-gray-100',
        white: 'text-white',
        dark: 'text-gray-900',
        light: 'text-gray-100'
    };

    // Padding styles
    const paddingStyles = {
        none: '',
        small: 'py-4',
        default: 'py-12',
        large: 'py-24'
    };

    // Width styles
    const widthStyles = {
        full: 'w-full',
        default: 'max-w-5xl',
        narrow: 'max-w-3xl'
    };

    // Alignment styles
    const alignStyles = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right'
    };

    const classes = [
        bgStyles[style.background] || bgStyles.transparent,
        textStyles[style.text] || textStyles.default,
        paddingStyles[style.padding] || paddingStyles.default,
        alignStyles[style.align] || alignStyles.left
    ].join(' ');

    const containerClasses = [
        style.container ? 'container mx-auto px-4' : '',
        widthStyles[style.width] || widthStyles.default
    ].join(' ');

    const contentClasses = [
        style.prose ? 'prose prose-lg max-w-none dark:prose-invert' : '',
        style.background === 'dark' || style.text === 'white' ? 'prose-invert' : ''
    ].join(' ');

    return (
        <section className={classes}>
            <div className={containerClasses}>
                <div className={contentClasses}>
                    kyler was here on js

                </div>
            </div>
        </section>
    );
} 