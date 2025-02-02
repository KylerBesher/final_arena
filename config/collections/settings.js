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
                                { name: 'alt', label: 'Logo Alt Text', widget: 'string' }
                            ]
                        },
                        {
                            name: 'social',
                            label: 'Social Links',
                            widget: 'object',
                            fields: [
                                { name: 'twitter', label: 'Twitter URL', widget: 'string', required: false },
                                { name: 'discord', label: 'Discord URL', widget: 'string', required: false },
                                { name: 'instagram', label: 'Instagram URL', widget: 'string', required: false },
                                { name: 'twitch', label: 'Twitch URL', widget: 'string', required: false }
                            ]
                        }
                    ]
                },
                {
                    name: 'theme',
                    label: 'Theme',
                    widget: 'object',
                    fields: [
                        {
                            name: 'colors',
                            label: 'Theme',
                            widget: 'object',
                            fields: [
                                {
                                    name: 'lightMode',
                                    label: 'Light Mode Colors',
                                    widget: 'object',
                                    fields: [
                                        { name: 'primary', label: 'Primary Color', widget: 'color' },
                                        { name: 'secondary', label: 'Secondary Color', widget: 'color' },
                                        { name: 'accent', label: 'Accent Color', widget: 'color' },
                                        { name: 'background', label: 'Background Color', widget: 'color' },
                                        { name: 'text', label: 'Text Color', widget: 'color' }
                                    ]
                                },
                                {
                                    name: 'darkMode',
                                    label: 'Dark Mode Colors',
                                    widget: 'object',
                                    fields: [
                                        { name: 'primary', label: 'Primary Color', widget: 'color' },
                                        { name: 'secondary', label: 'Secondary Color', widget: 'color' },
                                        { name: 'accent', label: 'Accent Color', widget: 'color' },
                                        { name: 'background', label: 'Background Color', widget: 'color' },
                                        { name: 'text', label: 'Text Color', widget: 'color' }
                                    ]
                                }
                            ]
                        },
                    ]
                },
                {
                    name: 'seo',
                    label: 'SEO Settings',
                    widget: 'object',
                    fields: [
                        { name: 'defaultImage', label: 'Default OG Image', widget: 'image' },
                        { name: 'twitterHandle', label: 'Twitter Handle', widget: 'string' },
                        { name: 'googleAnalyticsId', label: 'Google Analytics ID', widget: 'string', required: false }
                    ]
                }
            ]
        }
    ]
};

module.exports = settingsCollection;
