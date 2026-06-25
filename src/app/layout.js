import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Shawn Wang Portfolio",
  description: "Game Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}