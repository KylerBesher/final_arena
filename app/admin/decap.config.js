const decapConfig = {
  backend: {
    name: "git-gateway",
    branch: "main",
  },
  local_backend: true,
  media_folder: "public/images",
  public_folder: "/images",
  editor: {
    preview: false
  },
  collections: [
    {
      name: "pages",
      label: "Pages",
      folder: "content/pages",
      create: true,
      slug: "{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { 
          label: "Body", 
          name: "body", 
          widget: "text",
          required: false
        },
        {
          label: "Sections",
          name: "sections",
          widget: "list",
          required: false,
          types: [
            {
              label: "Rich Text",
              name: "richText",
              widget: "object",
              fields: [
                { 
                  label: "Content", 
                  name: "content", 
                  widget: "text"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export default decapConfig;
