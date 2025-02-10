import React from 'react';

export function HamburgerMenu({ isOpen, style = 'spin' }) {
    console.log('Hamburger style:', style); // Debug log

    // Base classes for the container
    const baseClasses = 'relative w-6 h-6 flex flex-col justify-between';

    // Three distinct animation styles
    const styles = {
        spin: {
            line1: `absolute h-0.5 bg-current transform transition-all duration-300 w-full ${
                isOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
            }`,
            line2: `absolute h-0.5 bg-current transform transition-all duration-300 w-full top-1/2 -translate-y-1/2 ${
                isOpen ? 'opacity-0' : ''
            }`,
            line3: `absolute h-0.5 bg-current transform transition-all duration-300 w-full ${
                isOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'
            }`,
        },
        collapse: {
            line1: `absolute h-0.5 bg-current transform transition-all duration-300 ${
                isOpen
                    ? 'w-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45'
                    : 'w-full top-0'
            }`,
            line2: `absolute h-0.5 bg-current transform transition-all duration-300 ${
                isOpen ? 'w-0 opacity-0' : 'w-3/4 opacity-100'
            } top-1/2 -translate-y-1/2 right-0`,
            line3: `absolute h-0.5 bg-current transform transition-all duration-300 ${
                isOpen
                    ? 'w-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 -rotate-45'
                    : 'w-1/2 bottom-0 right-0'
            }`,
        },
        squeeze: {
            line1: `absolute h-0.5 bg-current transform transition-all duration-300 origin-left ${
                isOpen
                    ? 'w-full top-1/2 -translate-y-1/2 rotate-45'
                    : 'w-full top-0'
            }`,
            line2: `absolute h-0.5 bg-current transform transition-all duration-300 ${
                isOpen ? 'w-0 opacity-0' : 'w-full opacity-100'
            } top-1/2 -translate-y-1/2`,
            line3: `absolute h-0.5 bg-current transform transition-all duration-300 origin-left ${
                isOpen
                    ? 'w-full top-1/2 -translate-y-1/2 -rotate-45'
                    : 'w-full bottom-0'
            }`,
        },
        slide: {
            line1: `absolute h-0.5 bg-current transform transition-all duration-300 w-full ${
                isOpen
                    ? 'top-1/2 -translate-y-1/2 rotate-45 translate-x-0'
                    : 'top-0 translate-x-2'
            }`,
            line2: `absolute h-0.5 bg-current transform transition-all duration-300 w-full top-1/2 -translate-y-1/2 ${
                isOpen ? 'opacity-0 translate-x-4' : 'translate-x-0'
            }`,
            line3: `absolute h-0.5 bg-current transform transition-all duration-300 w-full ${
                isOpen
                    ? 'top-1/2 -translate-y-1/2 -rotate-45 translate-x-0'
                    : 'bottom-0 -translate-x-2'
            }`,
        },
        rotate: {
            line1: `absolute h-0.5 bg-current transform transition-all duration-300 w-full origin-left ${
                isOpen
                    ? 'top-1/2 -translate-y-1/2 rotate-[405deg]'
                    : 'top-0 rotate-0'
            }`,
            line2: `absolute h-0.5 bg-current transform transition-all duration-300 w-full top-1/2 -translate-y-1/2 ${
                isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
            }`,
            line3: `absolute h-0.5 bg-current transform transition-all duration-300 w-full origin-left ${
                isOpen
                    ? 'top-1/2 -translate-y-1/2 -rotate-[405deg]'
                    : 'bottom-0 rotate-0'
            }`,
        },
        elastic: {
            line1: `absolute h-0.5 bg-current transform transition-all duration-300 w-full ${
                isOpen
                    ? 'top-1/2 -translate-y-1/2 rotate-45 scale-x-125'
                    : 'top-0 scale-x-100'
            }`,
            line2: `absolute h-0.5 bg-current transform transition-all duration-300 w-full top-1/2 -translate-y-1/2 ${
                isOpen ? 'opacity-0 scale-x-75' : 'opacity-100 scale-x-100'
            }`,
            line3: `absolute h-0.5 bg-current transform transition-all duration-300 w-full ${
                isOpen
                    ? 'top-1/2 -translate-y-1/2 -rotate-45 scale-x-125'
                    : 'bottom-0 scale-x-100'
            }`,
        },
    };

    const currentStyle = styles[style] || styles.spin;
    console.log('Current style classes:', currentStyle); // Debug log

    return (
        <div className={baseClasses}>
            <span className={currentStyle.line1} />
            <span className={currentStyle.line2} />
            <span className={currentStyle.line3} />
        </div>
    );
}
