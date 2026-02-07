import "@/styles/globals.css";
import Providers from "./providers";
import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Providers>{children}</Providers>
        <Toaster/>
      </body>
    </html>
  );
}
