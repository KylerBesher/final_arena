/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // pageExtensions: ["tsx"],
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.module.rules.push(
            ...[
                {
                    test: /\.md$/,
                    loader: 'frontmatter-markdown-loader',
                    options: { mode: ['react-component'] }
                },
                {
                    test: /\.yml$/,
                    type: "json",
                    use: "yaml-loader",
                },
                // {
                //     test: /\.svg$/,
                //     use: "@svgr/webpack",
                // },
            ]
        );
        return config;
    },
};

module.exports = nextConfig;