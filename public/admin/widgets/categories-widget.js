// Define the CategoriesControl component
const CategoriesControl = createClass({
    handleChange: function (e) {
        const separator = this.props.field.get('separator', ', ');
        this.props.onChange(e.target.value.split(separator).map((e) => e.trim()));
    },

    render: function () {
        const separator = this.props.field.get('separator', ', ');
        var value = this.props.value;
        return h('input', {
            id: this.props.forID,
            className: this.props.classNameWrapper,
            type: 'text',
            value: value ? value.join(separator) : '',
            onChange: this.handleChange,
        });
    },
});

// Define the CategoriesPreview component
const CategoriesPreview = createClass({
    render: function () {
        return h(
            'ul',
            {},
            this.props.value.map(function (val, index) {
                return h('li', { key: index }, val);
            })
        );
    },
});

// Define the schema for the widget
const schema = {
    properties: {
        separator: { type: 'string' },
    },
};

// Register the widget with CMS
if (typeof window !== 'undefined' && window.CMS) {
    window.CMS.registerWidget('categories', CategoriesControl, CategoriesPreview, schema);
} else {
    window.addEventListener('load', () => {
        if (window.CMS) {
            window.CMS.registerWidget('categories', CategoriesControl, CategoriesPreview, schema);
        } else {
            console.error('CMS not found');
        }
    });
}
