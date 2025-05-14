import React from "react";
import { ComponentConfig } from "@measured/puck";
import { Alert as BootstrapAlert } from "react-bootstrap";

export type AlertProps = {
  variant:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  heading?: string;
  message: string;
  show: boolean;
  dismissible: boolean;
};

export const Alert: ComponentConfig<AlertProps> = {
  fields: {
    variant: {
      label: "Variant",
      type: "select",
      options: [
        { label: "Primary", value: "primary" },
        { label: "Secondary", value: "secondary" },
        { label: "Success", value: "success" },
        { label: "Danger", value: "danger" },
        { label: "Warning", value: "warning" },
        { label: "Info", value: "info" },
        { label: "Light", value: "light" },
        { label: "Dark", value: "dark" },
      ],
    },
    heading: { type: "text", label: "Heading (Optional)" },
    message: { type: "textarea", label: "Message" },
    show: {
      type: "radio",
      label: "Show",
      options: [
        { label: "True", value: true },
        { label: "False", value: false },
      ],
    },
    dismissible: {
      type: "radio",
      label: "Dismissible",
      options: [
        { label: "True", value: true },
        { label: "False", value: false },
      ],
    },
  },
  defaultProps: {
    variant: "primary",
    message: "This is an alert!",
    show: true,
    dismissible: false,
    heading: "",
  },
  render: ({ variant, heading, message, show, dismissible }) => {
    return (
      <BootstrapAlert variant={variant} show={show} dismissible={dismissible}>
        {heading && <BootstrapAlert.Heading>{heading}</BootstrapAlert.Heading>}
        <p>{message}</p>
      </BootstrapAlert>
    );
  },
};
