"use client";
import Swal from "sweetalert2";
import type { Data } from "@measured/puck";
import { Puck } from "@measured/puck";
import config from "@/puck.config";
import { overrides } from "@/components/toolsBar";

export function Client({ path, data }: { path: string; data: Partial<Data> }) {
  const mergedData = {
    ...config.components,
    ...data,
  };

  return (
    <Puck
      config={config}
      data={mergedData}
      overrides={overrides}
      onPublish={async (data) => {
        await fetch("/api", {
          method: "post",
          body: JSON.stringify({ data, path }),
        });

        Swal.fire({
          title: "บันทึกข้อมูลเรียบร้อย",
          icon: "success",
          draggable: true,
        });
      }}
    />
  );
}
