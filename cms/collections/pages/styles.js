const _ = require('lodash');

const createSelectField = (label, name, options, defaultValue) => ({
    label,
    name,
    widget: 'select',
    options,
    default: defaultValue,
});

const colorFields = [
    {
        name: 'primary',
        label: 'Primary Color',
        widget: 'color',
        required: false,
    },
    {
        name: 'secondary',
        label: 'Secondary Color',
        widget: 'color',
        required: false,
    },
    { name: 'accent', label: 'Accent Color', widget: 'color', required: false },
    {
        name: 'background',
        label: 'Background Color',
        widget: 'color',
        required: false,
    },
    { name: 'text', label: 'Text Color', widget: 'color', required: false },
    {
        name: 'backgroundImage',
        label: 'Background Image',
        widget: 'image',
        required: false,
    },
    {
        label: 'Background Overlay',
        name: 'backgroundOverlay',
        widget: 'object',
        fields: [
            {
                name: 'overlayColor',
                label: 'Overlay Color',
                widget: 'color',
                required: false,
            },
            {
                name: 'overlayOpacity',
                label: 'Overlay Opacity',
                widget: 'number',
                min: 0,
                max: 1,
                step: 0.1,
                required: false,
            },
        ],
    },
];

// Define a defaults object for layout options
const layoutDefaults = {
    width: 'contained',
    padding: 'medium',
    verticalSpacing: 'medium',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'stretch',
};

const layout = {
    label: 'Layout',
    name: 'layout',
    widget: 'object',
    weight: 100,
    fields: [
        createSelectField(
            'Width',
            'width',
            [
                { label: 'Full Width', value: 'full' },
                { label: 'Contained', value: 'contained' },
            ],
            layoutDefaults.width
        ),
        {
            label: 'Full Width Content',
            name: 'fullContent',
            widget: 'boolean',
            default: false,
            required: false,
        },
        {
            label: 'Padding',
            name: 'padding',
            widget: 'object',
            fields: [
                createSelectField(
                    'Type',
                    'type',
                    [
                        { label: 'All Sides', value: 'all' },
                        { label: 'Horizontal', value: 'horizontal' },
                        { label: 'Vertical', value: 'vertical' },
                        { label: 'Custom', value: 'custom' },
                        { label: 'None', value: 'none' },
                    ],
                    'all'
                ),
                createSelectField(
                    'Size',
                    'size',
                    [
                        { label: 'Small', value: 'small' },
                        { label: 'Medium', value: 'medium' },
                        { label: 'Large', value: 'large' },
                    ],
                    'medium'
                ),
                {
                    label: 'Top',
                    name: 'top',
                    widget: 'select',
                    options: [
                        { label: 'None', value: '0' },
                        { label: 'Small', value: 'small' },
                        { label: 'Medium', value: 'medium' },
                        { label: 'Large', value: 'large' },
                    ],
                    required: false,
                },
                {
                    label: 'Right',
                    name: 'right',
                    widget: 'select',
                    options: [
                        { label: 'None', value: '0' },
                        { label: 'Small', value: 'small' },
                        { label: 'Medium', value: 'medium' },
                        { label: 'Large', value: 'large' },
                    ],
                    required: false,
                },
                {
                    label: 'Bottom',
                    name: 'bottom',
                    widget: 'select',
                    options: [
                        { label: 'None', value: '0' },
                        { label: 'Small', value: 'small' },
                        { label: 'Medium', value: 'medium' },
                        { label: 'Large', value: 'large' },
                    ],
                    required: false,
                },
                {
                    label: 'Left',
                    name: 'left',
                    widget: 'select',
                    options: [
                        { label: 'None', value: '0' },
                        { label: 'Small', value: 'small' },
                        { label: 'Medium', value: 'medium' },
                        { label: 'Large', value: 'large' },
                    ],
                    required: false,
                },
            ],
        },
        createSelectField(
            'Vertical Spacing',
            'verticalSpacing',
            [
                { label: 'None', value: 'none' },
                { label: 'Small', value: 'small' },
                { label: 'Medium', value: 'medium' },
                { label: 'Large', value: 'large' },
            ],
            layoutDefaults.verticalSpacing
        ),
        createSelectField(
            'Flex Direction',
            'flexDirection',
            [
                { label: 'Row', value: 'row' },
                { label: 'Column', value: 'column' },
                { label: 'Row Reverse', value: 'row-reverse' },
                { label: 'Column Reverse', value: 'column-reverse' },
            ],
            layoutDefaults.flexDirection
        ),
        createSelectField(
            'Justify Content',
            'justifyContent',
            [
                { label: 'Start', value: 'start' },
                { label: 'Center', value: 'center' },
                { label: 'End', value: 'end' },
                { label: 'Space Between', value: 'space-between' },
                { label: 'Space Around', value: 'space-around' },
                { label: 'Space Evenly', value: 'space-evenly' },
            ],
            layoutDefaults.justifyContent
        ),
        createSelectField(
            'Align Items',
            'alignItems',
            [
                { label: 'Stretch', value: 'stretch' },
                { label: 'Center', value: 'center' },
                { label: 'Start', value: 'start' },
                { label: 'End', value: 'end' },
                { label: 'Baseline', value: 'baseline' },
            ],
            layoutDefaults.alignItems
        ),
        {
            label: 'Margin',
            name: 'margin',
            widget: 'object',
            fields: [
                createSelectField(
                    'Type',
                    'type',
                    [
                        { label: 'None', value: 'none' },
                        { label: 'Top', value: 'top' },
                        { label: 'Bottom', value: 'bottom' },
                        { label: 'Both', value: 'both' },
                    ],
                    'none'
                ),
                createSelectField(
                    'Size',
                    'size',
                    [
                        { label: 'Small', value: 'small' },
                        { label: 'Medium', value: 'medium' },
                        { label: 'Large', value: 'large' },
                    ],
                    'medium'
                ),
            ],
        },
    ],
};

