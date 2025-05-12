import "@measured/puck/puck.css";
import { Client } from "./client";
import { Metadata } from "next";
import { getPage } from "@/lib/get-page";

const path = `/`;
const data = getPage(path);
export async function generateMetadata({
  params,
}: {
  params: Promise<{ puckPath: string[] }>;
}): Promise<Metadata> {
  return {
    title: "Puck: editor",
    description: "This is the Puck editor for editing content.",
    keywords: "Puck, editor, content editing",
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ puckPath: string[] }>;
}) {
  return <Client path={path} data={data || {}} />;
}

export const dynamic = "force-dynamic";
