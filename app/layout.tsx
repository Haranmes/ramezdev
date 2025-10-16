import "./globals.css";
import { lato } from "./ui/landingpage/fonts";
import NavBar from "./ui/nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
