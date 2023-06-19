import {
  Montserrat as MontserratGoogle,
  Merriweather as MerriweatherGoogle,
} from "next/font/google";

export const Montserrat = MontserratGoogle({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "900"],
  variable: "--font-montserrat",
});

export const Merriweather = MerriweatherGoogle({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "900"],
  variable: "--font-merriweather",
});
