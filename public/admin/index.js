import CMS from 'decap-cms-app';
import React from 'react';

// Register preview style
CMS.registerPreviewStyle('/admin/preview.css');

// Create preview component using proper Decap CMS patterns
const PagePreview = ({ entry, widgetFor, getAsset }) => {
    const data = entry.get('data');
    
    return (
        <div className="preview-content">
            <h1>{data.get('title')}</h1>
            <p>{data.get('description')}</p>
            
            {data.get('sections')?.map((section, index) => {
                if (section.get('type') === 'richText') {
                    return (
                        <div key={index} className="section">
                            {widgetFor('sections')}
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
};

CMS.registerPreviewTemplate('pages', PagePreview); 