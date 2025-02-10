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
                                },
                                {
                                    name: 'position',
                                    label: 'Position',
                                    widget: 'select',
                                    options: [
                                        { label: 'Sticky', value: 'sticky' },
                                        { label: 'Fixed', value: 'fixed' },
                                        { label: 'Static', value: 'static' },
                                    ],
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
                                    default: 1280,
                                },
                                {
                                    name: 'containerPadding',
                                    label: 'Container Padding (px)',
                                    widget: 'number',
                                    value_type: 'int',
                                    min: 0,
                                    max: 100,
                                    step: 2,
                                    default: 16,
                                },
                            ],
                        },
                        {
                            name: 'dropdowns',
                            label: 'Dropdown Menus',
                            widget: 'object',
                            fields: [
                                {
                                    name: 'width',
                                    label: 'Dropdown Width (px)',
                                    widget: 'number',
                                    value_type: 'int',
                                    min: 100,
                                    max: 600,
                                    step: 4,
                                    default: 256,
                                },
                                {
                                    name: 'alignment',
                                    label: 'Dropdown Alignment',
                                    widget: 'select',
                                    options: [
                                        { label: 'Left Edge', value: 'left' },
                                        { label: 'Center', value: 'center' },
                                        { label: 'Right Edge', value: 'right' },
                                    ],
                                    default: 'left',
                                },
                                {
                                    name: 'spacing',
                                    label: 'Spacing',
                                    widget: 'object',
                                    fields: [
                                        {
                                            name: 'itemPadding',
                                            label: 'Item Padding (px)',
                                            widget: 'number',
                                            value_type: 'int',
                                            min: 4,
                                            max: 40,
                                            step: 2,
                                            default: 12,
                                        },
                                        {
                                            name: 'itemGap',
                                            label: 'Gap Between Items (px)',
                                            widget: 'number',
                                            value_type: 'int',
                                            min: 0,
                                            max: 40,
                                            step: 2,
                                            default: 4,
                                        },
                                        {
                                            name: 'offsetFromParent',
                                            label: 'Offset from Parent (px)',
                                            widget: 'number',
                                            value_type: 'int',
                                            min: 0,
                                            max: 40,
                                            step: 2,
                                            default: 8,
                                        },
                                    ],
                                },
                                {
                                    name: 'appearance',
                                    label: 'Appearance',
                                    widget: 'object',
                                    fields: [
                                        {
                                            name: 'borderRadius',
                                            label: 'Border Radius (px)',
                                            widget: 'number',
                                            value_type: 'int',
                                            min: 0,
                                            max: 40,
                                            step: 2,
                                            default: 6,
                                        },
                                        {
                                            name: 'shadow',
                                            label: 'Shadow Style',
                                            widget: 'select',
                                            options: [
                                                {
                                                    label: 'None',
                                                    value: 'none',
                                                },
                                                { label: 'Small', value: 'sm' },
                                                {
                                                    label: 'Medium',
                                                    value: 'md',
                                                },
                                                { label: 'Large', value: 'lg' },
                                                {
                                                    label: 'Extra Large',
                                                    value: 'xl',
                                                },
                                            ],
                                            default: 'lg',
                                        },
                                        {
                                            name: 'dividers',
                                            label: 'Item Dividers',
                                            widget: 'boolean',
                                            default: true,
                                        },
                                        {
                                            name: 'indicators',
                                            label: 'Dropdown Indicators',
                                            widget: 'select',
                                            options: [
                                                {
                                                    label: 'Arrows',
                                                    value: 'arrows',
                                                },
                                                {
                                                    label: 'Chevrons',
                                                    value: 'chevrons',
                                                },
                                                {
                                                    label: 'Plus/Minus',
                                                    value: 'plus',
                                                },
                                                {
                                                    label: 'Dots',
                                                    value: 'dots',
                                                },
                                                {
                                                    label: 'None',
                                                    value: 'none',
                                                },
                                            ],
                                            default: 'chevrons',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            name: 'animation',
                            label: 'Animation & Interaction',
                            widget: 'object',
                            fields: [
                                {
                                    name: 'transitions',
                                    label: 'Transitions',
                                    widget: 'object',
                                    fields: [
                                        {
                                            name: 'type',
                                            label: 'Animation Type',
                                            widget: 'select',
                                            options: [
                                                {
                                                    label: 'Fade',
                                                    value: 'fade',
                                                },
                                                {
                                                    label: 'Slide',
                                                    value: 'slide',
                                                },
                                                {
                                                    label: 'Scale',
                                                    value: 'scale',
                                                },
                                                {
                                                    label: 'Slide & Fade',
                                                    value: 'slideFade',
                                                },
                                            ],
                                            default: 'slideFade',
                                        },
                                        {
                                            name: 'duration',
                                            label: 'Duration (ms)',
                                            widget: 'number',
                                            value_type: 'int',
                                            min: 0,
                                            max: 1000,
                                            step: 50,
                                            default: 200,
                                        },
                                        {
                                            name: 'timing',
                                            label: 'Timing Function',
                                            widget: 'select',
                                            options: [
                                                {
                                                    label: 'Linear',
                                                    value: 'linear',
                                                },
                                                {
                                                    label: 'Ease',
                                                    value: 'ease',
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
                                            default: 'ease-out',
                                        },
                                    ],
                                },
                                {
                                    name: 'hover',
                                    label: 'Hover Effects',
                                    widget: 'object',
                                    fields: [
                                        {
                                            name: 'style',
                                            label: 'Hover Style',
                                            widget: 'select',
                                            options: [
                                                {
                                                    label: 'None',
                                                    value: 'none',
                                                },
                                                {
                                                    label: 'Underline',
                                                    value: 'underline',
                                                },
                                                {
                                                    label: 'Background',
                                                    value: 'background',
                                                },
                                                {
                                                    label: 'Scale',
                                                    value: 'scale',
                                                },
                                                {
                                                    label: 'Glow',
                                                    value: 'glow',
                                                },
                                            ],
                                            default: 'background',
                                        },
                                        {
                                            name: 'delay',
                                            label: 'Hover Delay (ms)',
                                            widget: 'number',
                                            value_type: 'int',
                                            min: 0,
                                            max: 500,
                                            step: 50,
                                            default: 100,
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            name: 'responsive',
                            label: 'Responsive Behavior',
                            widget: 'object',
                            fields: [
                                {
                                    name: 'breakpoints',
                                    label: 'Breakpoints',
                                    widget: 'object',
                                    fields: [
                                        {
                                            name: 'mobile',
                                            label: 'Mobile Breakpoint (px)',
                                            widget: 'number',
                                            value_type: 'int',
                                            min: 320,
                                            max: 767,
                                            step: 1,
                                            default: 640,
                                        },
                                        {
                                            name: 'tablet',
                                            label: 'Tablet Breakpoint (px)',
                                            widget: 'number',
                                            value_type: 'int',
                                            min: 768,
                                            max: 1023,
                                            step: 1,
                                            default: 768,
                                        },
                                        {
                                            name: 'desktop',
                                            label: 'Desktop Breakpoint (px)',
                                            widget: 'number',
                                            value_type: 'int',
                                            min: 1024,
                                            max: 1920,
                                            step: 1,
                                            default: 1024,
                                        },
                                    ],
                                },
                                {
                                    name: 'mobileMenu',
                                    label: 'Mobile Menu',
                                    widget: 'object',
                                    fields: [
                                        {
                                            name: 'type',
                                            label: 'Menu Type',
                                            widget: 'select',
                                            options: [
                                                {
                                                    label: 'Drawer',
                                                    value: 'drawer',
                                                },
                                                {
                                                    label: 'Overlay',
                                                    value: 'overlay',
                                                },
                                                {
                                                    label: 'Accordion',
                                                    value: 'accordion',
                                                },
                                            ],
                                            default: 'drawer',
                                        },
                                        {
                                            name: 'position',
                                            label: 'Menu Position',
                                            widget: 'select',
                                            options: [
                                                {
                                                    label: 'Left',
                                                    value: 'left',
                                                },
                                                {
                                                    label: 'Right',
                                                    value: 'right',
                                                },
                                                { label: 'Top', value: 'top' },
                                                {
                                                    label: 'Bottom',
                                                    value: 'bottom',
                                                },
                                            ],
                                            default: 'right',
                                        },
                                    ],
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
                                                },
                                                {
                                                    name: 'text',
                                                    label: 'Text Color',
                                                    widget: 'color',
                                                },
                                                {
                                                    name: 'textHover',
                                                    label: 'Text Hover Color',
                                                    widget: 'color',
                                                },
                                                {
                                                    name: 'border',
                                                    label: 'Border Color',
                                                    widget: 'color',
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
                                                },
                                                {
                                                    name: 'backgroundHover',
                                                    label: 'Background Hover Color',
                                                    widget: 'color',
                                                },
                                                {
                                                    name: 'text',
                                                    label: 'Text Color',
                                                    widget: 'color',
                                                },
                                                {
                                                    name: 'textHover',
                                                    label: 'Text Hover Color',
                                                    widget: 'color',
                                                },
                                                {
                                                    name: 'border',
                                                    label: 'Border Color',
                                                    widget: 'color',
                                                },
                                                {
                                                    name: 'divider',
                                                    label: 'Divider Color',
                                                    widget: 'color',
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
                                                },
                                                {
                                                    name: 'text',
                                                    label: 'Text Color',
                                                    widget: 'color',
                                                },
                                                {
                                                    name: 'textHover',
                                                    label: 'Text Hover Color',
                                                    widget: 'color',
                                                },
                                                {
                                                    name: 'border',
                                                    label: 'Border Color',
                                                    widget: 'color',
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
                                                },
                                                {
                                                    name: 'backgroundHover',
                                                    label: 'Background Hover Color',
                                                    widget: 'color',
                                                },
                                                {
                                                    name: 'text',
                                                    label: 'Text Color',
                                                    widget: 'color',
                                                },
                                                {
                                                    name: 'textHover',
                                                    label: 'Text Hover Color',
                                                    widget: 'color',
                                                },
                                                {
                                                    name: 'border',
                                                    label: 'Border Color',
                                                    widget: 'color',
                                                },
                                                {
                                                    name: 'divider',
                                                    label: 'Divider Color',
                                                    widget: 'color',
                                                },
                                            ],
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
