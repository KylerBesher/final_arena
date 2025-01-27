// Minimal bright shim for client-side
const Code = ({ code, language }) => {
    return {
        type: 'code',
        props: {
            code,
            language,
            html: `<pre><code class="language-${language}">${code}</code></pre>`
        }
    };
};

const bright = {
    highlight: (code, lang) => {
        return {
            code,
            lang,
            html: `<pre><code class="language-${lang}">${code}</code></pre>`
        };
    },
    Code
};

export { Code };
export default bright;
