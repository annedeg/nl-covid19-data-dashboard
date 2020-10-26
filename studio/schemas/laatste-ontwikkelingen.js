export default {
  // This is the display name for the type
  title: "Laatste ontwikkelingen",

  // The identifier for this document type used in the api's
  name: "laatsteOntwikkelingen",

  // Documents have the type 'document'. Your schema may describe types beyond documents
  // but let's get back to that later.
  type: "document",

  // Now we proceed to list the fields of our document
  fields: [
    { title: "Tile", name: "name", type: "string" },
    {
      title: "Title",
      name: "title",
      type: "localeString",
    },
    {
      title: "Description",
      name: "description",
      type: "localeBlock",
    },
    {
      title: "External link",
      name: "externalLink",
      type: "object",
      fields: [
        {
          title: "Text",
          name: "text",
          type: "localeString",
        },
        {
          title: "URL",
          name: "url",
          type: "url",
          validation: (Rule) =>
            Rule.uri({
              scheme: ["https"],
            }),
        },
      ],
    },
  ],
};
