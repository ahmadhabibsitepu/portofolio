import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

import "../../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Habib's Portofolio",
  description: "Ahmad Habibullah`s Portofolio",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} min-w-[320px]`}>
        <div className="flex min-h-screen w-full flex-col justify-between">
          <header>
            <Navbar></Navbar>
          </header>
          <main className="flex w-full grow flex-col">{children}</main>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
export { metadata };
