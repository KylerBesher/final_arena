const pages = {
    name: 'pages',
    label: 'Pages',
    folder: 'content/pages',
    create: true,
    nested: {
        depth: 100,
        summary: '{{title}}'
    },
    fields: [
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Description', name: 'description', widget: 'text' },
        {
            label: 'Sections',
            name: 'sections',
            widget: 'list',
            types: [
                {
                    label: 'Rich Text',
                    name: 'richText',
                    widget: 'object',
                    fields: [
                        {
                            label: 'Content',
                            name: 'content',
                            widget: 'markdown'
                        }
                    ]
                }
            ]
        }
    ]
};

export default pages;
