import React from "react";
import { ComponentConfig } from "@measured/puck";
import NextImage from "next/image";

export type ImageProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  shape?: "square" | "circle";
  className?: string;
  responsive?: boolean;
  objectFit?: "cover" | "contain"; // Added objectFit prop
};

export const _Image = ({
  src,
  alt = "",
  width,
  height,
  shape = "square",
  className,
  responsive = true,
  objectFit = "cover",
}: ImageProps): React.ReactElement => {
  const imageStyles: React.CSSProperties = {};

  if (shape === "circle") {
    imageStyles.borderRadius = "50%";
  }

  const effectiveWidth = width || 200;
  const effectiveHeight = height || 150;

  if (!src) {
    return <p>Image source is missing or invalid.</p>;
  }

  return (
    <NextImage
      src={src}
      alt={alt}
      width={effectiveWidth}
      height={effectiveHeight}
      layout={responsive ? "responsive" : undefined} // Use responsive prop for layout
      objectFit={objectFit}
      style={imageStyles}
      className={className}
    />
  );
};

export const Image: ComponentConfig<ImageProps> = {
  fields: {
    src: { type: "text", label: "Image URL (or path from /public)" },
    alt: { type: "text", label: "Alt Text" },
    width: { type: "number", label: "Width (for aspect ratio)" },
    height: { type: "number", label: "Height (for aspect ratio)" },
    shape: {
      type: "radio",
      label: "Shape",
      options: [
        { label: "Square", value: "square" },
        { label: "Circle", value: "circle" },
      ],
    },
    objectFit: {
      type: "radio",
      label: "Image Fit",
      options: [
        { label: "Cover", value: "cover" },
        { label: "Contain", value: "contain" },
      ],
    },
    responsive: {
      type: "radio",
      label: "Responsive (Note: Next.js handles this with layout)",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
  },
  defaultProps: {
    src: "https://plus.unsplash.com/premium_photo-1747141286351-fb98f2183da1?q=80&w=2077&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Next.js logo",
    width: 200,
    height: 150,
    shape: "square",
    objectFit: "cover",
    responsive: true,
  },
  render: _Image,
};
