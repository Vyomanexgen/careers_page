import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Careers | Vyomanexgen",
  description:
    "Explore job openings and internship opportunities at Vyomanexgen and apply for exciting roles.",
  icons: {
    icon: "./icon.png", // <-- replace with your favicon/logo file name
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/vyomanexgen-logo.png" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
