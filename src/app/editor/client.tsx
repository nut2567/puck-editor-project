"use client";

import type { Data } from "@measured/puck";
import { Puck } from "@measured/puck";
import config from "@/puck.config";

export function Client({ path, data }: { path: string; data: Partial<Data> }) {
  const mergedData = {
    ...config.components,
    ...data,
  };

  return (
    <Puck
      config={config}
      data={mergedData}
      onPublish={async (data) => {
        await fetch("/api", {
          method: "post",
          body: JSON.stringify({ data, path }),
        });
      }}
    />
  );
}
