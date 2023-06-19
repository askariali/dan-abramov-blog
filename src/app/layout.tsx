import "./globals.css";
import { Providers } from "../redux/Provider";
import { Merriweather, Montserrat } from "./fonts";
import { ThemeSwitcherButton } from "@/components";
import Link from "next/link";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${Merriweather.variable} ${Montserrat.variable} bg-bg`}
    >
      <body className="px-5 py-10 max-w-2xl mx-auto font-merriweather">
        <Providers>
          <header className="flex items-center justify-between mb-10">
            <h1 className="font-montserrat text-[31px] text-textTitle font-black">
              <Link href="/">Overreacted</Link>
            </h1>
            <ThemeSwitcherButton />
          </header>
          {children}
        </Providers>
      </body>
    </html>
  );
}
