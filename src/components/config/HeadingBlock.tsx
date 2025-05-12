"use client";
import { ComponentConfig } from "@measured/puck";

export type HeadingBlockProps = {
  title: string;
  padding: string;
  margin: string;
  description: string;
};

export const HeadingBlock: ComponentConfig<HeadingBlockProps> = {
  label: "Heading",
  fields: {
    title: { type: "text" },
    description: { type: "text" },
    padding: { type: "text" },
    margin: { type: "text" },
  },
  defaultProps: {
    title: "Heading",
    description: "This is a description",
    padding: "64px",
    margin: "0px",
  },
  render: ({ title, padding, margin }) => (
    <div style={{ padding, margin }}>
      <h1>{title}</h1>
    </div>
  ),
};
