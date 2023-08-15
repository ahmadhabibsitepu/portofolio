import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Habib's Curriculum Vitae",
  description: "Ahmad Habibullah`s Curriculum Vitae",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex h-full w-full lg:justify-center">{children}</main>
      </body>
    </html>
  );
};

export default layout;
export { metadata };
