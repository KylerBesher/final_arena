/**
 * Replaces variables in the form of {{variable}} with their values from a settings object.
 * @param {string} template The string containing variables (e.g., "Hello, {{name}}!")
 * @param {Record<string, any>} settings An object with key/value pairs to replace.
 * @returns {string} The interpolated string.
 */
export function interpolate(template, settings) {
    return template.replace(/{{\s*(\w+)\s*}}/g, (match, key) => {
        return key in settings ? settings[key] : match;
    });
} 