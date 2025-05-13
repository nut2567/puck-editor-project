import React from "react";
import { ComponentConfig, DropZone } from "@measured/puck";
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
      <Section style={{ height: "100%" }}>
        <div>
          <DropZone
            zone="content"
            style={{
              display: "grid",
              gap,
              gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
            }}
          />
        </div>
      </Section>
    );
  },
};

export const Grid = withLayout(GridInternal);
