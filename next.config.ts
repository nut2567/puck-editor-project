import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  collections: {
    page: {
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
        seo: {
          type: "object",
          label: "SEO",
          fields: {
            title: { type: "text", label: "SEO Title" },
            description: { type: "text", label: "Meta Description" },
          },
        },
      },
    },
  },
};

export default nextConfig;
