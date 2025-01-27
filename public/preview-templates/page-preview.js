var PagePreview = function(props) {
    var entry = props.entry;
    var data = entry.getIn(['data']).toJS();
    console.log('Preview data:', data);

    return h('div', null,
        h('h1', null, data.title),
        h('p', null, data.description),
        h('div', null,
            h('h2', null, 'Sections:'),
            data.sections && data.sections.map(function(section, index) {
                return h('div', { key: index },
                    h('strong', null, 'Section ' + (index + 1)),
                    h('div', null, section.content)
                );
            })
        )
    );
};

// Register with CMS
if (typeof window !== 'undefined') {
    var h = window.CMS.h;
    window.CMS.registerPreviewTemplate('content_pages', PagePreview);
} 