import React from "react";

import { ComponentConfig } from "@measured/puck";
import { spacingOptions } from "@/type/options";

export type SpaceProps = {
  direction?: "" | "vertical" | "horizontal";
  size: string;
  size2: string;
};

export const Space: ComponentConfig<SpaceProps> = {
  label: "Space",
  fields: {
    size: {
      type: "select",
      options: spacingOptions,
    },
    size2: {
      type: "text",
      label: "Custom Size",
    },
  },
  defaultProps: {
    size: "24px",
    size2: "24px",
  },
  inline: true,
  render: ({ size, size2, puck }) => {
    return <div ref={puck.dragRef} style={{ height: size2 || size }} />;
  },
};
