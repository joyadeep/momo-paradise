'use client'
import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet"
import Image from "next/image"
import Link from "next/link"
import InstagramIcon from "./icons/instagramIcon"
import TiktokIcon from "./icons/tiktokIcon"
import PinterestIcon from "./icons/pinterestIcon"
import MailIcon from "./icons/mailIcon"
import { AuthNav } from "./header/auth-nav"
import { useState } from "react"
import SearchBox from "./searchBox"
import { Dialog, DialogContent } from "./ui/dialog"

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

interface HeaderProps {
    cart: any;
}

const HeaderClient = ({cart}:HeaderProps) => {
    const [isSearchOpen,setIsSearchOpen] = useState(false);
    const closeSearch = () => setIsSearchOpen(false);
  return (
    <div className="relative z-40">
        <header className="fixed top-0 left-0 right-0 z-50">
             <div className="text-center font-roboto-mono py-2 text-xs tracking-wider text-green-800 font-medium bg-[url('/images/bgtop.webp')] bg-repeat-x flex items-center justify-center gap-5">
             <Image src="/images/header/flower.webp" alt="flower" width={20} height={20} />
          <p className="tracking-wider text-sm ">SOFT LANDING, OUR LATEST SUMMER CHAPTER NOW LIVE</p>
          <Image src="/images/header/star.webp" alt="flower" width={35} height={30} />
        </div>
        <div className="bg-orange-50 w-full max-w-400 mx-auto flex justify-between items-center px-2 md:px-10 py-3"> 
        <Sheet >
            <SheetTrigger asChild>
                <Button variant="ghost" className="text-green-800 hover:text-green-700 w-fit px-0 font-roboto-mono"> <Menu className="size-5"/> <span className="hidden text-base uppercase md:block">menu</span> </Button>
            </SheetTrigger>
            <SheetContent side="left" className=" pt-5 2xl:pt-24 bg-orange-50 text-red-950" >
                 <Image src="/images/logo.webp" alt="momo paradise logo" width={200} height={100} className="w-48 h-10 object-contain mx-auto" />
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
        <div className="flex gap-3 items-center md:gap-7 2xl:gap-14 text-base font-roboto-mono  uppercase text-green-800">
           <p onClick={()=> setIsSearchOpen(true)}>search (0)</p>
            <AuthNav/>
            <Link href="/cart" className="relative">cart ({cart?.totalQuantity ?? 0})</Link>
        </div>
         </div>
    </header>
    <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="px-2  max-w-[90vw]  bg-purple-300">
            <SearchBox closeSearch={closeSearch}/>
        </DialogContent>
    </Dialog>


    </div>
  )
}

export default HeaderClient