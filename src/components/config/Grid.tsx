import React from "react";
import { ComponentConfig } from "@measured/puck";
import { Section } from "@/components/Section";
import { withLayout } from "@/components/Layout";
import { Col, Row } from "react-bootstrap";

export type GridProps = {
  numColumns: number;
  gap: number;
};

export const GridInternal: ComponentConfig<GridProps> = {
  fields: {
    numColumns: {
      type: "number",
      label: "Number of columns",
      min: 1,
      max: 12,
    },
    gap: {
      label: "Gap",
      type: "number",
      min: 0,
    },
  },
  defaultProps: {
    numColumns: 4,
    gap: 24,
  },
  render: ({ gap, numColumns }) => {
    return (
      <Row style={{ gap, gridTemplateColumns: `repeat(${numColumns}, 1fr)` }}>
        {Array.from({ length: numColumns }).map((_, index) => (
          <Col key={index}>Item {index + 1}</Col>
        ))}
      </Row>
    );
  },
};

export const Grid = withLayout(GridInternal);
