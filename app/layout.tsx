import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/common/nav";
import Footer from "@/components/common/footer";
import localFont from "next/font/local";

export const fonts = localFont({
  src: [
    {
      path: "../public/fonts/CabinetGrotesk-Regular.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/CabinetGrotesk-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-cabinet-grotesk",
});

export const metadata: Metadata = {
  title: "dSandBox",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fonts.className} antialiased`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
