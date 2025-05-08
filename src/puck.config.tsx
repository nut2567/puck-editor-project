// src/puck.config.ts

const config = {
  collections: {
    pages: {
      label: "Pages",
      fields: {
        title: {
          type: "text",
          label: "Title",
        },
        content: {
          type: "textarea",
          label: "Content",
        },
      },
    },
  },
};

export default config;
