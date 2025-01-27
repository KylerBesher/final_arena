// Minimal bright shim for client-side
const bright = {
    highlight: (code, lang) => {
        return {
            code,
            lang,
            html: `<pre><code class="language-${lang}">${code}</code></pre>`
        };
    }
};

export default bright;
