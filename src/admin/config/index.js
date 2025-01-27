const config = {
    backend: {
        name: 'git-gateway',
        branch: 'main'
    },
    local_backend: true,
    publish_mode: 'editorial_workflow',
    media_folder: 'public/images',
    public_folder: '/images',
    collections: []
};

export default config;
