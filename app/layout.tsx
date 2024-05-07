import Footer from "@/components/Footer";
import { FooterV2 } from "@/components/FooterV2";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Headshots AI",
  description: "Generate awesome headshots in minutes using AI",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className="bg-fixed flex flex-col bg-gradient-to-tl from-red-100 to-slate-300">
        <section>
          <Suspense
            fallback={
              <div className="flex w-full px-4 py-4 items-center border-b text-center gap-8 justify-between h-[69px]" />
            }
          >
            <Navbar />
          </Suspense>
        </section>
        <main className="lg:w-3/4 mx-auto">
          {children}
        </main>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
