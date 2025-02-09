const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

// Ensure the output directory exists
const outputPath = path.join(process.cwd(), 'public/admin/components');
if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
}

const config = {
    mode: 'production',
    entry: './components/sections/rich-text.jsx',
    output: {
        path: outputPath,
        filename: 'cms-components.js',
        library: {
            name: 'cms-components',
            type: 'umd',
        },
        globalObject: 'this',
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
                }),
        );
        process.exit(1);
    }
    console.log('CMS components built successfully!');
});
