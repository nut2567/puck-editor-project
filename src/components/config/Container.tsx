import React from "react";
import { ComponentConfig, DropZone } from "@measured/puck";
import { Container } from "react-bootstrap";

export type ContainerProps = {
  justifyContent: "start" | "center" | "end";
  direction: "row" | "column";
  gap: number;
  padding: string;
  margin: string;
  wrap: "wrap" | "nowrap";
};

export const ContainerInternal: ComponentConfig<ContainerProps> = {
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
    const style = {
      ...(padding !== "0px" && { padding }),
      ...(margin !== "0px" && { margin }),
    };
    return (
      <Container style={{ ...style, height: "100%" }}>
        <div>
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
        </div>
      </Container>
    );
  },
};
