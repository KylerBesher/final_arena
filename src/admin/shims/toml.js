// Simple TOML parser shim
export function parse(text) {
  throw new Error('TOML parsing not supported');
}

export function stringify(obj) {
  throw new Error('TOML stringification not supported');
}

export default {
  parse,
  stringify
}; 