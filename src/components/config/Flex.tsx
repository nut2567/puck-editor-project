import React from "react";
import { ComponentConfig, DropZone } from "@measured/puck";
import { Section } from "@/components/Section";
import { WithLayout, withLayout } from "@/components/Layout";

export type FlexProps = WithLayout<{
  justifyContent: "start" | "center" | "end";
  direction: "row" | "column";
  gap: number;
  wrap: "wrap" | "nowrap";
}>;

const FlexInternal: ComponentConfig<FlexProps> = {
  fields: {
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
    wrap: "wrap",
    layout: {
      grow: true,
    },
  },
  render: ({ justifyContent, direction, gap, wrap }) => {
    return (
      <Section style={{ height: "100%" }}>
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
      </Section>
    );
  },
};

export const Flex = withLayout(FlexInternal);
