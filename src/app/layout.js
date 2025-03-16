import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300"
      >
        <Navbar />
          <main >{children}</main>
        
      <footer className="bg-gray-800 text-white  py-4">
          <div className="max-w-5xl mx-auto text-center">
            <p>© 2025 Bhai ki Guidance. Sab rights reserved, bhai ke pass!</p>
          </div>
      </footer>
      </body>
    </html>
  );
}
