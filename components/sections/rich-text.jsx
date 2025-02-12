import React from 'react';

import { Markdown } from '../../components/markdown';

export default function RichText({ content }) {
    return (
        <div className="container mx-auto">
            <div className="prose dark:prose-invert max-w-none">
                this is from rich text component
                <Markdown content={content} />
            </div>
        </div>
    );
}
