/**
 * Creates a section configuration with common fields and validation
 * @param {string} type - The type identifier for the section
 * @param {object} config - Section specific configuration
 * @returns {object} Complete section configuration
 */
function createSection(type, config) {
    return {
        name: type,
        type,
        ...config,
        // Add any common fields or validation here
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
        ],
    };
}

module.exports = {
    createSection,
    createCollection,
}; 