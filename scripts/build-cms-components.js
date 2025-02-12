const fs = require('fs');
const path = require('path');

const webpack = require('webpack');

// Ensure the output directory exists
const outputPath = path.join(process.cwd(), 'public/admin/components');
if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
}

const config = {
    mode: 'production',
    entry: {
        'cms-components': './components/sections/rich-text.jsx',
        'cms-utils': './lib/styles/processSectionStyles.js',
    },
    output: {
        path: outputPath,
        filename: '[name].js',
        library: {
            name: ['cms', '[name]'],
            type: 'umd',
        },
        globalObject: 'window',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            components: path.resolve(__dirname, '../components'),
            lib: path.resolve(__dirname, '../lib'),
        },
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },
};

webpack(config, (err, stats) => {
    if (err || stats.hasErrors()) {
        console.error(
            err ||
                stats.toString({
                    colors: true,
                    modules: false,
                    children: false,
                    chunks: false,
                    chunkModules: false,
                })
        );
        process.exit(1);
    }
    console.log('CMS components built successfully!');
});
