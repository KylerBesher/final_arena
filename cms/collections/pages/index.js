const { createCollection } = require('../../utils');
const richText = require('./sections/rich-text');

// Import other section types here

module.exports = createCollection('pages', {
    label: 'Pages',
    folder: 'content/pages',
    create: true,
    preview_component: 'PagePreview',
    nested: {
        depth: 100,
        summary: '{{title}}'
    },
    meta: { path: { widget: 'string', label: 'Path', index_file: 'index' } },
    fields: [
        {
            label: 'Title',
            name: 'title',
            widget: 'string',
        },
    ],
    // Register available section types
    sectionTypes: [
        richText,
        // Add other section types here
    ],
}); 