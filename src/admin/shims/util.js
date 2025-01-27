// Simplified util module shim
function format(format, ...args) {
  return format.replace(/%[sdj%]/g, function(match) {
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

// Export as named exports and default
export {
  format,
  asyncLock
};

// Also export as default for CommonJS compatibility
export default {
  format,
  asyncLock
};

// Add to global scope for direct access
if (typeof window !== 'undefined') {
  window.asyncLock = asyncLock;
  window.format = format;
} 