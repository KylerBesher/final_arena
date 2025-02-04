import React from 'react';
import { Markdown } from '../../components/markdown';

export function RichText({ content }) {
    return (
        <div className="container mx-auto">
            <div className="prose dark:prose-invert max-w-none">
                <Markdown content={content} />
            </div>
        </div>
    );
}

// export function RichText({ content, classification }){
 
//     return (
//         <div className="container mx-auto">
//             <div 
//                 id={classification?.id}
//                 className={classification?.classes?.join(' ') || ''}
//             >
//                 <Markdown content={content} />
//             </div>
//         </div>
//     );
// }   