/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false, // Disable strict mode to prevent duplicate unmounting

    productionBrowserSourceMaps: true,
    // pageExtensions: ["tsx"],
    experimental: {
        esmExternals: true, // Ensures compatibility with ESM packages
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        if (!isServer) {
            config.resolve.fallback = {
                fs: false,
                path: false,
                util: false,
            };
        }
        
        config.module.rules.unshift({
            test: /\.ya?ml$/,
            use: 'js-yaml-loader',
        });

        config.module.rules.push(
            ...[
                {
                    test: /\.md$/,
                    loader: 'frontmatter-markdown-loader',
                    options: { mode: ['react-component'] }
                },
                {
                    test: /\.ts$/,
                    include: /node_modules\/decap-cms-/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["next/babel"],
                        },
                    },
                }
            ]
        );

        // Enable source maps in development
        if(dev) {
            config.devtool = 'source-map';
        }

        return config;
    },
};

module.exports = nextConfig;

