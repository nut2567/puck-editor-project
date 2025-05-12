"use client";
import { ComponentConfig } from "@measured/puck";
import { Button } from "react-bootstrap";

export type PuckButtonProps = {
  text: string;
  href: string;
  padding: string;
  margin: string;
  variant: string;
  align: string;
};

export const _Button: ComponentConfig<PuckButtonProps> = {
  label: "Button",
  fields: {
    text: { type: "text" },
    href: { type: "text" },
    margin: { type: "text" },
    padding: { type: "text" },
    align: {
      type: "select",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
        { label: "Right", value: "right" },
      ],
    },

    variant: {
      type: "select",
      options: [
        { label: "Primary", value: "primary" },
        { label: "Secondary", value: "secondary" },
        { label: "Success", value: "success" },
        { label: "Warning", value: "warning" },
        { label: "Danger", value: "danger" },
        { label: "Info", value: "info" },
        { label: "Light", value: "light" },
        { label: "Dark", value: "dark" },
        { label: "Link", value: "link" },
      ],
    },
  },
  defaultProps: {
    text: "Click Me",
    href: "#",
    padding: "0px",
    variant: "primary",
    align: "left",
    margin: "0px",
  },
  // inline: true,
  render: ({ text, href, padding, variant, align, puck, margin }) => (
    <div style={{ textAlign: align as React.CSSProperties["textAlign"] }}>
      <Button
        variant={variant}
        href={href}
        style={{ padding, margin }}
        ref={puck.dragRef}
      >
        {text}
      </Button>
    </div>
  ),
};
