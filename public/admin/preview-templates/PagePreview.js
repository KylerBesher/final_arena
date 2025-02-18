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
        fetch('/admin/settings/site.json')
            .then((response) => response.json())
            .then((data) => {
                console.log('Loaded site settings:', data);
                this.setState({ siteSettings: data });
            })
            .catch((error) => {
                console.error('Failed to load site settings:', error);
            });
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

// Add Hero preview component
const Hero = createClass({
    render() {
        const { title, subtitle, backgroundImage } = this.props;
        return h(
            'div',
            {
                className: 'relative min-h-[60vh] flex items-center',
            },
            [
                // Background Image
                h('div', {
                    className: 'absolute inset-0 bg-cover bg-center z-0',
                    style: { backgroundImage: `url(${backgroundImage})` },
                }),
                // Overlay
                h('div', {
                    className: 'absolute inset-0 bg-black/50 z-10',
                }),
                // Content
                h(
                    'div',
                    { className: 'relative z-20 w-full' },
                    h(
                        'div',
                        {
                            className:
                                'container mx-auto px-4 text-center text-white',
                        },
                        [
                            h(
                                'h1',
                                {
                                    className:
                                        'text-5xl md:text-6xl font-bold mb-6',
                                },
                                title
                            ),
                            h(
                                'p',
                                {
                                    className:
                                        'text-xl md:text-2xl max-w-3xl mx-auto',
                                },
                                subtitle
                            ),
                        ]
                    )
                ),
            ]
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
        fetch('/admin/settings/site.json')
            .then((response) => response.json())
            .then((data) => {
                console.log('Loaded site settings:', data);
                this.setState({ siteSettings: data });
            })
            .catch((error) => {
                console.error('Failed to load site settings:', error);
            });
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
        console.log('classes', classes);
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
        console.log('from the render data', this);
        console.log(
            'lightMode Color',
            this?.state?.siteSettings?.style?.colors?.lightMode?.background
        );
        console.log(
            'darkMode Color',
            this?.state?.siteSettings?.style?.colors?.darkMode?.background
        );

        const classes = `preview-content bg-[${this?.state?.siteSettings?.style?.colors?.lightMode?.background?.toUpperCase()}] dark:bg-[${this?.state?.siteSettings?.style?.colors?.darkMode?.background?.toUpperCase()}]`;
        this.ensureColorStyles(classes);
        return h(
            'div',
            {
                className: classes,
            },
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
                    const RichText = window.cms['cms-components'].default;
                    const processStyles = window.cms['cms-utils'].default;

                    const styleObject = {};
                    if (Array.isArray(section.style)) {
                        section.style.forEach((style) => {
                            const { type, ...rest } = style;
                            styleObject[type] = rest;
                        });
                    }

                    const processedStyles = processStyles?.(styleObject) || '';
                    this.ensureColorStyles(processedStyles);

                    let component = h(
                        'div',
                        { key: index },
                        `${section.type} not implemented`
                    );

                    // Add hero to the switch
                    if (section.type === 'richText') {
                        component = RichText;
                    } else if (section.type === 'hero') {
                        component = Hero;
                    }

                    return h(
                        'div',
                        {
                            className: `rich-text-section ${processedStyles}`,
                            key: index,
                        },
                        h(component, {
                            ...section,
                            content: section.content || '',
                        })
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
