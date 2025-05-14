import React from "react";
import { ComponentConfig, DropZone } from "@measured/puck";
import { Accordion } from "react-bootstrap";

export type AccordionProps = {
  justifyContent: "start" | "center" | "end";
  direction: "row" | "column";
  gap: number;
  padding: string;
  margin: string;
  wrap: "wrap" | "nowrap";
};

export const _Accordion: ComponentConfig<AccordionProps> = {
  fields: {
    padding: { type: "text" },
    margin: { type: "text" },
    direction: {
      label: "Direction",
      type: "radio",
      options: [
        { label: "Row", value: "row" },
        { label: "Column", value: "column" },
      ],
    },
    justifyContent: {
      label: "Justify Content",
      type: "radio",
      options: [
        { label: "Start", value: "flex-start" },
        { label: "Center", value: "center" },
        { label: "End", value: "flex-end" },
      ],
    },
    gap: {
      label: "Gap",
      type: "number",
      min: 0,
    },
    wrap: {
      label: "Wrap",
      type: "radio",
      options: [
        { label: "true", value: "wrap" },
        { label: "false", value: "nowrap" },
      ],
    },
  },
  defaultProps: {
    justifyContent: "start",
    direction: "row",
    gap: 24,
    padding: "0px",
    margin: "0px",
    wrap: "wrap",
  },
  render: ({ justifyContent, direction, gap, wrap, padding, margin }) => {
    return (
      <Accordion
        defaultActiveKey="0"
        style={{ width: "100%", padding, margin }}
      >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            <DropZone
              zone="content"
              style={{
                display: "flex",
                justifyContent,
                flexDirection: direction,
                alignItems: direction,
                gap,
                flexWrap: wrap,
              }}
            />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  },
};
