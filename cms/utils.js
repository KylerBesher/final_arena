const styles = require('./collections/pages/styles');
const Metadata = require('./collections/pages/metadata');

/**
 * Creates a section configuration with common fields and validation
 * @param {string} type - The type identifier for the section
 * @param {object} config - Section specific configuration
 * @returns {object} Complete section configuration
 */
function createSection(type, config) {
    const { stripFields = [], fields = [], ...restConfig } = config;

    // Process fields to handle style object stripping
    const processedFields = fields.map(field => {
        if(field.name === 'style' && field.widget === 'object') {
            const { fields: styleFields = [], ...styleRest } = field;

            if(!styleFields.some(field => field.name === styles.appearance.name)) {
                styleFields.push(styles.appearance);
            }
            if(!styleFields.some(field => field.name === styles.layout.name)) {
                styleFields.push(styles.layout);
            }

            // Get all style fields
            const allStyleFields = styleFields.map(f => {
                // If it's layout or appearance, include by default
                if(f.name === 'layout' || f.name === 'appearance') {
                    return f;
                }
                // For other fields, check if they should be stripped
                return stripFields.some(stripField => stripField.name === f.name) ? null : f;
            }).filter(Boolean); // Remove null values

            // Sort fields by weight
            const sortedFields = allStyleFields.sort((a, b) => {
                const weightA = a.weight || 1000;
                const weightB = b.weight || 1000;
                return weightA - weightB;
            });

            return {
                ...styleRest,
                fields: sortedFields
            };
        }
        return field;
    });

    return {
        name: type,
        type,
        ...restConfig,
        fields: processedFields
    };
}

/**
 * Creates a collection configuration
 * @param {string} name - Collection name
 * @param {object} config - Collection configuration
 * @returns {object} Complete collection configuration
 */
function createCollection(name, config) {
    const { sectionTypes, ...restConfig } = config;
    return {
        name,
        ...restConfig,
        fields: [
            ...(restConfig.fields || []),
            Metadata,
            {
                label: 'Styles',
                name: 'styles',
                widget: 'list',
                types: [
                    styles.layout,
                    styles.appearance,
                    styles.typography,
                ]
            },
            {
                label: 'Sections',
                name: 'sections',
                widget: 'list',
                types: sectionTypes || [],
            },
        ],
    };
}

module.exports = {
    createSection,
    createCollection,
}; 