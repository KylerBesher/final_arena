const { createSection } = require('../../../utils');
const styles = require('../styles');

module.exports = createSection('hero', {
    label: 'Hero',
    fields: [
        {
            label: 'Title',
            name: 'title',
            widget: 'string',
            required: true,
        },
        {
            label: 'Subtitle',
            name: 'subtitle',
            widget: 'text',
            required: false,
        },
        {
            label: 'Background Image',
            name: 'backgroundImage',
            widget: 'image',
            required: true,
        },
        {
            label: 'Minimum Height',
            name: 'minHeight',
            widget: 'select',
            options: [
                { label: 'Small (40vh)', value: 'min-h-[40vh]' },
                { label: 'Medium (60vh)', value: 'min-h-[60vh]' },
                { label: 'Large (80vh)', value: 'min-h-[80vh]' },
                { label: 'Full (100vh)', value: 'min-h-screen' },
            ],
            default: 'min-h-[60vh]',
        },
    ],
});
