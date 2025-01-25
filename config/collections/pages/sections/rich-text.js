const { createSection } = require('../../../utils');
const styles = require('./styles');

module.exports = createSection('richText', {
    label: 'Rich Text',
    stripFields: [],
    fields: [
        {
            label: 'Content',
            name: 'content',
            widget: 'markdown',
        },
        {
            label: 'Style',
            name: 'style',
            widget: 'object',
            fields: [
                styles.typography
            ]
        },
    ],
}); 