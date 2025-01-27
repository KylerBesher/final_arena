// Simple TOML parser shim
function parse() {
    throw new Error('TOML parsing not supported');
}

function stringify() {
    throw new Error('TOML stringification not supported');
}

const tomlUtils = {
    parse,
    stringify
};

export default tomlUtils;
