const styles = require('../../cms/collections/pages/styles');

const settingsCollection = {
    name: 'static',
    label: 'Static',
    preview_component: 'PagePreview',
    files: [
        {
            name: 'site',
            label: 'Site Settings',
            file: 'content/settings/site.json',
            fields: [
                {
                    name: 'branding',
                    label: 'Branding',
                    widget: 'object',
                    fields: [
                        { name: 'name', label: 'Site Name', widget: 'string' },
                        { name: 'tagline', label: 'Tagline', widget: 'string' },
                        {
                            name: 'description',
                            label: 'Description',
                            widget: 'text',
                        },
                        {
                            name: 'logo',
                            label: 'Logo Settings',
                            widget: 'object',
                            fields: [
                                {
                                    name: 'main',
                                    label: 'Main Logo',
                                    widget: 'image',
                                },
                                {
                                    name: 'dark',
                                    label: 'Dark Mode Logo',
                                    widget: 'image',
                                },
                                {
                                    name: 'favicon',
                                    label: 'Favicon',
                                    widget: 'image',
                                },
                                {
                                    name: 'alt',
                                    label: 'Logo Alt Text',
                                    widget: 'string',
                                },
                            ],
                        },
                        {
                            name: 'social',
                            label: 'Social Links',
                            widget: 'object',
                            fields: [
                                {
                                    name: 'twitter',
                                    label: 'Twitter URL',
                                    widget: 'string',
                                    required: false,
                                },
                                {
                                    name: 'discord',
                                    label: 'Discord URL',
                                    widget: 'string',
                                    required: false,
                                },
                                {
                                    name: 'instagram',
                                    label: 'Instagram URL',
                                    widget: 'string',
                                    required: false,
                                },
                                {
                                    name: 'twitch',
                                    label: 'Twitch URL',
                                    widget: 'string',
                                    required: false,
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'navigation',
                    label: 'Navigation',
                    widget: 'object',
                    fields: [
                        {
                            name: 'layout',
                            label: 'Layout & Structure',
                            widget: 'object',
                            fields: [
                                {
                                    name: 'type',
                                    label: 'Navigation Type',
                                    widget: 'select',
                                    options: [
                                        {
                                            label: 'Standard',
                                            value: 'standard',
                                        },
                                        { label: 'Minimal', value: 'minimal' },
                                        {
                                            label: 'Centered',
                                            value: 'centered',
                                        },
                                        { label: 'Split', value: 'split' },
                                    ],
                                    default: 'standard',
                                },
                                {
                                    name: 'position',
                                    label: 'Position',
                                    widget: 'select',
                                    options: [
                                        { label: 'Fixed', value: 'fixed' },
                                        { label: 'Static', value: 'static' },
                                    ],
                                    default: 'fixed',
                                },
                                {
                                    name: 'height',
                                    label: 'Navigation Height (px)',
                                    widget: 'number',
                                    value_type: 'int',
                                    min: 40,
                                    max: 200,
                                    step: 1,
                                    default: 90,
                                },
                                {
                                    name: 'maxWidth',
                                    label: 'Maximum Width (px)',
                                    widget: 'number',
                                    value_type: 'int',
                                    min: 400,
                                    max: 2000,
                                    step: 10,
                                    default: 1200,
                                },
                                {
                                    name: 'containerPadding',
                                    label: 'Container Padding (px)',
                                    widget: 'number',
                                    value_type: 'int',
                                    min: 0,
                                    max: 100,
                                    step: 4,
                                    default: 24,
                                },
                            ],
                        },
                        {
                            name: 'colors',
                            label: 'Colors',
                            widget: 'object',
                            fields: [
                                {
                                    name: 'lightMode',
                                    label: 'Light Mode',
                                    widget: 'object',
                                    fields: [
                                        {
                                            name: 'nav',
                                            label: 'Navigation',
                                            widget: 'object',
                                            fields: [
                                                {
                                                    name: 'background',
                                                    label: 'Background Color',
                                                    widget: 'color',
                                                    default: '#ffffff',
                                                },
                                                {
                                                    name: 'text',
                                                    label: 'Text Color',
                                                    widget: 'color',
                                                    default: '#1a1a1a',
                                                },
                                                {
                                                    name: 'textHover',
                                                    label: 'Text Hover Color',
                                                    widget: 'color',
                                                    default: '#2563eb',
                                                },
                                                {
                                                    name: 'border',
                                                    label: 'Border Color',
                                                    widget: 'color',
                                                    default: '#e5e7eb',
                                                },
                                            ],
                                        },
                                        {
                                            name: 'dropdown',
                                            label: 'Dropdowns',
                                            widget: 'object',
                                            fields: [
                                                {
                                                    name: 'background',
                                                    label: 'Background Color',
                                                    widget: 'color',
                                                    default: '#ffffff',
                                                },
                                                {
                                                    name: 'backgroundHover',
                                                    label: 'Background Hover Color',
                                                    widget: 'color',
                                                    default: '#f3f4f6',
                                                },
                                                {
                                                    name: 'text',
                                                    label: 'Text Color',
                                                    widget: 'color',
                                                    default: '#1a1a1a',
                                                },
                                                {
                                                    name: 'textHover',
                                                    label: 'Text Hover Color',
                                                    widget: 'color',
                                                    default: '#2563eb',
                                                },
                                                {
                                                    name: 'border',
                                                    label: 'Border Color',
                                                    widget: 'color',
                                                    default: '#e5e7eb',
                                                },
                                                {
                                                    name: 'divider',
                                                    label: 'Divider Color',
                                                    widget: 'color',
                                                    default: '#e5e7eb',
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    name: 'darkMode',
                                    label: 'Dark Mode',
                                    widget: 'object',
                                    fields: [
                                        {
                                            name: 'nav',
                                            label: 'Navigation',
                                            widget: 'object',
                                            fields: [
                                                {
                                                    name: 'background',
                                                    label: 'Background Color',
                                                    widget: 'color',
                                                    default: '#111827',
                                                },
                                                {
                                                    name: 'text',
                                                    label: 'Text Color',
                                                    widget: 'color',
                                                    default: '#f3f4f6',
                                                },
                                                {
                                                    name: 'textHover',
                                                    label: 'Text Hover Color',
                                                    widget: 'color',
                                                    default: '#60a5fa',
                                                },
                                                {
                                                    name: 'border',
                                                    label: 'Border Color',
                                                    widget: 'color',
                                                    default: '#374151',
                                                },
                                            ],
                                        },
                                        {
                                            name: 'dropdown',
                                            label: 'Dropdowns',
                                            widget: 'object',
                                            fields: [
                                                {
                                                    name: 'background',
                                                    label: 'Background Color',
                                                    widget: 'color',
                                                    default: '#1f2937',
                                                },
                                                {
                                                    name: 'backgroundHover',
                                                    label: 'Background Hover Color',
                                                    widget: 'color',
                                                    default: '#374151',
                                                },
                                                {
                                                    name: 'text',
                                                    label: 'Text Color',
                                                    widget: 'color',
                                                    default: '#f3f4f6',
                                                },
                                                {
                                                    name: 'textHover',
                                                    label: 'Text Hover Color',
                                                    widget: 'color',
                                                    default: '#60a5fa',
                                                },
                                                {
                                                    name: 'border',
                                                    label: 'Border Color',
                                                    widget: 'color',
                                                    default: '#374151',
                                                },
                                                {
                                                    name: 'divider',
                                                    label: 'Divider Color',
                                                    widget: 'color',
                                                    default: '#374151',
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            name: 'mobile',
                            label: 'Mobile Menu',
                            widget: 'object',
                            fields: [
                                {
                                    name: 'hamburger',
                                    label: 'Hamburger Menu Style',
                                    widget: 'select',
                                    options: [
                                        { label: 'Spin', value: 'spin' },
                                        {
                                            label: 'Collapse',
                                            value: 'collapse',
                                        },
                                        { label: 'Squeeze', value: 'squeeze' },
                                        { label: 'Slide', value: 'slide' },
                                        { label: 'Rotate', value: 'rotate' },
                                        { label: 'Elastic', value: 'elastic' },
                                    ],
                                    default: 'spin',
                                },
                                {
                                    name: 'type',
                                    label: 'Menu Type',
                                    widget: 'select',
                                    options: [
                                        {
                                            label: 'Overlay (Full Screen)',
                                            value: 'overlay',
                                        },
                                        {
                                            label: 'Slide from Left',
                                            value: 'slide-left',
                                        },
                                        {
                                            label: 'Slide from Right',
                                            value: 'slide-right',
                                        },
                                        {
                                            label: 'Push Content Left',
                                            value: 'push-left',
                                        },
                                        {
                                            label: 'Push Content Right',
                                            value: 'push-right',
                                        },
                                        {
                                            label: 'Drawer from Bottom',
                                            value: 'drawer-bottom',
                                        },
                                    ],
                                    default: 'overlay',
                                },
                                {
                                    name: 'width',
                                    label: 'Menu Width (for slide/push menus)',
                                    widget: 'number',
                                    value_type: 'int',
                                    min: 200,
                                    max: 600,
                                    step: 10,
                                    default: 300,
                                },
                                {
                                    name: 'animation',
                                    label: 'Animation Settings',
                                    widget: 'object',
                                    fields: [
                                        {
                                            name: 'duration',
                                            label: 'Animation Duration (ms)',
                                            widget: 'number',
                                            value_type: 'int',
                                            min: 100,
                                            max: 1000,
                                            step: 50,
                                            default: 300,
                                        },
                                        {
                                            name: 'timing',
                                            label: 'Timing Function',
                                            widget: 'select',
                                            options: [
                                                {
                                                    label: 'Ease',
                                                    value: 'ease',
                                                },
                                                {
                                                    label: 'Linear',
                                                    value: 'linear',
                                                },
                                                {
                                                    label: 'Ease In',
                                                    value: 'ease-in',
                                                },
                                                {
                                                    label: 'Ease Out',
                                                    value: 'ease-out',
                                                },
                                                {
                                                    label: 'Ease In Out',
                                                    value: 'ease-in-out',
                                                },
                                            ],
                                            default: 'ease-in-out',
                                        },
                                    ],
                                },
                                {
                                    name: 'backdrop',
                                    label: 'Backdrop Settings',
                                    widget: 'object',
                                    fields: [
                                        {
                                            name: 'blur',
                                            label: 'Backdrop Blur',
                                            widget: 'boolean',
                                            default: true,
                                        },
                                        {
                                            name: 'opacity',
                                            label: 'Backdrop Opacity',
                                            widget: 'number',
                                            value_type: 'float',
                                            min: 0,
                                            max: 1,
                                            step: 0.1,
                                            default: 0.5,
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'section_style',
                    label: 'Section Styles',
                    widget: 'object',
                    fields: [
                        ...styles.all.filter((field) => field.name !== 'css'),
                    ],
                },
                {
                    name: 'seo',
                    label: 'SEO Settings',
                    widget: 'object',
                    fields: [
                        {
                            name: 'defaultImage',
                            label: 'Default OG Image',
                            widget: 'image',
                        },
                        {
                            name: 'twitterHandle',
                            label: 'Twitter Handle',
                            widget: 'string',
                        },
                        {
                            name: 'googleAnalyticsId',
                            label: 'Google Analytics ID',
                            widget: 'string',
                            required: false,
                        },
                    ],
                },
            ],
        },
    ],
};

module.exports = settingsCollection;
