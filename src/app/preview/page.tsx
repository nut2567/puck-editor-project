export default function PreviewPage() {
  const previewData = {
    children: "Welcome to the Preview Page",
  };

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold text-center mb-4">SSR Preview</h1>
      <div className="border rounded p-4 bg-gray-50">
        {/* แสดงผล SSR จาก render function */}
        <HeadingBlock.render {...previewData} />
      </div>
    </div>
  );
}
// puck.config.ts
export const HeadingBlock = {
  fields: {
    children: {
      type: "text",
    },
  },
  render: ({ children }: { children: string }) => {
    return <h1>{children}</h1>;
  },
};

export const config = {
  components: {
    HeadingBlock,
  },
};
