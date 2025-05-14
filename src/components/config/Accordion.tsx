import React from "react";
import { ComponentConfig, DropZone } from "@measured/puck";
import { Accordion } from "react-bootstrap";

// Defines the structure for each item in the accordion
export type AccordionItemConfig = {
  title: string;
};

export type AccordionProps = {
  items: AccordionItemConfig[];
  defaultActiveKey?: string; // Key of the item to be open by default (e.g., "0", "1")
  // Styling for the overall Accordion component
  accordionPadding: string;
  accordionMargin: string;
  // Styling for the DropZone within each Accordion item's body
  itemContentDirection: "row" | "column";
  itemContentJustify:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around";
  itemContentAlign:
    | "stretch"
    | "flex-start"
    | "center"
    | "flex-end"
    | "baseline";
  itemContentGap: number;
  itemContentWrap: "wrap" | "nowrap";
};

export const _Accordion: ComponentConfig<AccordionProps> = {
  fields: {
    items: {
      type: "array",
      label: "Accordion Items",
      arrayFields: {
        title: { type: "text", label: "Header Title" },
      },
      defaultItemProps: {
        title: "New Item",
      },
    },
    defaultActiveKey: {
      type: "text",
      label: "Default Active Key (e.g., 0 for first item)",
    },
    accordionPadding: { type: "text", label: "Accordion Padding (e.g., 0px)" },
    accordionMargin: { type: "text", label: "Accordion Margin (e.g., 0px)" },
    itemContentDirection: {
      label: "Item Content Direction",
      type: "radio",
      options: [
        { label: "Row", value: "row" },
        { label: "Column", value: "column" },
      ],
    },
    itemContentJustify: {
      label: "Item Content Justify",
      type: "select",
      options: [
        { label: "Start", value: "flex-start" },
        { label: "Center", value: "center" },
        { label: "End", value: "flex-end" },
        { label: "Space Between", value: "space-between" },
        { label: "Space Around", value: "space-around" },
      ],
    },
    itemContentAlign: {
      label: "Item Content Align Items",
      type: "select",
      options: [
        { label: "Stretch", value: "stretch" },
        { label: "Start", value: "flex-start" },
        { label: "Center", value: "center" },
        { label: "End", value: "flex-end" },
        { label: "Baseline", value: "baseline" },
      ],
    },
    itemContentGap: {
      label: "Item Content Gap (px)",
      type: "number",
      min: 0,
    },
    itemContentWrap: {
      label: "Item Content Wrap",
      type: "radio",
      options: [
        { label: "Wrap", value: "wrap" },
        { label: "No Wrap", value: "nowrap" },
      ],
    },
  },
  defaultProps: {
    items: [{ title: "Accordion Item #1" }, { title: "Accordion Item #2" }],
    defaultActiveKey: "0",
    accordionPadding: "0px",
    accordionMargin: "0px",
    itemContentDirection: "column",
    itemContentJustify: "flex-start",
    itemContentAlign: "stretch",
    itemContentGap: 16,
    itemContentWrap: "nowrap",
  },
  render: ({
    items,
    defaultActiveKey,
    accordionPadding,
    accordionMargin,
    itemContentDirection,
    itemContentJustify,
    itemContentAlign,
    itemContentGap,
    itemContentWrap,
  }) => {
    // Ensure defaultActiveKey is valid or fallback
    const effectiveDefaultActiveKey =
      defaultActiveKey &&
      items.find((_, i) => i.toString() === defaultActiveKey)
        ? defaultActiveKey
        : items.length > 0
        ? "0"
        : undefined;

    return (
      <Accordion
        defaultActiveKey={effectiveDefaultActiveKey}
        style={{
          width: "100%",
          padding: accordionPadding,
          margin: accordionMargin,
        }}
      >
        {items.map((item, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>
              {item.title || `Item ${index + 1}`}
            </Accordion.Header>
            <Accordion.Body>
              <DropZone
                zone={`accordion-item-${index}-content`}
                style={{
                  display: "flex",
                  flexDirection: itemContentDirection,
                  justifyContent: itemContentJustify,
                  alignItems: itemContentAlign,
                  gap: `${itemContentGap}px`,
                  flexWrap: itemContentWrap,
                  padding: "16px", // Default padding for content area
                }}
              />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    );
  },
};
