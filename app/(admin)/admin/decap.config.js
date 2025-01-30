const decapConfig = {
  backend: {
    name: "github",
    repo: "your-github-username/your-repo-name",
    branch: "main",
    auth_scope: "repo",
  },
  media_folder: "public/uploads",
  public_folder: "/uploads",
  collections: [
    // {
    //   name: "static",
    //   label: "Static",
    //   files: [
    //     {
    //       name: "site",
    //       label: "Site Settings",
    //       file: "content/settings/site.json",
    //       fields: [
    //         {
    //           name: "branding",
    //           label: "Branding",
    //           widget: "object",
    //           fields: [
    //             { name: "name", label: "Site Name", widget: "string" },
    //             { name: "tagline", label: "Tagline", widget: "string" },
    //             { name: "description", label: "Description", widget: "text" },
    //             {
    //               name: "logo",
    //               label: "Logo Settings",
    //               widget: "object",
    //               fields: [
    //                 { name: "main", label: "Main Logo", widget: "image" },
    //                 { name: "dark", label: "Dark Mode Logo", widget: "image" },
    //                 { name: "favicon", label: "Favicon", widget: "image" },
    //                 { name: "alt", label: "Logo Alt Text", widget: "string" }
    //               ]
    //             }
    //           ]
    //         },
    //         {
    //           name: "theme",
    //           label: "Theme",
    //           widget: "object",
    //           fields: [
    //             {
    //               name: "colors",
    //               label: "Light Mode Colors",
    //               widget: "object",
    //               fields: []
    //             },
    //             {
    //               name: "darkMode",
    //               label: "Dark Mode Colors",
    //               widget: "object",
    //               fields: []
    //             }
    //           ]
    //         }
    //       ]
    //     }
    //   ]
    // },
    {
      name: "pages",
      label: "Pages",
      folder: "content/pages",
      create: true,
      preview_component: "PagePreview",
      nested: { depth: 100, summary: "{{title}}" },
      slug: "{{slug}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Description", name: "description", widget: "text" },
        {
          label: "Sections",
          name: "sections",
          widget: "list",
          types: [
            {
              name: "richText",
              type: "richText",
              label: "Rich Text",
              fields: [
                { label: "Content", name: "content", widget: "markdown" },
                {
                  label: "Style",
                  name: "style",
                  widget: "object",
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  style: function () {
    return {
      layout: {
        width: "container",
        padding: "medium",
        verticalSpacing: "medium"
      },
      appearance: {
        background: "blue",
        customBackground: ""
      },
      typography: {
        fontSize: "normal",
        alignment: "left",
        linkStyle: "underline",
        listStyle: "default"
      }
    };
  }
};

export default decapConfig;
