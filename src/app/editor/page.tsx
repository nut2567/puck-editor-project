"use client";
import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";

// ✅ ตั้งค่า config ให้มี HeadingBlock และ ButtonBlock
const config = {
  components: {
    HeadingBlock: {
      label: "Heading",
      fields: {
        children: {
          type: "custom" as const,
          render: ({
            value,
            onChange,
          }: {
            value: string;
            onChange: (v: string) => void;
          }) => (
            <input
              type="text"
              value={value || ""}
              onChange={(e) => onChange(e.target.value)}
            />
          ),
        },
      },
      render: ({ children }: { children: string }) => <h1>{children}</h1>,
    },
  },
};

// ✅ ต้องมี __key เพื่อไม่ให้เตือนเรื่อง key
const initialData = {
  content: [
    {
      id: "heading-1",
      __key: "heading-1",
      type: "HeadingBlock",
      props: { children: "Welcome to the Editor" },
    },
  ],
};

const save = (data: Record<string, unknown>) => {
  console.log("Published data:", data);
};

export default function Editor() {
  return <Puck config={config} data={initialData} onPublish={save} />;
}
