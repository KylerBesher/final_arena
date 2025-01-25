// Ensure CMS is loaded before using it
const settingsCollection = {
    name: 'settings',
    label: 'Settings',
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
                        }
                    ]
                }
            ]
        }
    ]
};

window.CMS_MANUAL_INIT = true;

// Create custom navbar component
const CustomHeaderComponent = createClass({
  render() {
    const { t } = this.props;
    return h('div', { id: 'control-bar' },
      h('div', { className: 'left-controls' },
        h('span', { className: 'brand-name' }, 'Final Arena CMS'),
        h('div', { className: 'divider' }),
        h('div', { className: 'status-indicator' },
          h('div', { className: 'status-dot' }),
          h('span', {}, 'Connected')
        )
      ),
      h('div', { className: 'right-controls' },
        h('select', { 
          className: 'theme-select',
          onChange: (e) => changeTheme(e.target.value)
        },
          h('option', { value: 'dark' }, 'Dark Theme'),
          h('option', { value: 'light' }, 'Light Theme')
        ),
        h('button', { 
          className: 'nav-button',
          title: 'View documentation'
        }, h('span', {}, 'Documentation')),
        h('button', { 
          className: 'nav-button',
          title: 'Get help'
        }, h('span', {}, 'Support')),
        h('button', { 
          className: 'nav-button',
          title: 'Account settings',
          onClick: () => handleAccount()
        }, 
          h('span', {}, 'Account'),
          h('span', { className: 'user-email' }, 'Loading...')
        )
      )
    );
  }
});

// Register the component
CMS.registerComponent('HeaderComponent', CustomHeaderComponent);

const config = {
    backend: {
        name: 'git-gateway',
        branch: 'main',
    },
    local_backend: true,
    publish_mode: 'editorial_workflow',
    media_folder: 'public/images',
    public_folder: '/images',
    collections: [
        settingsCollection,
        {
            name: 'pages',
            label: 'Pages',
            folder: 'content/pages',
            create: true,
            nested: {
                depth: 100,
                summary: '{{title}}'
            },
            slug: '{{slug}}',
            fields: [
                {
                    label: 'Title',
                    name: 'title',
                    widget: 'string'
                },
                {
                    label: 'Description',
                    name: 'description',
                    widget: 'text'
                },
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
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    // Add the custom header component
    display_url: window.location.origin,
    logo_url: false, // Hide default CMS logo
    locale: 'en',
    show_preview_links: true,
    editor: {
        preview: true
    },
    header_component: 'HeaderComponent',
};

// Initialize the CMS after it's loaded
if (window.CMS) {
    window.CMS.init({ config });
} else {
    window.addEventListener('load', function() {
        window.CMS.init({ config });
    });
}
