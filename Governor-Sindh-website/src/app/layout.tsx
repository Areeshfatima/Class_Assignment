import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Governor Initiative",
  description:
    "Governor Initiative for Artificial Intelligence, Web 3.0 and Metaverse",
  icons: {
    icon: { url: "/logo.png", type: "image/png" },
  },
};

export default function RootLayout({
  children,
}:Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${poppins.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
