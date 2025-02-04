const styles = require('./collections/pages/styles');
const Metadata = require('./collections/pages/metadata');
const classification = require('./collections/pages/sections/config/identification');
/**
 * Creates a section configuration with common fields and validation
 * @param {string} type - The type identifier for the section
 * @param {object} config - Section specific configuration
 * @returns {object} Complete section configuration
 */
function createSection(type, config) {
    const { addFields = [], stripFields = [], fields = [], ...restConfig } = config;

    const initialStyleFields = [styles.colors, styles.layout]
        .filter(field => !stripFields.includes(field))
        .concat(addFields);
    const styleFields = Array.from(new Map(initialStyleFields.map(field => [field.name, field])).values());
    
    return {
        name: type,
        type,
        ...restConfig,
        fields: [
            ...fields,
            classification,
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
                    styles.colors,
                    styles.typography,
                ]
            },
            Metadata,
            styles.css,
        ],
    };
}

module.exports = {
    createSection,
    createCollection,
}; 