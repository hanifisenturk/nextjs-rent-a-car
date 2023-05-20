import { Navbar } from "@/components/Navbar/Navbar";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/Footer/Footer";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Morent",
  description: "More than a rent!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <Navbar />
        <div className="max-w-[1312px] mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
