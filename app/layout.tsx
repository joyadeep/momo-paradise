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
  metadataBase: new URL("https://momo-paradice.vercel.app/"), // <- change this

  title: {
    default:"Momo Paradice",
    template:"%s | Momo Paradice"
  },

  description : "Discover fashion for every occasion at Momo Paradise. Browse our boutique selection of modern apparel, trendy tops, stylish dresses, and everyday wear. Shop online for fast doorstep delivery!", 

  keywords:[
    "Shop clothes online",
    "Momo Paradise",
    "Fashion",
  ],
  authors:[
    {
      name:"Momo Paradise",
    }
  ],
  creator:"Momo Paradise",
  publisher:"Momo Paradise",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://momoparadise-glit.vercel.app", // <- change this
    siteName: "Momo Paradise",
    title: "Momo Paradise",
    description:
      "Discover fashion for every occasion at Momo Paradise. Browse our boutique selection of modern apparel, trendy tops, stylish dresses, and everyday wear. Shop online for fast doorstep delivery!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Momo Paradise",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Momo Paradise",
    description:
      "Discover fashion for every occasion at Momo Paradise. Browse our boutique selection of modern apparel, trendy tops, stylish dresses, and everyday wear. Shop online for fast doorstep delivery!",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
        <Header/>
        <main className="grow max-w-400 w-full mx-auto pt-32">
          {children}
        </main>
        <Footer/>
        <Toaster position="top-center" richColors={true} expand={true}/>
        </body>
    </html>
  );
}
