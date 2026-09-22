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
        icon: "/images/sidebar/star_icon_transparent2.webp"
    },
    {
        name:"clothing",
        link:"/",
        icon:"/images/sidebar/flower_icon_transparent2.webp"
    },
    {
        name:"lookbooks",
        link:"/",
        icon:"/images/sidebar/heart_icon_transparent2.webp"
    },
    {
        name:"about momo",
        link:"/about",
        icon:"/images/sidebar/sunburst_icon_transparent2.webp"
    },
    {
        name:"cafe diary",
        link:"/",
        icon:"/images/sidebar/teacup_icon_transparent2.webp"
    },
    {
        name:"contact",
        link:"/",
        icon:"/images/sidebar/envelope_icon_transparent2.webp"
    }
]

interface HeaderProps {
    cart: any;
}

const HeaderClient = ({cart}:HeaderProps) => {
    const [isSearchOpen,setIsSearchOpen] = useState(false);
    const closeSearch = () => setIsSearchOpen(false);
  return (
    <div className="relative z-40 border border-b-gray-200">
        <header className=" z-50">
             <div className="text-center font-roboto-mono py-2 text-xs tracking-wider text-green-800 font-medium bg-[url('/images/bgtop.webp')] bg-repeat-x flex items-center justify-center gap-5 px-2">
             <Image src="/images/header/flower.webp" alt="flower" width={20} height={20} />
          <p className="tracking-wider text-sm ">SOFT LANDING, OUR LATEST SUMMER CHAPTER NOW LIVE</p>
          <Image src="/images/header/star.webp" alt="flower" width={35} height={30} />
        </div>
        <div className="bg-orange-50 w-full max-w-400 mx-auto flex justify-between items-center px-2 md:px-10 py-3"> 
        <div className="md:flex-1">
            <Sheet >
            <SheetTrigger asChild>
                <Button variant="ghost" className="text-green-800 hover:text-green-700 w-fit px-0 font-roboto-mono"> <Menu className="size-5"/> <span className="hidden text-base uppercase md:block">menu</span> </Button>
            </SheetTrigger>
            <SheetContent side="left" className=" pt-5 2xl:pt-24 bg-[#F9EFE6] text-red-950 pl-10 lg:px-14" >
                 <Image src="/images/sidebar/sidebar_logo.webp" alt="momo paradise logo" width={544} height={306} className="h-20 w-auto object-contain mx-auto" />
                 <Image src="/images/sidebar/pastel_pink_ribbon_divider.webp" alt="momo paradise logo" width={120} height={80} className="h-10 w-auto object-contain mx-auto" />
                 <div className="flex flex-col  uppercase  gap-5 text-2xl font-cormorant-garamond font-stretch-expanded font-medium mt-5">
                    {links.map((link)=>(
                        <SheetClose asChild key={link.name}>
                            <Link href={link.link} >
                            <div className="flex gap-10 items-center">
                                <span>{link.name}</span>
                                <span><Image src={link.icon} alt={link.name} width={200} height={200} className="object-contain size-8" /></span>
                            </div>
                            
                        </Link>
                        </SheetClose>
                    ))}
                 </div>
                 <Image src="/images/sidebar/note.webp" alt="sidebar note" width={720} height={556} className=" w-36 md:w-44 h-auto object-contain mx-auto mt-auto" />
                 <div className="flex gap-5 mt-auto mb-10 justify-center">
                                    <Link href={""}><InstagramIcon className="size-8 " strokeWidth={9} /> </Link>
                                    <Link href={""}> <TiktokIcon className="size-8" /> </Link>
                                    <Link href={""}> <PinterestIcon className="size-8" /> </Link>
                                    <Link href={""}><MailIcon className="size-8" /> </Link> 
                                 </div>
            </SheetContent>
        </Sheet>
        </div>
        <div className="flex md:flex-1 justify-center">
            <Link href="/"><Image src="/images/logo.webp" alt="momo paradise logo" width={2172} height={724} className="w-28 h-auto md:w-48 md:h-14  object-contain " /></Link>
        </div>
        <div className="flex gap-3 items-center md:gap-7 2xl:gap-14 text-xs  md:text-sm font-roboto-mono justify-end  uppercase text-green-800 md:flex-1 ">
           <p onClick={()=> setIsSearchOpen(true)} className="cursor-pointer">search (0)</p>
            <AuthNav/>
            <Link href="/cart" className="relative">cart ({cart?.totalQuantity ?? 0})</Link>
        </div>
         </div>
    </header>
    <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="px-2 w-full md:min-w-132 ">
            <SearchBox closeSearch={closeSearch}/>
        </DialogContent>
    </Dialog>
    </div>
  )
}

export default HeaderClient