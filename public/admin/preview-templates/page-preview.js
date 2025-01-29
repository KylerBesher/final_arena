const PagePreview = () => {
    return (
        <div>
            hello template
        </div>
    );
};

// Register the preview template
if (typeof window !== 'undefined' && window.CMS) {
    CMS.registerPreviewTemplate('pages', PagePreview);
}