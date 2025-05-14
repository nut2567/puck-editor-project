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
import { Grid, GridProps } from "@/components/config/Grid";
import { _Row as Row, RowProps } from "@/components/config/Row";
import { _Col as Col, ColProps } from "@/components/config/Col";
import { AccordionProps, _Accordion } from "@/components/config/Accordion";
import { Alert, AlertProps } from "@/components/config/Alert";
import {
  Image as _ImageComponent,
  ImageProps,
} from "@/components/config/Image";

type Props = {
  HeadingBlock: HeadingBlockProps;
  Button: PuckButtonProps;
  Flex: FlexProps;
  Text: TextProps;
  Col: ColProps;
  Accordion: AccordionProps;
  Container: ContainerProps;
  Row: RowProps;
  Space: SpaceProps;
  Grid: GridProps;
  Alert: AlertProps;
  Image: ImageProps; // Added Image
};

export const config: Config<Props> = {
  categories: {
    layout: {
      components: [
        "Flex",
        "Container",
        "Space",
        "Grid",
        "Col",
        "Row",
        "Accordion",
      ],
    },
    typography: {
      components: ["HeadingBlock", "Text"],
    },
    interactive: {
      title: "Actions",
      components: ["Button", "Alert"],
    },
    media: {
      // Added media category
      title: "Media",
      components: ["Image"],
    },
    other: {
      title: "Other",
      components: ["Accordion"], // Added Accordion to the other category
    },
  },
  components: {
    HeadingBlock: HeadingBlock,
    Button: _Button,
    Flex: Flex,
    Container: ContainerInternal,
    Text: Text,
    Space: Space,
    Grid: Grid,
    Col: Col,
    Row: Row,
    Accordion: _Accordion,
    Alert: Alert,
    Image: _ImageComponent, // Added Image
  },
};

export default config;
