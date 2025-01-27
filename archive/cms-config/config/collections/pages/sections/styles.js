// Common style configurations for sections
const layout = {
    label: 'Layout',
    name: 'layout',
    widget: 'object',
    weight: 100,
    fields: [
        {
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
        {
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
        {
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
        }
    ]
};

const appearance = {
    label: 'Appearance',
    name: 'appearance',
    widget: 'object',
    weight: 200,
    fields: [
        {
            label: 'Background',
            name: 'background',
            widget: 'select',
            options: [
                { label: 'White', value: 'white' },
                { label: 'Light Gray', value: 'lightGray' },
                { label: 'Gray', value: 'gray' },
                { label: 'Dark Gray', value: 'darkGray' },
                { label: 'Black', value: 'black' },
                { label: 'Primary', value: 'primary' },
                { label: 'Secondary', value: 'secondary' },
                { label: 'Accent', value: 'accent' },
                { label: 'Red', value: 'red' },
                { label: 'Orange', value: 'orange' },
                { label: 'Yellow', value: 'yellow' },
                { label: 'Green', value: 'green' },
                { label: 'Blue', value: 'blue' },
                { label: 'Purple', value: 'purple' },
                { label: 'Pink', value: 'pink' },
                { label: 'Custom', value: 'custom' },
            ],
            default: 'blue',
        },
        {
            label: 'Custom Background Color',
            name: 'customBackground',
            widget: 'string',
            required: false,
            pattern: ['^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$', 'Must be a valid hex color (e.g. #FF0000)'],
            hint: 'Only used when background is set to "Custom"'
        }
    ]
};

const typography = {
    label: 'Typography',
    name: 'typography',
    widget: 'object',
    weight: 300,
    fields: [
        {
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
        {
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
        {
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
        {
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
    ]
};

module.exports = {
    layout,
    appearance,
    typography
}; 