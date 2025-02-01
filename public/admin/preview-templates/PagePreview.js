/* global h, createClass, CMS */

const PagePreview = createClass({
    render: function() {
        // Get the entry data
        const entry = this.props.entry;
        const title = entry.getIn(['data', 'title']);
        const description = entry.getIn(['data', 'description']);
        const sections = entry.getIn(['data', 'sections'])?.toJS() || [];

        // Debug what components are available
        console.log('Available components:', window['cms-components']);
        console.log('Sections:', sections);

        return h('div', { className: 'preview-content' },
            h('h1', null, title),
            h('p', null, description),
            h('div', { className: 'sections' },
                sections.map((section, index) => {
                    if (section.type === 'richText') {
                        const RichText = window['cms-components'].RichText;
                        console.log('RichText component:', RichText); // Debug log
                        if (!RichText) {
                            console.error('RichText component not found');
                            return null;
                        }
                        return h(RichText, {
                            key: index,
                            content: section.content || '',
                            style: section.style || {}
                        });
                    }
                    return h('div', { key: index }, `${section.type} not implemented`);
                })
            )
        );
    }
});

// Make sure CMS is loaded before registering
if (window.CMS) {
    CMS.registerPreviewTemplate('pages', PagePreview);
}
