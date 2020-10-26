export default {
  // This is the display name for the type
  title: "Tile",

  // The identifier for this document type used in the api's
  name: "tile",

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
  ],
};
