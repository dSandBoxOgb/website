import Nav from "@/components/common/nav";
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers/providers";
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
import Footer from "@/components/common/footer";
// import { Providers } from "./providers";

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
// import classNames from "classnames";
// import { CabinetGrotesk } from "@/components/ui/fonts";
// import { ThemeProvider } from "@/components/providers/ThemeProvider";


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
        <ThemeProvider   attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
        <Providers>
          
          <Nav />
          {children}
          <Footer />
        </Providers>
        </ThemeProvider>
      </body>
    </html>
    
  );
}