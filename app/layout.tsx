import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/common/nav";
// import Footer from "@/components/common/footer";
import localFont from "next/font/local";
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
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Providers } from "@/components/providers/providers";
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
      <body className={`${fonts.className} `}>
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
    
  );
}
//     // <html lang="en">
    //   <body className={`${fonts.className} `}>
    //     <Providers>
    //       <Nav />
    //       {children}
    //       <Footer />
    //     </Providers>
    //   </body>
    // </html>