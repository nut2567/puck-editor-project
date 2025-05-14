import React from "react";
import { ComponentConfig, DropZone } from "@measured/puck";
import { Row } from "react-bootstrap";

export type RowProps = {
  justifyContent:
    | "flex-start"
    | "center"
    | "end"
    | "space-around"
    | "space-evenly";
  direction: "row" | "row-reverse";
  gap: number;
  padding: string;
  margin: string;
  alignItems: "flex-start" | "center" | "end" | "stretch" | "baseline";
  wrap: "wrap" | "nowrap";
};

export const _Row: ComponentConfig<RowProps> = {
  fields: {
    padding: { type: "text" },
    margin: { type: "text" },
    direction: {
      label: "Direction",
      type: "radio",
      options: [
        { label: "Row", value: "row" },
        { label: "Row-reverse", value: "row-reverse" },
      ],
    },
    justifyContent: {
      label: "Justify Content",
      type: "radio",
      options: [
        { label: "Start", value: "flex-start" },
        { label: "Center", value: "center" },
        { label: "End", value: "flex-end" },
        { label: "Around", value: "space-around" },
        { label: "Evenly", value: "space-evenly" },
      ],
    },
    alignItems: {
      label: "Align Items",
      type: "radio",
      options: [
        { label: "Start", value: "flex-start" },
        { label: "Center", value: "center" },
        { label: "End", value: "flex-end" },
        { label: "Stretch", value: "stretch" },
        { label: "Baseline", value: "baseline" },
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
    justifyContent: "flex-start",
    direction: "row",
    gap: 24,
    padding: "0px",
    margin: "0px",
    wrap: "wrap",
    alignItems: "flex-start",
  },
  render: ({
    justifyContent,
    direction,
    gap,
    wrap,
    padding,
    margin,
    alignItems,
  }) => {
    const style = {
      ...(padding !== "0px" && { padding }),
      ...(margin !== "0px" && { margin }),
    };
    return (
      <Row style={{ ...style, height: "100%" }}>
        <DropZone
          zone="content"
          style={{
            display: "flex",
            justifyContent,
            alignItems: alignItems,
            flexDirection: direction,
            gap,
            flexWrap: wrap,
          }}
        />
      </Row>
    );
  },
};
