import { RichText } from '../../../components/sections/rich-text';

const PagePreview = ({ entry }) => {
    const data = entry.getIn(['data']).toJS();
    console.log('Preview data:', data);

    return (
        <div className="preview-content">
            <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
            <p className="text-lg mb-8">{data.description}</p>
            <div>
                {data.sections &&
                    data.sections.map((section, index) => {
                        if (section.type === 'richText') {
                            return <RichText key={index} {...section} />;
                        }
                        return null;
                    })}
            </div>
        </div>
    );
};

// Register with CMS
if (typeof window !== 'undefined' && window.CMS) {
    window.CMS.registerPreviewTemplate('pages', PagePreview);
}

export default PagePreview;
