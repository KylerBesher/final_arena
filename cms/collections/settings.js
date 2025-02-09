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
                        { name: 'description', label: 'Description', widget: 'text' },
                        {
                            name: 'logo',
                            label: 'Logo Settings',
                            widget: 'object',
                            fields: [
                                { name: 'main', label: 'Main Logo', widget: 'image' },
                                { name: 'dark', label: 'Dark Mode Logo', widget: 'image' },
                                { name: 'favicon', label: 'Favicon', widget: 'image' },
                                { name: 'alt', label: 'Logo Alt Text', widget: 'string' },
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
                    name: 'style',
                    label: 'Style',
                    widget: 'object',
                    fields: [...styles.all.filter(field => field.name !== 'css')],
                },
                {
                    name: 'seo',
                    label: 'SEO Settings',
                    widget: 'object',
                    fields: [
                        { name: 'defaultImage', label: 'Default OG Image', widget: 'image' },
                        { name: 'twitterHandle', label: 'Twitter Handle', widget: 'string' },
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
