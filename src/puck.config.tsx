import type { Config } from "@measured/puck";
import { _Button, PuckButtonProps } from "@/components/config/PuckButton";
import {
  HeadingBlock,
  HeadingBlockProps,
} from "@/components/config/HeadingBlock";
import { Flex, FlexProps } from "@/components/config/Flex";
import { Text, TextProps } from "@/components/config/Text";
import {
  ContainerInternal,
  ContainerProps,
} from "@/components/config/Container";
import { Space, SpaceProps } from "@/components/config/Space";

type Props = {
  HeadingBlock: HeadingBlockProps;
  Button: PuckButtonProps;
  Flex: FlexProps;
  Text: TextProps;
  Container: ContainerProps;
  Space: SpaceProps;
};

export const config: Config<Props> = {
  categories: {
    layout: {
      components: ["Flex", "Container", "Space"],
    },
    typography: {
      components: ["HeadingBlock", "Text"],
    },
    interactive: {
      title: "Actions",
      components: ["Button"],
    },
    other: {
      title: "Other",
      // components: ["Card", "Hero", "Logos", "Stats", "Template"],
    },
  },
  components: {
    HeadingBlock: HeadingBlock,
    Button: _Button,
    Flex: Flex,
    Container: ContainerInternal,
    Text: Text,
    Space: Space,
  },
};

export default config;
