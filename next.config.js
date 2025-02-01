const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
            path: false,
            util: false,
        };
        // Add path aliases
        config.resolve.alias = {
            ...config.resolve.alias,
            components: path.join(__dirname, 'components')
        };
        return config;
    },
};

module.exports = nextConfig;

