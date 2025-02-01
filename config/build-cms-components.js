const webpack = require('webpack');
const path = require('path');
const config = require('./cms-components.config');

function createWebpackConfig(component) {
  return {
    mode: 'production',
    entry: component.entry,
    output: {
      path: path.resolve(__dirname, '../public/admin/components'),
      filename: component.output,
      library: component.name,
      libraryTarget: 'umd',
      globalObject: 'this'
    },
    ...config.webpack,
    // Add source maps for debugging
    devtool: 'source-map'
  };
}

async function buildComponents() {
  for (const component of config.components) {
    console.log(`Building ${component.name}...`);
    
    const webpackConfig = createWebpackConfig(component);
    const compiler = webpack(webpackConfig);
    
    await new Promise((resolve, reject) => {
      compiler.run((err, stats) => {
        if (err) {
          console.error(`Error building ${component.name}:`, err);
          reject(err);
          return;
        }
        
        console.log(stats.toString({
          colors: true,
          modules: false,
          children: false,
          chunks: false,
          chunkModules: false
        }));
        
        resolve();
      });
    });
  }
}

buildComponents().catch(console.error); 