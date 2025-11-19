import type { Metadata } from "next";
import "./globals.css";
// Make sure these imports match the location of your components
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
// import classNames from "classnames";
import { CabinetGrotesk } from "@/components/ui/fonts";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
// Note: We don't use the 'Layout' wrapper component from your original import
// as it was confusing the structure. We render Header/Footer directly.

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
    <ThemeProvider>
      {/* // Setting 'dark' class on <html> ensures dark theme site-wide by default */}
      <html lang="en" className="">
        <body
          // className={classNames(
          //   CabinetGrotesk.className,
          //   CabinetGrotesk.variable,
          //   "overflow-x-hidden antialiased",
          // )}
        >
          {/* HEADER: Renders on ALL pages */}
          <Header />

          {/* <script src="https://cdn.tailwindcss.com"></script> */}
          {/* MAIN CONTENT: This holds the Home, About, etc. page components */}
          <main>{children}</main>

          {/* FOOTER: Renders on ALL pages */}
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
