"use client";
import { ComponentConfig } from "@measured/puck";
import { Section } from "@/components/Section";
import { WithLayout, withLayout } from "@/components/Layout";
import { levelOptions } from "@/type/options";

export type HeadingBlockProps = WithLayout<{
  title: string;
  padding: string;
  margin: string;
  description: string;
  maxWidth: string;
  level: string;
  size: string;
  align: "left" | "center" | "right";
}>;
const Heading: ComponentConfig<HeadingBlockProps> = {
  label: "Heading",
  fields: {
    title: { type: "text" },
    description: { type: "text" },
    padding: { type: "text" },
    margin: { type: "text" },
    maxWidth: { type: "text" },
    size: { type: "text" },
    level: {
      type: "select",
      options: levelOptions,
    },
    align: {
      type: "radio",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
        { label: "Right", value: "right" },
      ],
    },
  },
  defaultProps: {
    title: "Heading",
    description: "This is a description",
    padding: "64px",
    margin: "0px",
    align: "left",
    maxWidth: "100%",
    level: "1",
    size: "32px",
    layout: {
      padding: "0px",
    },
  },
  render: ({ title, padding, margin, maxWidth, level, size, align }) => {
    const Tag: any = level ? `h${level}` : "span";
    return (
      <Section maxWidth={maxWidth}>
        <div
          style={{
            display: "block",
            padding,
            margin,
            fontSize: size,
            textAlign: align,
          }}
        >
          <Tag>{title}</Tag>
        </div>
      </Section>
    );
  },
};

export const HeadingBlock = withLayout(Heading);
