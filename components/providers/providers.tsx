"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          classNames: {
            success: "!bg-green-500 !text-white !border-green-600",
            error: "!bg-red-500 !text-white !border-red-600",
            warning: "!bg-yellow-500 !text-black !border-yellow-600",
            info: "!bg-blue-500 !text-white !border-blue-600",
          },
        }}
      />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
}
