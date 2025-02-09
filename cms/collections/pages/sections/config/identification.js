const identification = {
    label: 'Classification',
    name: 'classification',
    widget: 'object',
    fields: [
        { name: 'id', label: 'ID', widget: 'string' },
        {
            name: 'classes',
            label: 'Classes',
            widget: 'list',
            field: {
                widget: 'string',
                label: 'Class',
                name: 'class',
                required: false,
            },
        },
    ],
};

module.exports = identification;
