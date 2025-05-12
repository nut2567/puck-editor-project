"use client";
import Swal from "sweetalert2";
import type { Data } from "@measured/puck";
import { Button, Puck } from "@measured/puck";
import config from "@/puck.config";
import { overrides } from "@/components/toolsBar";
import { ChevronUp, ChevronDown, Globe, Lock, Unlock } from "lucide-react";

export function Client({ path, data }: { path: string; data: Partial<Data> }) {
  const mergedData = {
    ...config.components,
    ...data,
  };

  const CustomHeader = ({ onPublish }: { onPublish: (data: Data) => void }) => {
    return (
      <header
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          padding: "16px 24px",
          background: "white",
          color: "black",
          alignItems: "center",
          borderBottom: "1px solid #ddd",
        }}
      >
        <span style={{ fontWeight: 600 }}>Custom UI example </span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <div style={{ gap: 8, display: "flex" }}>
            <Button
              // onClick={() => onPublish(data)}
              icon={<Globe size="14" />}
            >
              Publish
            </Button>
          </div>
        </div>
      </header>
    );
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
