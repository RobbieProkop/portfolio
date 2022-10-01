export default {
  name: "pageInfo",
  title: "PageInfo",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "role", title: "Role", type: "string" },
    { name: "backgroundInfo", title: "BackgroundInfo", type: "string" },
    {
      name: "profilePic",
      title: "ProfilePic",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    { name: "phoneNumber", title: "PhoneNumber", type: "string" },
    { name: "email", title: "Email", type: "string" },
    {
      name: "socials",
      title: "Socials",
      type: "array",
      of: [{ type: "reference", to: { type: "social" } }],
    },
  ],
};