const colors = {
    label: 'Colors',
    name: 'colors',
    widget: 'object',
    weight: 200,
    fields: [
        {
            label: 'Light Mode',
            name: 'lightMode',
            widget: 'object',
            fields: colorFields,
        },
        {
            label: 'Dark Mode',
            name: 'darkMode',
            widget: 'object',
            fields: colorFields,
        },
    ],
};

const typography = {
    label: 'Typography & Text Effects',
    name: 'typography',
    widget: 'object',
    weight: 300,
    fields: [
        createSelectField(
            'Font Size',
            'fontSize',
            [
                { label: 'Small', value: 'small' },
                { label: 'Normal', value: 'normal' },
                { label: 'Large', value: 'large' },
            ],
            'normal'
        ),
        {
            name: 'fontColor',
            label: 'Font Color',
            widget: 'color',
            required: false,
        },
        createSelectField(
            'Font Weight',
            'fontWeight',
            [
                { label: 'Thin', value: '100' },
                { label: 'Light', value: '300' },
                { label: 'Regular', value: '400' },
                { label: 'Medium', value: '500' },
                { label: 'Bold', value: '700' },
                { label: 'Black', value: '900' },
            ],
            '400'
        ),
        createSelectField(
            'Line Height',
            'lineHeight',
            [
                { label: 'Tight', value: 'tight' },
                { label: 'Normal', value: 'normal' },
                { label: 'Relaxed', value: 'relaxed' },
            ],
            'normal'
        ),
        createSelectField(
            'Text Alignments',
            'textAlign',
            [
                { label: 'Left', value: 'left' },
                { label: 'Center', value: 'center' },
                { label: 'Right', value: 'right' },
                { label: 'Justify', value: 'justify' },
            ],
            'left'
        ),
    ],
};

const nav = {
    ..._.cloneDeep(colors),
    label: 'Navigation',
    name: 'nav',
};

const css = {
    label: 'CSS Override',
    name: 'css',
    widget: 'code',
    weight: 400,
    default_language: 'css',
    allowed_languages: ['css'],
    required: false,
    hint: 'This will override the default styles for this page.',
};

module.exports = {
    layout,
    colors,
    typography,
    css,
    nav,
    all: [layout, colors, typography, css],
};
