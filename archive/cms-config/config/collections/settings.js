const settingsCollection = {
    name: 'static',
    label: 'Static',
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
                {
                    name: 'strings',
                    label: 'Site Text',
                    widget: 'object',
                    fields: [
                        { name: 'title_template', label: 'Title Template', widget: 'string', hint: 'Use %s for page title' },
                        { name: 'default_title', label: 'Default Title', widget: 'string' },
                        { name: 'default_description', label: 'Default Description', widget: 'text' },
                        {
                            name: 'nav',
                            label: 'Navigation',
                            widget: 'object',
                            fields: [
                                { name: 'menu_label', label: 'Menu Label', widget: 'string' },
                                { name: 'skip_to_content', label: 'Skip to Content Text', widget: 'string' }
                            ]
                        },
                        {
                            name: 'footer',
                            label: 'Footer',
                            widget: 'object',
                            fields: [
                                { name: 'copyright', label: 'Copyright Text', widget: 'string', hint: 'Use {{year}} for current year' }
                            ]
                        },
                        {
                            name: 'cta',
                            label: 'Call to Actions',
                            widget: 'object',
                            fields: [
                                { name: 'default_button', label: 'Default Button Text', widget: 'string' },
                                { name: 'contact_button', label: 'Contact Button Text', widget: 'string' },
                                { name: 'events_button', label: 'Events Button Text', widget: 'string' }
                            ]
                        },
                        {
                            name: 'error',
                            label: 'Error Messages',
                            widget: 'object',
                            fields: [
                                { name: '404_title', label: '404 Title', widget: 'string' },
                                { name: '404_message', label: '404 Message', widget: 'text' },
                                { name: '500_title', label: '500 Title', widget: 'string' },
                                { name: '500_message', label: '500 Message', widget: 'text' }
                            ]
                        }
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
