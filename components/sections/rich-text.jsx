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
    const classes = [
        style.background === 'transparent' ? '' : `bg-${style.background}`,
        style.text === 'default' ? 'text-gray-900 dark:text-gray-100' : `text-${style.text}`,
        style.padding === 'default' ? 'py-12' : `py-${style.padding}`,
        style.align === 'left' ? 'text-left' : `text-${style.align}`
    ].filter(Boolean).join(' ');

    const containerClasses = [
        style.container ? 'container mx-auto px-4' : '',
        style.width === 'default' ? 'max-w-5xl' : style.width === 'narrow' ? 'max-w-3xl' : 'w-full'
    ].filter(Boolean).join(' ');

    const contentClasses = [
        style.prose ? 'prose prose-lg max-w-none dark:prose-invert' : '',
        (style.background === 'dark' || style.text === 'white') ? 'prose-invert' : ''
    ].filter(Boolean).join(' ');

    return (
        <section className={classes}>
            <div className={containerClasses}>
                <div className={contentClasses}>
                    <div>check this here</div>
                    <Markdown content={content} />
                    <div>check this here</div>
                </div>
            </div>
        </section>
    );
} 