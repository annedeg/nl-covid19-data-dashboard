export default {
  type: "document",
  name: "page",
  title: "Page",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "category",
      type: "reference",
      title: "Category",
      // weak: true, // Uncomment if you want to be able to delete navigation even though pages refer to it
      to: [{ type: "category" }],
      description: "Which category is this page",
    },
    {
      name: "content",
      type: "array",
      title: "Page sections",
      description: "Add, edit, and reorder sections",
      of: [{ type: "laatsteOntwikkelingen" }, { type: "tile" }],
    },
  ],
};
