const Metadata = {
    label: "Metadata",
    name: "metadata",
    widget: "object",
    required: false,
    fields: [
        { 
            label: "Description", 
            name: "description", 
            widget: "string",
            hint: "Provide a brief summary of the page's content."
        },
        {
            label: "Navigation",
            name: "navigation",
            widget: "object",
            hint: "Settings that determine how this page appears in the site navigation.",
            fields: [
                { 
                    label: "Show In Nav", 
                    name: "show_in_nav", 
                    widget: "boolean",
                    hint: "Toggle to display this page in the main navigation menu."
                },
                { 
                    label: "Show Children", 
                    name: "show_children", 
                    widget: "boolean",
                    hint: "Toggle to display child pages in the navigation drop-down."
                },
                { 
                    label: "Page Weight", 
                    name: "page_weight", 
                    widget: "number",
                    hint: "Determines the page order in navigation; lower numbers appear first."
                },
            ],
        },
        {
            label: "SEO",
            name: "seo",
            widget: "object",
            hint: "Manage search engine optimization settings for this page.",
            fields: [
                { 
                    label: "SEO Title", 
                    name: "seo_title", 
                    widget: "string",
                    hint: "A custom title for search engines (defaults to the page title if left blank)."
                },
                { 
                    label: "Keywords", 
                    name: "keywords", 
                    widget: "list",
                    hint: "Add keywords to improve search engine visibility; create one per list item.",
                    field: { 
                        label: "Keyword", 
                        name: "keyword", 
                        widget: "string",
                        hint: "A single keyword for SEO purposes."
                    } 
                },
                { 
                    label: "Canonical URL", 
                    name: "canonical", 
                    widget: "string",
                    hint: "The preferred URL for this page to prevent duplicate content issues."
                },
            ],
        },
        {
            label: "Publication Information",
            name: "publication",
            widget: "object",
            hint: "Information about when this page was published or updated.",
            fields: [
                { 
                    label: "Publish Date", 
                    name: "publish_date", 
                    widget: "datetime",
                    hint: "The date and time when this page is or will be published."
                },
                { 
                    label: "Last Updated", 
                    name: "updated_date", 
                    widget: "datetime",
                    hint: "The date and time when this page was last updated."
                },
            ],
        },
        {
            label: "Social / Open Graph",
            name: "social",
            widget: "object",
            hint: "Settings for how this page is presented when shared on social media.",
            fields: [
                { 
                    label: "OG Title", 
                    name: "og_title", 
                    widget: "string",
                    hint: "A custom title for Open Graph sharing (overrides the page title if provided)."
                },
                { 
                    label: "OG Description", 
                    name: "og_description", 
                    widget: "text",
                    hint: "A description that appears when the page is shared on social networks."
                },
                { 
                    label: "OG Image", 
                    name: "og_image", 
                    widget: "image",
                    hint: "The image used when the page is shared on social platforms."
                },
                { 
                    label: "Twitter Card Type", 
                    name: "twitter_card", 
                    widget: "select", 
                    options: [
                        { label: "Summary", value: "summary" },
                        { label: "Summary with Large Image", value: "summary_large_image" },
                    ],
                    default: "summary",
                    hint: "Select the style of Twitter card to use when the page is shared."
                },
            ],
        },
        {
            label: "Tags",
            name: "tags",
            widget: "list",
            hint: "Categorize this page with tags for better organization.",
            field: { 
                label: "Tag", 
                name: "tag", 
                widget: "string",
                hint: "Enter a single tag or keyword for this page."
            },
        },
    ],
};

module.exports = Metadata;
