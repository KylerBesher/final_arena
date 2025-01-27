// Simplified util module shim
function format(format, ...args) {
    return format.replace(/%[sdj%]/g, function (match) {
        if (match === '%%') return '%';
        return String(args.shift());
    });
}

// AsyncLock implementation
function asyncLock() {
    let locked = false;
    return async (fn) => {
        if (locked) return;
        locked = true;
        try {
            await fn();
        } finally {
            locked = false;
        }
    };
}

const utilFunctions = {
    format,
    asyncLock
};

export default utilFunctions;

// Add to global scope for direct access
if (typeof window !== 'undefined') {
    window.asyncLock = asyncLock;
    window.format = format;
}
