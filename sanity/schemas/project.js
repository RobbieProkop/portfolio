export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "Title",
      title: "title",
      description: "Title of the project",
      type: "string",
    },
    {
      name: "companyImage",
      title: "CompanyImage",
      type: "image",
      options: { hotspot: true },
    },
    { name: "comapany", title: "Comapany", type: "text" },
    {
      name: "dateStarted",
      title: "DateStarted",
      type: "date",
    },
    {
      name: "dateEnded",
      title: "DateEnded",
      type: "date",
    },
    {
      name: "isCurrentlyWorkingHere",
      title: "IsCurrentlyWorkingHere",
      type: "boolean",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
  ],
};
