const { createCollection } = require('../../utils');
const richText = require('./sections/rich-text');
// Import other section types here

module.exports = createCollection('pages', {
    label: 'Pages',
    folder: 'content/pages',
    create: true,
    nested: {
        depth: 100,
        summary: '{{title}}'
    },
    slug: '{{slug}}',
    fields: [
        {
            label: 'Title',
            name: 'title',
            widget: 'string',
        },
        {
            label: 'Description',
            name: 'description',
            widget: 'text',
        },
    ],
    // Register available section types
    sectionTypes: [
        richText,
        // Add other section types here
    ],
}); 