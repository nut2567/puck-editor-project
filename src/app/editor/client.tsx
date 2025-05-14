"use client";
import Swal from "sweetalert2";
import type { Data } from "@measured/puck";
import { Button, Puck } from "@measured/puck";
import config from "@/puck.config";
import { overrides } from "@/components/toolsBar";
import { Globe } from "lucide-react";

const CustomHeaderInternal = ({
  onPublishClick,
}: {
  onPublishClick: () => void;
}) => {
  return (
    <header
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 16,
        padding: "16px 24px",
        background: "white",
        color: "black",
        width: "100vw",
        alignItems: "center",
        borderBottom: "1px solid #ddd",
      }}
    >
      <span style={{ fontWeight: 600 }}>Custom Header</span>
      <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
        <Button onClick={onPublishClick} icon={<Globe size="14" />}>
          Update Site
        </Button>
      </div>
    </header>
  );
};

export function Client({
  path,
  data: initialData,
}: {
  path: string;
  data: Partial<Data>;
}) {
  // Prepare the data for Puck.
  // It should be Partial<Data>, ensuring essential fields like root, content, zones have defaults
  // if not provided in initialData.
  const dataForPuck: Partial<Data> = {
    root: { props: { title: "Untitled" } }, // Default root
    content: [], // Default content
    zones: {}, // Default zones
    ...initialData, // Spread initialData to override defaults with actual values if they exist
  };

  const handlePublish = async (currentEditorData: Data) => {
    await fetch("/api", {
      method: "post",
      body: JSON.stringify({ data: currentEditorData, path }),
    });

    Swal.fire({
      title: "บันทึกข้อมูลเรียบร้อย",
      icon: "success",
      draggable: true,
    });
  };

  return (
    <Puck
      config={config}
      data={dataForPuck} // Use the correctly prepared dataForPuck
      overrides={overrides}
      onPublish={handlePublish}
      // renderHeader={({ state }) => (
      //   <CustomHeaderInternal
      //     onPublishClick={() => handlePublish(state.data)}
      //   />
      // )}
    />
  );
}
