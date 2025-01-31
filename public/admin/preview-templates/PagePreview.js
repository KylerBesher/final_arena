const PagePreview = createClass({
    render: function() {
        // Get the entry data
        const entry = this.props.entry;
        const title = entry.getIn(['data', 'title']);
        const description = entry.getIn(['data', 'description']);
        const sections = entry.getIn(['data', 'sections'])?.toJS() || [];

        return h('div', { className: 'preview-content' },
            h('h1', null, title),
            h('p', null, description),
            h('div', { className: 'sections' },
                sections.map((section, index) => {
                    if (section.type === 'richText') {
                        return h('div', { key: index, className: 'rich-text-section' },
                            h('div', null, section.content)
                        );
                    }
                    return null;
                })
            )
        );
    }
});

// Make sure CMS is loaded before registering
if (window.CMS) {
    CMS.registerPreviewTemplate('pages', PagePreview);
}
