export const process = {
  env: {
    NODE_ENV: 'production'
  }
};

export const path = {
  join: (...args) => args.join('/'),
  dirname: (path) => path.split('/').slice(0, -1).join('/'),
  basename: (path) => path.split('/').pop()
}; 