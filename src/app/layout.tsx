import type { Metadata } from "next";
import "./globals.css";
import { Roboto, Source_Sans_3 } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import { Toaster } from "react-hot-toast";
import { PostHogProvider } from "./providers";

export const metadata: Metadata = {
  title: "EESL",
  description:
    "EESL (Electrochemical Energy Systems Laboratory) is a cutting-edge research facility specializing in advanced energy storage solutions, batteries, and electrochemical systems. Our state-of-the-art equipment and facilities support groundbreaking research in sodium-ion batteries, lithium-ion batteries, supercapacitors, fuel cells, and solar photovoltaics. We're dedicated to advancing sustainable energy technologies through innovative research and development.",
  keywords:
    "EESL equipment, research facilities, laboratory equipment, scientific instruments, Batteries, Sodium ion batteries, Lithium ion batteries, Supercapacitors, Fuel cells, Solar cells, Photovoltaics, Energy storage, Energy conversion, Energy materials, Electrochemical engineering, Electrochemical systems, Electrochemical devices, Electrochemical processes, Electrochemical technologies, Electrochemical research, Electrochemical science, Electrochemical engineering, Electrochemical systems, Electrochemical devices, Electrochemical processes, Electrochemical technologies, Electrochemical research, Electrochemical science, Electrochemical engineering, Electrochemical systems, Electrochemical devices, Electrochemical processes, Electrochemical technologies, Electrochemical research, Electrochemical science, Electrochemical engineering, Electrochemical systems, Electrochemical devices, Electrochemical processes, Electrochemical technologies, Electrochemical research, Electrochemical science, Glove Box",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sourcesans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${sourceSans.variable}`}>
      <body>
        <PostHogProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster position="top-right" />
        </PostHogProvider>
      </body>
    </html>
  );
}
