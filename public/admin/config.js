import CMS from 'decap-cms-app';

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
                { label: 'Body', name: 'body', widget: 'markdown' }
            ]
        }
    ]
};

CMS.init({ config });
