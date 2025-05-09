import type { Config } from "@measured/puck";

import { _Button, PuckButtonProps } from "@/components/config/PuckButton";
import { Flex, FlexProps } from "@/components/config/Flex";

type Props = {
  HeadingBlock: { title: string; padding: number; description: string };
  Button: PuckButtonProps;
  Flex: FlexProps;
};

export const config: Config<Props> = {
  categories: {
    layout: {
      components: ["Flex"], // Added Flex to the layout category
    },
    typography: {
      components: ["HeadingBlock"],
    },
    interactive: {
      title: "Actions",
      components: ["Button"],
    },
    other: {
      title: "Other",
      //   components: ["Card", "Hero", "Logos", "Stats", "Template"],
    },
  },
  components: {
    HeadingBlock: {
      label: "Heading",
      fields: {
        title: { type: "text" },
        description: { type: "text" },
        padding: { type: "number" },
      },
      defaultProps: {
        title: "Heading",
        description: "This is a description",
        padding: 64,
      },
      render: ({ title, padding }) => (
        <div style={{ padding }}>
          <h1>{title}</h1>
        </div>
      ),
    },
    Button: _Button,
    Flex: Flex,
  },
};

export default config;
