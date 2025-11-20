// src/ui/fonts.ts
import localFont from "next/font/local";

export const CabinetGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/CabinetGrotesk-Thin.otf", // Adjust path based on your file structure
      weight: "100",
      style: "normal",
    },
    {
        path: "../../public/fonts/CabinetGrotesk-ExtraLight.otf",
        weight: "200",
        style: "normal",
    },
    {
      path: "../../public/fonts/CabinetGrotesk-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/CabinetGrotesk-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/CabinetGrotesk-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/CabinetGrotesk-Bold.otf",
      weight: "700",
        style: "normal",  
    },
    {
        path: "../../public/fonts/CabinetGrotesk-ExtraBold.otf",
        weight: "800",
        style: "normal",
    },
    {
        path: "../../public/fonts/CabinetGrotesk-Black.otf",
        weight: "900",
        style: "normal",
    }
  ],
  variable: "--cabinet-grotesk", // Optional: define a CSS variable for easier use
});
