const Metadata = {
    label: "Metadata",
    name: "metadata",
    widget: "object",
    fields: [
        { label: "Description", name: "description", widget: "string" },
        {
            label: "Navigation",
            name: "navigation",
            widget: "object",
            fields: [
                { label: "Show In Nav", name: "show_in_nav", widget: "boolean" },
                { label: "Show Children", name: "show_children", widget: "boolean" },
                { label: "Page Weight", name: "page_weight", widget: "number" },
            ],
        }
    ],
};

module.exports = Metadata;

