/* global h, createClass, CMS */

// Inject Tailwind's CSS into the preview iframe
(function injectTailwindIntoIframe() {
    const iframe = document.getElementById('preview-pane');
    if (!iframe) {
        console.error('Preview iframe not found');
        return;
    }

    // Wait for the iframe to load its srcdoc content.
    iframe.onload = function () {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        if (!doc) {
            console.error('Unable to access iframe document');
            return;
        }

        // Avoid duplicate injections
        if (!doc.getElementById('global-styles')) {
            const link = doc.createElement('link');
            link.id = 'global-styles';
            link.rel = 'stylesheet';
            link.href = '/styles/globals.css'; // Ensure this path points to your compiled CSS file
            // Append the <link> to the <head> of the iframe's document.
            let head = doc.head;
            if (!head) {
                head = doc.createElement('head');
                doc.documentElement.insertBefore(
                    head,
                    doc.documentElement.firstChild
                );
            }
            head.appendChild(link);
        }
    };

    // If the iframe has already loaded, the onload might not trigger.
    // You can force the injection immediately if contentDocument is already available.
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    if (doc && doc.readyState === 'complete') {
        if (!doc.getElementById('global-styles')) {
            const link = doc.createElement('link');
            link.id = 'global-styles';
            link.rel = 'stylesheet';
            link.href = '/styles/globals.css';
            let head = doc.head;
            if (!head) {
                head = doc.createElement('head');
                doc.documentElement.insertBefore(
                    head,
                    doc.documentElement.firstChild
                );
            }
            head.appendChild(link);
        }
    }
})();

// Add dark mode toggle component
const DarkModeToggle = createClass({
    getInitialState() {
        return {
            isDark: false,
        };
    },

    componentDidMount() {
        // Check for saved preference
        const savedMode = localStorage.getItem('preview-darkMode');
        if (savedMode) {
            this.setState({ isDark: savedMode === 'true' });
            if (savedMode === 'true') {
                document.documentElement.classList.add('dark');
            }
        }
    },

    toggleDarkMode() {
        this.setState((prevState) => {
            const newDarkMode = !prevState.isDark;
            localStorage.setItem('preview-darkMode', String(newDarkMode));

            if (newDarkMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }

            return { isDark: newDarkMode };
        });
    },

    render() {
        return h(
            'button',
            {
                onClick: this.toggleDarkMode,
                className:
                    'fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-lg',
                style: {
                    zIndex: 1000,
                },
            },
            this.state.isDark ? '☀️' : '🌙'
        );
    },
});

const PagePreview = createClass({
    getInitialState() {
        return {
            isDark: localStorage.getItem('preview-darkMode') === 'true',
        };
    },

    componentDidMount() {
        // Check saved preference and apply on mount
        if (this.state.isDark) {
            document.documentElement.classList.add('dark');
        }

        // Find the preview iframe and apply dark mode to it
        const iframe = document.getElementById('preview-pane');
        if (iframe) {
            iframe.onload = () => {
                const iframeDoc =
                    iframe.contentDocument || iframe.contentWindow.document;
                if (this.state.isDark) {
                    iframeDoc.documentElement.classList.add('dark');
                }
            };
        }
    },

    toggleDarkMode() {
        this.setState((prevState) => {
            const newDarkMode = !prevState.isDark;
            localStorage.setItem('preview-darkMode', String(newDarkMode));

            // Toggle dark mode on main document
            document.documentElement.classList.toggle('dark');

            // Toggle dark mode on iframe
            const iframe = document.getElementById('preview-pane');
            if (iframe) {
                const iframeDoc =
                    iframe.contentDocument || iframe.contentWindow.document;
                iframeDoc.documentElement.classList.toggle('dark');
            }

            return { isDark: newDarkMode };
        });
    },

    ensureColorStyles(classes) {
        const iframe = document.getElementById('preview-pane');
        if (!iframe) return;

        const iframeDoc =
            iframe.contentDocument || iframe.contentWindow.document;
        if (!iframeDoc) return;

        let styleEl = iframeDoc.getElementById('dynamic-cms-styles');
        if (!styleEl) {
            styleEl = iframeDoc.createElement('style');
            styleEl.id = 'dynamic-cms-styles';
            styleEl.type = 'text/css';
            iframeDoc.head.appendChild(styleEl);
        }

        const colorRegex = /(dark:)?(bg|text)-\[(#[A-F0-9]+)\]/g;
        let match;

        while ((match = colorRegex.exec(classes)) !== null) {
            const [fullMatch, isDark, type, color] = match;
            // Escape all special characters in CSS selectors: [ ] # : .
            const escapedMatch = fullMatch.replace(/([[\]#:.])/g, '\\$1');

            // Check if rule already exists in the stylesheet
            const existingRules = Array.from(styleEl.sheet?.cssRules || []).map(
                (rule) => rule.cssText
            );

            if (isDark) {
                const rule = `html[class~="dark"] .${escapedMatch} { ${type === 'bg' ? 'background-color' : 'color'}: ${color} !important; }`;
                if (!existingRules.includes(rule)) {
                    try {
                        styleEl.sheet.insertRule(
                            rule,
                            styleEl.sheet.cssRules.length
                        );
                        console.log('Added dark mode rule:', rule);
                    } catch (e) {
                        console.error('Failed to add rule:', e, rule);
                    }
                }
            } else {
                const rule = `.${escapedMatch} { ${type === 'bg' ? 'background-color' : 'color'}: ${color} !important; }`;
                if (!existingRules.includes(rule)) {
                    try {
                        styleEl.sheet.insertRule(
                            rule,
                            styleEl.sheet.cssRules.length
                        );
                        console.log('Added rule:', rule);
                    } catch (e) {
                        console.error('Failed to add rule:', e, rule);
                    }
                }
            }
        }
    },

    render: function () {
        const entry = this.props.entry;
        const title = entry.getIn(['data', 'title']);
        const description = entry.getIn(['data', 'description']);
        const sections = entry.getIn(['data', 'sections'])?.toJS() || [];

        console.log('Available on window.cms:', window.cms);

        return h(
            'div',
            { className: 'preview-content' },
            h(
                'button',
                {
                    onClick: this.toggleDarkMode,
                    className:
                        'fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-lg',
                    style: { zIndex: 1000 },
                },
                this.state.isDark ? '☀️' : '🌙'
            ),
            h('h1', null, title),
            h('p', null, description),
            h(
                'div',
                { className: 'sections' },
                sections.map((section, index) => {
                    if (section.type === 'richText') {
                        const RichText = window.cms['cms-components'].default;
                        const processStyles = window.cms['cms-utils'].default;

                        const styleObject = {};
                        if (Array.isArray(section.style)) {
                            section.style.forEach((style) => {
                                const { type, ...rest } = style;
                                styleObject[type] = rest;
                            });
                        }

                        const processedStyles =
                            processStyles?.(styleObject) || '';
                        // Add dynamic styles for any new colors
                        this.ensureColorStyles(processedStyles);

                        return h(
                            'div',
                            {
                                className: `rich-text-section ${processedStyles}`,
                                key: index,
                            },
                            h(RichText, {
                                content: section.content || '',
                            })
                        );
                    }
                    return h(
                        'div',
                        { key: index },
                        `${section.type} not implemented`
                    );
                })
            )
        );
    },
});

// Register the preview template
if (window.CMS) {
    CMS.registerPreviewTemplate('pages', PagePreview);
}
