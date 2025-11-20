import Nav from "@/components/common/nav";
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers/providers";
import localFont from "next/font/local";
import Footer from "@/components/common/footer";

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
  title: "dSandBox - Design Community",
  description:
    "A global design and innovation ecosystem built to empower designers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en">
      <body className={`${fonts.className} overflow-x-hidden  `}>
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>

  );
}