import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/config/fonts";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { TracingBeam } from "@/components/ui/tracing-beam";

export const metadata: Metadata = {
  title: "Pritchard Mambambo | Fullstack Software Developer",
  description:
    "Pritchard Mambambo is a fullstack software developer based in Harare, Zimbabwe. I specialize in building web applications, mobile applications and websites using modern technologies.",
  icons: [
    {
      url: "/favicon.ico",
      rel: "icon",
      type: "image/x-icon",
    },
    {
      url: "/favicon-32x32.png",
      rel: "shortcut icon",
      type: "image/x-icon",
    },
    {
      url: "/apple-touch-icon.png",
      rel: "apple-touch-icon",
      type: "image/x-icon",
    },
    {
      url: "/android-chrome-192x192.png",
      rel: "icon",
      type: "image/x-icon",
      sizes: "192x192",
    },
    {
      url: "/android-chrome-512x512.png",
      rel: "icon",
      type: "image/x-icon",
      sizes: "512x512",
    },
    {
      url: "/site.webmanifest",
      rel: "manifest",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-gradient-to-r from-primary to-purple-950  text-secondary`}
      >
        <TracingBeam className="px-1">
          <FollowerPointerCard>
            <Navbar />
            <div className="flex  max-w-7xl flex-col justify-between w-full mx-auto pt-24 px-4 pr-8 min-h-screen">
              {children}
            </div>
            <Footer />
          </FollowerPointerCard>
        </TracingBeam>
      </body>
    </html>
  );
}
