import React from "react";

import { ComponentConfig } from "@measured/puck";
import { spacingOptions } from "@/type/options";

export type SpaceProps = {
  direction?: "" | "vertical" | "horizontal";
  size: string;
};

export const Space: ComponentConfig<SpaceProps> = {
  label: "Space",
  fields: {
    size: {
      type: "select",
      options: spacingOptions,
    },
  },
  defaultProps: {
    size: "24px",
  },
  inline: true,
  render: ({ size, puck }) => {
    return <div ref={puck.dragRef} style={{ height: size }} />;
  },
};
