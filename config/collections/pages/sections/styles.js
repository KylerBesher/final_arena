// Common style configurations for sections
module.exports = {
    background: {
        label: 'Background',
        name: 'background',
        widget: 'select',
        options: [
            { label: 'White', value: 'white' },
            { label: 'Light', value: 'light' },
            { label: 'Gray', value: 'gray' },
            { label: 'Dark', value: 'dark' },
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Accent', value: 'accent' },
            { label: 'Custom', value: 'custom' }
        ],
        default: 'white',
    },
    customBackground: {
        label: 'Custom Background Color',
        name: 'customBackground',
        widget: 'string',
        required: false,
        pattern: ['^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$', 'Must be a valid hex color (e.g. #FF0000)'],
        hint: 'Only used when background is set to "Custom"'
    },
    padding: {
        label: 'Padding',
        name: 'padding',
        widget: 'select',
        options: [
            { label: 'None', value: 'none' },
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' }
        ],
        default: 'medium',
    },
    width: {
        label: 'Width',
        name: 'width',
        widget: 'select',
        options: [
            { label: 'Full Width', value: 'full' },
            { label: 'Container Width', value: 'container' },
            { label: 'Narrow Width', value: 'narrow' }
        ],
        default: 'container',
    },
    verticalSpacing: {
        label: 'Vertical Spacing',
        name: 'verticalSpacing',
        widget: 'select',
        options: [
            { label: 'None', value: 'none' },
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' }
        ],
        default: 'medium',
    },
    fontSize: {
        label: 'Font Size',
        name: 'fontSize',
        widget: 'select',
        options: [
            { label: 'Small', value: 'small' },
            { label: 'Normal', value: 'normal' },
            { label: 'Large', value: 'large' }
        ],
        default: 'normal',
    },
    alignment: {
        label: 'Text Alignment',
        name: 'alignment',
        widget: 'select',
        options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' }
        ],
        default: 'left',
    },
    linkStyle: {
        label: 'Link Style',
        name: 'linkStyle',
        widget: 'select',
        options: [
            { label: 'Underline', value: 'underline' },
            { label: 'No Underline', value: 'no-underline' },
            { label: 'Underline on Hover', value: 'hover-underline' }
        ],
        default: 'underline',
    },
    listStyle: {
        label: 'List Style',
        name: 'listStyle',
        widget: 'select',
        options: [
            { label: 'Default', value: 'default' },
            { label: 'No Bullets', value: 'none' },
            { label: 'Custom Bullets', value: 'custom' }
        ],
        default: 'default',
    }
}; 