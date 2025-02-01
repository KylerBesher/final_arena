/* global h, createClass, CMS */

// Inject Tailwind's CSS into the preview iframe
(function injectTailwindIntoIframe() {
    const iframe = document.getElementById('preview-pane');
    if(!iframe) {
        console.error('Preview iframe not found');
        return;
    }

    // Wait for the iframe to load its srcdoc content.
    iframe.onload = function () {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        if(!doc) {
            console.error('Unable to access iframe document');
            return;
        }

        // Avoid duplicate injections
        if(!doc.getElementById('global-styles')) {
            const link = doc.createElement('link');
            link.id = 'global-styles';
            link.rel = 'stylesheet';
            link.href = '/styles/globals.css'; // Ensure this path points to your compiled CSS file
            // Append the <link> to the <head> of the iframe's document.
            let head = doc.head;
            if(!head) {
                head = doc.createElement('head');
                doc.documentElement.insertBefore(head, doc.documentElement.firstChild);
            }
            head.appendChild(link);
        }
    };

    // If the iframe has already loaded, the onload might not trigger.
    // You can force the injection immediately if contentDocument is already available.
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    if(doc && doc.readyState === 'complete') {
        if(!doc.getElementById('global-styles')) {
            const link = doc.createElement('link');
            link.id = 'global-styles';
            link.rel = 'stylesheet';
            link.href = '/styles/globals.css';
            let head = doc.head;
            if(!head) {
                head = doc.createElement('head');
                doc.documentElement.insertBefore(head, doc.documentElement.firstChild);
            }
            head.appendChild(link);
        }
    }
})();

const PagePreview = createClass({
    render: function () {
        // Get the entry data
        const entry = this.props.entry;
        const title = entry.getIn(['data', 'title']);
        const description = entry.getIn(['data', 'description']);
        const sections = entry.getIn(['data', 'sections'])?.toJS() || [];

        // Debug what components are available
        console.log('Available components:', window['cms-components']);
        console.log('Sections:', sections);

        return h('div', { className: 'preview-content' },
            h('h1', null, title),
            h('p', null, description),
            h('div', { className: 'sections' },
                sections.map((section, index) => {
                    if(section.type === 'richText') {
                        const RichText = window['cms-components'].RichText;
                        console.log('RichText component:', RichText); // Debug log
                        if(!RichText) {
                            console.error('RichText component not found');
                            return null;
                        }
                        return h(RichText, {
                            key: index,
                            content: section.content || '',
                            style: section.style || {}
                        });
                    }
                    return h('div', { key: index }, `${section.type} not implemented`);
                })
            )
        );
    }
});

// Register the preview template
if(window.CMS) {
    CMS.registerPreviewTemplate('pages', PagePreview);
}
