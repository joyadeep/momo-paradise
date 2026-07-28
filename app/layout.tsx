import type { Metadata } from "next";
import { Cormorant_Garamond, Dancing_Script, Geist, Geist_Mono, Inter, Lora, Roboto_Mono, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {Toaster} from "@/components/ui/sonner";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
})

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
})

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
})

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
})

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight:["100","200","300","400","500","600","700"]
})

export const metadata: Metadata = {
  title: "Momo Paradice",
  description: "",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable, cormorantGaramond.variable, lora.variable, dancingScript.variable,robotoMono.variable,ibmPlexMono.variable)}
    >
      <body className="min-h-full flex flex-col">
        <p className="text-center py-2 text-xs bg-[#f4cecd] text-green-800 tracking-wide font-medium">
          SOFT LANDING, OUR LATEST SUMMER CHAPTER NOW LIVE
        </p>
        <Header/>
        <main className="grow ">
          {children}
        </main>
        <Footer/>
        <Toaster position="top-center" richColors={true}/>
        </body>
    </html>
  );
}
