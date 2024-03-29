import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MR. Husky",
  description: "Mr. Husky at ur service.",
  icons: {
    icon: '/icon.png',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body className={[inter.className, "m-0 p-0"]}>
        <Providers >
          {children}
        </Providers>
      </body>
    </html>
  );
}