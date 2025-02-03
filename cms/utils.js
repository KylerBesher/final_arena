const styles = require('./collections/pages/styles');
const Metadata = require('./collections/pages/metadata');

/**
 * Creates a section configuration with common fields and validation
 * @param {string} type - The type identifier for the section
 * @param {object} config - Section specific configuration
 * @returns {object} Complete section configuration
 */
function createSection(type, config) {
    const { addFields = [], stripFields = [], fields = [], ...restConfig } = config;

    const styleFields = [
        styles.appearance,
        styles.layout
    ].filter(field => !stripFields.includes(field)).concat(addFields);

    
    return {
        name: type,
        type,
        ...restConfig,
        fields: [
            ...fields,

            {
                label: 'Metadata',
                name: 'metadata',
                widget: 'object',
                fields: [
                    {name: 'id', label: 'ID', widget: 'string'},
                    {
                        name: 'classes',
                        label: 'Classes',
                        widget: 'list',
                        field: {
                            widget: 'string',
                            label: 'Class',
                            name: 'class',
                            required: false,
                        }
                    },
                    
                ]
                
            },
            {
                label: 'Style Override',
                name: 'style',
                widget: 'list',
                types: styleFields
            },
        ],
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
            {
                label: 'Sections',
                name: 'sections',
                widget: 'list',
                types: sectionTypes || [],
            },
            {
                label: 'Style Override',
                name: 'style',
                widget: 'list',
                types: [
                    styles.layout,
                    styles.appearance,
                    styles.typography,
                ]
            },
            Metadata,
        ],
    };
}

module.exports = {
    createSection,
    createCollection,
}; 