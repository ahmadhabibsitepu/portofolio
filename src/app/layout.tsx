import type { Metadata } from "next";

import "../styles/globals.css";

const metadata: Metadata = {
  title: "Portofolio",
  description: "Ahmad Ihsan Habibullah`s Portofolio",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
};

export default RootLayout;
export { metadata };
