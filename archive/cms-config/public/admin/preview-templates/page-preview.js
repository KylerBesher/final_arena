import { SectionComponent } from '../../../components/sections';

const PagePreview = ({ entry }) => {
    const data = entry.getIn(['data']).toJS();
    
    return (
        <div>
            {data.sections?.map((section, index) => (
                <SectionComponent key={index} section={section} />
            ))}
        </div>
    );
};

// Make sure this file is loaded after the CMS bundle
if (typeof window !== 'undefined' && window.CMS) {
    window.CMS.registerPreviewTemplate('pages', PagePreview);
} 