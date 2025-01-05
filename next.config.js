/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: true,
    // pageExtensions: ["tsx"],
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.module.rules.push(
            ...[
                {
                    test: /\.yml$/,
                    type: "json",
                    use: "yaml-loader",
                },
                {
                    test: /\.md$/,
                    loader: 'frontmatter-markdown-loader',
                    options: { mode: ['react-component'] }
                },
                
                // {
                //     test: /\.svg$/,
                //     use: "@svgr/webpack",
                // },
            ]
        );

        // Enable source maps in development
        if (dev) {
            config.devtool = 'source-map';
        }

        return config;
    },
};

module.exports = nextConfig;