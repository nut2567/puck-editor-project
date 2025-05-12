import React from "react";
import { ALargeSmall, AlignLeft } from "lucide-react";

import { ComponentConfig } from "@measured/puck";
import { Section } from "@/components/Section";
import { WithLayout, withLayout } from "@/components/Layout";

// Extend the types for SelectField and RadioField to include the `icon` property

type ExtendedIconField = {
  type: "radio" | "select";
  options: { label: string; value: string }[];
  labelIcon?: any;
  tooltip?: string;
};

export type TextProps = WithLayout<{
  padding: string;
  margin: string;
  align: "left" | "center" | "right";
  text?: string;
  size?: "s" | "m";
  color: "default" | "muted";
  maxWidth?: string;
}>;

const TextInner: ComponentConfig<TextProps> = {
  fields: {
    padding: { type: "text" },
    margin: { type: "text" },
    text: { type: "textarea" },
    size: {
      type: "select",
      options: [
        { label: "S  ", value: "s" },
        { label: "M  ", value: "m" },
      ],
      labelIcon: ALargeSmall,
    } as ExtendedIconField,
    align: {
      type: "radio",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
        { label: "Right", value: "right" },
      ],
      labelIcon: AlignLeft,
    } as ExtendedIconField,
    color: {
      type: "radio",
      options: [
        { label: "Default", value: "default" },
        { label: "Muted", value: "muted" },
      ],
    },
    maxWidth: { type: "text" },
  },
  defaultProps: {
    align: "left",
    text: "Text",
    size: "m",
    color: "default",
    padding: "0px",
    margin: "0px",
  },
  render: ({ align, color, text, size, maxWidth }) => {
    return (
      <Section maxWidth={maxWidth}>
        <span
          style={{
            color:
              color === "default" ? "inherit" : "var(--puck-color-grey-05)",
            display: "flex",
            textAlign: align,
            width: "100%",
            fontSize: size === "m" ? "20px" : "16px",
            fontWeight: 300,
            maxWidth,
            justifyContent:
              align === "center"
                ? "center"
                : align === "right"
                ? "flex-end"
                : "flex-start",
          }}
        >
          {text}
        </span>
      </Section>
    );
  },
};

export const Text = withLayout(TextInner);
