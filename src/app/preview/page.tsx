import { Client } from "./client";
import { Metadata } from "next";
import { getPage } from "@/lib/get-page";
import type { Data } from "@measured/puck";

const path = `/`;
const data = getPage(path) ?? ({ root: {}, content: [] } as Data);
export async function generateMetadata({
  params,
}: {
  params: Promise<{ puckPath: string[] }>;
}): Promise<Metadata> {
  return {
    title: "puck preview",
    description: "Preview page for puck project",
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ puckPath: string[] }>;
}) {
  return (
    <>
      <Client data={data} />
    </>
  );
}

export const dynamic = "force-static";
