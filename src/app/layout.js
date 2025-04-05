import { ThemeProvider } from "../components/ui/ThemeProvider";
import { Bebas_Neue, Playfair_Display, Rubik } from "next/font/google";
import "./globals.css";
import HeaderMenu from "@/components/shared/Navbar/HeaderMenu";

// Load fonts using next/font/google
const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weights: ["300", "400", "500"],
  display: "swap",
});

// const bebasNeue = Bebas_Neue({
//   variable: "--font-bebas-neue",
//   subsets: ["latin"],
//   weights: ["400"], // Ensure Bebas Neue weight is 400
//   display: "swap",
// });

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weights: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "MahaTab Hossen Sudip",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${rubik.variable}  ${playfairDisplay.variable} antialiased overflow-x-hidden`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <header>
            <HeaderMenu />
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
