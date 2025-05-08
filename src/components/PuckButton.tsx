"use client";
import { Button } from "react-bootstrap";

type PuckButtonProps = {
  text: string;
  variant?: string;
  className?: string;
};

export default function PuckButton({
  text,
  variant = "primary",
  className = "",
}: PuckButtonProps) {
  return (
    <Button variant={variant} className={className}>
      {text}
    </Button>
  );
}
