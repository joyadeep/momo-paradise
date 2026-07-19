import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import Image from "next/image"
import Link from "next/link"
import InstagramIcon from "./icons/instagramIcon"
import TiktokIcon from "./icons/tiktokIcon"
import PinterestIcon from "./icons/pinterestIcon"
import MailIcon from "./icons/mailIcon"

const links = [
    {
        name:"new chapter",
        link:"/",
        icon: "⭐"
    },
    {
        name:"clothing",
        link:"/",
        icon:"🌸"
    },
    {
        name:"lookbooks",
        link:"/",
        icon:"💗"
    },
    {
        name:"about momo",
        link:"/",
        icon:"🌸"
    },
    {
        name:"cafe diary",
        link:"/",
        icon:"🌸"
    },
    {
        name:"contact",
        link:"/",
        icon:"🌸"
    }
]

const Header = () => {
  return (
    <header className="flex justify-between items-center px-10 py-3">
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" className="text-green-800 hover:text-green-700"> <Menu className="size-5"/> menu </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pt-24 bg-orange-50 text-red-950" >
                 <Image src="/images/logo.png" alt="momo paradise logo" width={200} height={100} className="w-48 h-14 object-contain mx-auto" />
                 <p className="text-center font-cormorant-garamond">soft things, slow days <br /> made with love ♡</p>
                 <div className="border border-t border-red-950 w-3/4 mx-auto mt-7 mb-3"/>
                 <div className="flex flex-col uppercase  gap-5 text-2xl font-cormorant-garamond font-medium">
                    {links.map((link)=>(
                        <Link href={link.link} key={link.name}>
                            <div className="px-20 flex justify-between">
                                <span>{link.name}</span>
                                <span>{link.icon}</span>
                            </div>
                            
                        </Link>
                    ))}
                 </div>
                 <div className="flex gap-5 mt-auto mb-10 justify-center">
                                    <Link href={""}><InstagramIcon className="size-8 " strokeWidth={9} /> </Link>
                                    <Link href={""}> <TiktokIcon className="size-8" /> </Link>
                                    <Link href={""}> <PinterestIcon className="size-8" /> </Link>
                                    <Link href={""}><MailIcon className="size-8" /> </Link> 
                                 </div>
            </SheetContent>
        </Sheet>
        <Image src="/images/logo.png" alt="momo paradise logo" width={200} height={100} className="w-48 h-14 object-contain" />
        <div className="flex gap-14 text-xs text-green-800">
            <div>SEARCH (0)</div>
            <div>CART (0)</div>
        </div>
    </header>
  )
}

export default Header