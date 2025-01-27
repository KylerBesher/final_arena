// Simplified path module shim
export function join(...parts) {
  return parts.join('/').replace(/\/+/g, '/');
}

export function dirname(path) {
  return path.replace(/\/[^/]*$/, '');
}

export function basename(path) {
  return path.split('/').pop();
}

export function extname(path) {
  const base = basename(path);
  const i = base.lastIndexOf('.');
  return i < 0 ? '' : base.slice(i);
}

// Add other path methods as needed
export default {
  join,
  dirname,
  basename,
  extname
}; 