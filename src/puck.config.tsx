import type { Config } from "@measured/puck";

import { Button } from "react-bootstrap";

type Props = {
  HeadingBlock: { title: string; padding: number; description: string };
  ButtonBlock: {
    text: string;
    href: string;
    padding: number;
    variant: string;
    align: string;
  };
};

export const config: Config<Props> = {
  components: {
    HeadingBlock: {
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
    },
    ButtonBlock: {
      label: "Button",
      fields: {
        text: { type: "text" },
        href: { type: "text" },
        padding: { type: "number" },
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
        padding: 0,
        variant: "primary",
        align: "left",
      },
      render: ({ text, href, padding, variant, align }) => (
        <div style={{ textAlign: align as React.CSSProperties["textAlign"] }}>
          <Button variant={variant} href={href} style={{ padding }}>
            {text}
          </Button>
        </div>
      ),
    },
  },
};

export default config;
