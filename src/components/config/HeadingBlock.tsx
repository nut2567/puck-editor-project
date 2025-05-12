"use client";
import { ComponentConfig } from "@measured/puck";

export type HeadingBlockProps = {
  title: string;
  padding: number;
  description: string;
};

export const HeadingBlock: ComponentConfig<HeadingBlockProps> = {
  label: "Heading",
  fields: {
    title: { type: "text" },
    description: { type: "text" },
    padding: { type: "number" },
  },
  defaultProps: {
    title: "Heading",
    description: "This is a description",
    padding: 64,
  },
  render: ({ title, padding }) => (
    <div style={{ padding }}>
      <h1>{title}</h1>
    </div>
  ),
};
