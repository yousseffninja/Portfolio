import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNave from "@/Components/Home/Navbar/ResponsiveNave";
import Footer from "@/Components/Home/Footer/Footer";

const font = Sora({
  weight: ['100', '200', '300', '400', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Youssef Saleh - Portfolio",
  description: "Mern-Stack Developer with node.js express.js react.js next.js",
  icons: {
    icon: {
      url: "/public/images/Scar.png",
      type: "image/png",
      sizes: "32x32",
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        <ResponsiveNave />
        {children}
      <Footer />
      </body>
    </html>
  );
}
