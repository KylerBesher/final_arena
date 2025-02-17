import React from 'react';

import { Markdown } from '../../components/markdown';

export default function RichText({ content }) {
    return (
        <div
            className="prose dark:prose-invert max-w-none 
            [&>*]:!my-0 
            [&_h1]:!my-0 
            [&_h2]:!my-0 
            [&_h3]:!my-0 
            [&_h4]:!my-0 
            [&_h5]:!my-0 
            [&_h6]:!my-0 
            [&_p]:!my-0"
        >
            <Markdown content={content} />
        </div>
    );
}
