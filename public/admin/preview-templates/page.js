import React from 'react';

const PagePreview = ({ entry, widgetFor, getAsset }) => {
    const data = entry.get('data').toJS();

    const renderSection = (section) => {
        switch(section.type) {
            case 'richText':
                return (
                    <div
                        key={section.content}
                        className="prose prose-invert max-w-none"
                        style={{
                            padding: section.style?.layout?.padding === 'large' ? '3rem' :
                                section.style?.layout?.padding === 'medium' ? '2rem' :
                                    section.style?.layout?.padding === 'small' ? '1rem' : '0',
                            maxWidth: section.style?.layout?.width === 'narrow' ? '65ch' :
                                section.style?.layout?.width === 'container' ? '1200px' : 'none',
                            margin: '0 auto',
                            backgroundColor: section.style?.appearance?.background === 'white' ? '#ffffff' :
                                section.style?.appearance?.background === 'gray' ? '#f3f4f6' :
                                    section.style?.appearance?.background === 'dark' ? '#1f2937' : 'transparent',
                            color: section.style?.appearance?.background === 'white' ? '#1f2937' : '#ffffff',
                        }}
                    >
                        {widgetFor(`sections.${section.content}`)}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="preview-content">
            <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
            <p className="text-lg mb-8">{data.description}</p>

            {data.sections && data.sections.map((section, index) => (
                renderSection(section)
            ))}
        </div>
    );
};

// Register the preview template
if(typeof window !== 'undefined' && window.CMS) {
    CMS.registerPreviewTemplate('pages', PagePreview);
}

export default PagePreview; 