// src/puck.config.ts
import { PuckComponent } from "@measured/puck"; // ใช้แค่ PuckComponent ในการกำหนด

const config = {
  components: {
    HeadingBlock: {
      label: "Heading",
      fields: {
        children: {
          type: "text", // กำหนดให้เป็นข้อความ
          label: "Heading Text",
        },
      },
    },
    TextBlock: {
      label: "Text Block",
      fields: {
        content: {
          type: "text", // ฟิลด์ข้อความ
          label: "Content Text",
        },
      },
    },
    ImageBlock: {
      label: "Image Block",
      fields: {
        src: {
          type: "text", // ฟิลด์ URL ของภาพ
          label: "Image URL",
        },
        alt: {
          type: "text", // ฟิลด์ Alt Text ของภาพ
          label: "Image Alt Text",
        },
      },
    },
  },
};

export default config;
