import NavigationBar from "@/components/common/navigation-bar";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <NavigationBar />
        </header>
        {children}
      </body>
    </html>
  );
}
