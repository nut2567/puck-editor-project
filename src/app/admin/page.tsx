"use client";
import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";

// Create Puck component config
const config = {
  components: {
    HeadingBlock: {
      fields: {
        children: {
          type: "custom" as const,
          render: ({
            value,
            onChange,
          }: {
            value: string;
            onChange: (newValue: string) => void;
          }) => (
            <input
              type="text"
              value={value || ""}
              onChange={(e) => onChange(e.target.value)}
            />
          ),
        },
      },
      render: ({ children }: { children: string }) => {
        return <h1>{children}</h1>;
      },
    },
  },
};

// Describe the initial data
const initialData = {};

// Save the data to your database
interface SaveFunction {
  (data: Record<string, unknown>): void;
}

const save: SaveFunction = (data) => {};

// Render Puck editor
export default function Editor() {
  return <Puck config={config} data={initialData} onPublish={save} />;
}
