import { Roboto } from "next/font/google";
import "./globals.css";
import AppHeader from "./compoments/header/Header";

const inter = Roboto({ subsets: ["latin"], weight:['500'] });


export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={inter.className}>
        <AppHeader />  
        {children}
      
      </body>
    </html>
  );
}
