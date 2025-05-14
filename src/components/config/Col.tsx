import React from "react";
import { ComponentConfig, DropZone } from "@measured/puck";
import { Col } from "react-bootstrap";
import { ColOptions } from "@/type/options";

export type ColProps = {
  span: number;
  padding: string;
  margin: string;
};

export const _Col: ComponentConfig<ColProps> = {
  fields: {
    padding: { type: "text" },
    margin: { type: "text" },
    span: {
      label: "Column Span",
      type: "select",
      options: ColOptions,
    },
  },
  defaultProps: {
    span: 4,
    padding: "0px",
    margin: "0px",
  },
  render: ({ span, padding, margin }) => {
    const style = {
      ...(padding !== "0px" && { padding }),
      ...(margin !== "0px" && { margin }),
    };
    return (
      <Col style={{ ...style, height: "100%" }} md={{ span, offset: 4 }}>
        <DropZone zone="content" />
      </Col>
    );
  },
};
