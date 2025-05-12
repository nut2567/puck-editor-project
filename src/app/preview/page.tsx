import { Client } from "./client";
import { Metadata } from "next";
import { getPage } from "@/lib/get-page";
import type { Data } from "@measured/puck";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ puckPath: string[] }>;
}): Promise<Metadata> {
  const { puckPath = [] } = await params;
  const path = `/${puckPath.join("/")}`;

  return {
    title: "puck preview",
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ puckPath: string[] }>;
}) {
  const { puckPath = [] } = await params;
  const path = `/`;
  const data = getPage(path) ?? ({ root: {}, content: [] } as Data);

  return (
    <>
      <Client data={data} />
    </>
  );
}

export const dynamic = "force-static";
