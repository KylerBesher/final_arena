// Suppress React warnings
const originalConsoleError = console.error;
console.error = (...args) => {
    if (args[0]?.includes('Warning: ')) return;
    originalConsoleError(...args);
};

import CMS from 'decap-cms-app';
import { RichText } from '../../components/sections/rich-text';
import './preview-templates/PagePreview';

// Suppress React 18 warnings in development
window.__webpack_public_path__ = window.location.origin + '/';
window.global = window;

// Initialize CMS
window.CMS_MANUAL_INIT = true;

const config = {
    backend: {
        name: 'git-gateway',
        branch: 'main'
    },
    local_backend: true,
    media_folder: 'public/images',
    public_folder: '/images',
    collections: [
        {
            name: 'pages',
            label: 'Pages',
            folder: 'content/pages',
            create: true,
            fields: [
                { label: 'Title', name: 'title', widget: 'string' },
                { label: 'Description', name: 'description', widget: 'text' },
                {
                    label: 'Sections',
                    name: 'sections',
                    widget: 'list',
                    types: [
                        {
                            label: 'Rich Text',
                            name: 'richText',
                            widget: 'object',
                            fields: [
                                {
                                    label: 'Content',
                                    name: 'content',
                                    widget: 'markdown'
                                },
                                {
                                    label: 'Style',
                                    name: 'style',
                                    widget: 'object',
                                    fields: [
                                        {
                                            label: 'Background',
                                            name: 'background',
                                            widget: 'select',
                                            options: [
                                                'transparent',
                                                'white',
                                                'light',
                                                'dark',
                                                'primary',
                                                'secondary',
                                                'accent'
                                            ],
                                            default: 'transparent'
                                        },
                                        {
                                            label: 'Text Color',
                                            name: 'text',
                                            widget: 'select',
                                            options: ['default', 'white', 'dark', 'light'],
                                            default: 'default'
                                        },
                                        {
                                            label: 'Padding',
                                            name: 'padding',
                                            widget: 'select',
                                            options: ['none', 'small', 'default', 'large'],
                                            default: 'default'
                                        },
                                        {
                                            label: 'Width',
                                            name: 'width',
                                            widget: 'select',
                                            options: ['full', 'default', 'narrow'],
                                            default: 'default'
                                        },
                                        {
                                            label: 'Container',
                                            name: 'container',
                                            widget: 'boolean',
                                            default: true
                                        },
                                        {
                                            label: 'Prose',
                                            name: 'prose',
                                            widget: 'boolean',
                                            default: true
                                        },
                                        {
                                            label: 'Alignment',
                                            name: 'align',
                                            widget: 'select',
                                            options: ['left', 'center', 'right'],
                                            default: 'left'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

CMS.init({ config });
