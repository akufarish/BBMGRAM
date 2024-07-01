import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import SideBar from "../_components/SudeBar";

export const metadata: Metadata = {
  title: "BBMGRAM",
  description: "BBMGRAM instagram clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
        <div className="min-h-full">
          <div className="hidden lg:flex lg:w-60 lg:flex-col lg:fixed lg:inset-y-0">
            <SideBar />
          </div>
          <div className="lg:pl-[29rem]  h-full flex flex-col flex-1">
            <main className="flex flex-col">
              <div className="px-2 sm:px-8 pt-4 py-32 h-screen ">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
