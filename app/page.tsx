import { Metadata } from "next";

export default function Index() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center "></div>
  );
}

export const metadata: Metadata = {
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};
