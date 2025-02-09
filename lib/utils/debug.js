/* eslint-disable no-console */
const debug = {
    log: (...args) => {
        if(process.env.NODE_ENV !== 'production') {
            console.log(...args);
        }
    },
    group: (...args) => {
        if(process.env.NODE_ENV !== 'production') {
            console.group(...args);
        }
    },
    groupEnd: () => {
        if(process.env.NODE_ENV !== 'production') {
            console.groupEnd();
        }
    },
    warn: (...args) => {
        if(process.env.NODE_ENV !== 'production') {
            console.warn(...args);
        }
    },
    error: (...args) => {
        // Errors should show in all environments
        console.error(...args);
    },
};

export default debug;
