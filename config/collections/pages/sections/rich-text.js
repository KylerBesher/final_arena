const { createSection } = require('../../../utils');
const styles = require('./styles');

module.exports = createSection('rich-text', {
    label: 'Rich Text',
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
                styles.background,
                styles.customBackground,
                styles.padding,
                styles.width,
                styles.verticalSpacing,
                styles.fontSize,
                styles.alignment,
                styles.linkStyle,
                styles.listStyle
            ],
        },
    ],
}); 