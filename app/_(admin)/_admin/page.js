'use client';

import { useEffect } from 'react';

// Create an iframe-based CMS component
const CMS = () => {
    useEffect(() => {
        const iframe = document.createElement('iframe');
        iframe.src = '/admin/cms.html';  // We'll create this static HTML file
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';
        
        const container = document.getElementById('cms-container');
        if (container) {
            container.appendChild(iframe);
        }

        return () => {
            if (container && iframe) {
                container.removeChild(iframe);
            }
        };
    }, []);

    return (
        <div 
            id="cms-container" 
            style={{
                height: '100vh',
                width: '100vw',
                padding: 0,
                margin: 0
            }}
        />
    );
};

export default function AdminPage() {
    return <CMS />;
}