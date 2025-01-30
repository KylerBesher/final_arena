'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';

// Dynamically import CMS with no SSR
const CMS = dynamic(
    () => import('decap-cms-app').then((cms) => {
        cms.init();
        return () => null;
    }),
    { ssr: false }
);

export default function AdminPage() {
    useEffect(() => {
    // Load the Identity Widget script
        const script = document.createElement('script');
        script.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <>
            <CMS />
            <style jsx global>{`
        /* Hide Next.js wrapper elements */
        #__next {
          display: contents;
        }
      `}</style>
        </>
    );
} 