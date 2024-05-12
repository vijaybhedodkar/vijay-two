
import type { Metadata } from "next";
import { Inter } from "next/font/google";




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Services We provides",
  description: "This is a website which is specially designed for All in one solution on animals life and to solve all the animals issue and give them a good Life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
     
        {children}
      
        </body>
    </html>
  );
}