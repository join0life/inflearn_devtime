import NavBar from "@/components/common/nav/nav-bar";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
