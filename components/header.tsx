import { Menu, Search, ShoppingBag } from "lucide-react"
import { Button } from "./ui/button"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet"
import Image from "next/image"
import Link from "next/link"
import InstagramIcon from "./icons/instagramIcon"
import TiktokIcon from "./icons/tiktokIcon"
import PinterestIcon from "./icons/pinterestIcon"
import MailIcon from "./icons/mailIcon"
import { Badge } from "./ui/badge"
import { getCurrentCart } from "@/lib/graphql/cart/actions"
import { cn } from "@/lib/utils"
import { AuthNav } from "./header/auth-nav"

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
        link:"/about",
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

const Header = async() => {
    const cart = await getCurrentCart();
  return (
    <header className="w-full max-w-400 mx-auto flex justify-between items-center px-2 md:px-10 py-3">
        <Sheet >
            <SheetTrigger asChild>
                <Button variant="ghost" className="text-green-800 hover:text-green-700 w-fit px-0"> <Menu className="size-5"/> <span className="hidden md:block">menu</span> </Button>
            </SheetTrigger>
            <SheetContent side="left" className=" pt-5 2xl:pt-24 bg-orange-50 text-red-950" >
                 <Image src="/images/logo.webp" alt="momo paradise logo" width={200} height={100} className="w-48 h-14 object-contain mx-auto" />
                 <p className="text-center font-cormorant-garamond">soft things, slow days <br /> made with love ♡</p>
                 <div className="border border-t border-red-950 w-3/4 mx-auto mt-7 mb-3"/>
                 <div className="flex flex-col uppercase  gap-5 text-2xl font-cormorant-garamond font-medium">
                    {links.map((link)=>(
                        <SheetClose asChild key={link.name}>
                            <Link href={link.link} >
                            <div className="px-10 2xl:px-20 flex justify-between">
                                <span>{link.name}</span>
                                <span>{link.icon}</span>
                            </div>
                            
                        </Link>
                        </SheetClose>
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
        <Link href="/"><Image src="/images/logo.webp" alt="momo paradise logo" width={200} height={100} className="w-48 h-14 object-contain" /></Link>
        <div className="flex gap-3 items-center md:gap-7 2xl:gap-14 text-xs text-green-800">
            <div><Search size={22} strokeWidth={1.5}/></div>
            <AuthNav/>
            <Link href="/cart" className="relative"><ShoppingBag size={20}/><Badge className={cn("absolute -top-2 -right-3 p-2 size-5 bg-black text-white rounded-full", !cart?.totalQuantity && "hidden")}>{cart?.totalQuantity}</Badge></Link>
        </div>
    </header>
  )
}

export default Header