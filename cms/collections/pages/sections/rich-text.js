const { createSection } = require('../../../utils');
const styles = require('../styles');

module.exports = createSection('richText', {
    label: 'Rich Text',
    stripFields: [],
    addFields: [styles.typography, styles.typography],
    fields: [
        {
            label: 'Content',
            name: 'content',
            widget: 'markdown',
        },
    ],
});
