import Link from "next/link"
import InstagramIcon from "./icons/instagramIcon"
import MailIcon from "./icons/mailIcon"
import PinterestIcon from "./icons/pinterestIcon"
import TiktokIcon from "./icons/tiktokIcon"
import Image from "next/image"

const shoplinks = [
    {
        title: "new in",
        link:"/collection/new"
    },
    {
        title: "best sellers",
        link:"#"
    },
    {
        title: "clothing",
        link:"#"
    },
    {
        title: "bags",
        link:"#"
    },
    {
        title: "accessories",
        link:"#"
    },
    {
        title: "sale",
        link:"#"
    },
]

const infoLinks = [
    {
        title: "shipping + returns",
        link:"#"
    },
    {
        title: "sizing",
        link:"#"
    },
    {
        title: "faq",
        link:"#"
    },
    {
        title: "about us",
        link:"/about"
    },
    {
        title: "journal",
        link:"#"
    }
]

const accountLinks = [
    {
        title: "my account",
        link:"#"
    },
    {
        title: "order tracking",
        link:"#"
    },
    {
        title: "wishlist",
        link:"#"
    }
]



const Footer = () => {
  return (
    <footer className=" relative py-5 font-roboto-mono text-green-800 bg-[url('/images/home/7.webp')] bg-repeat-x px:2 lg:px-16">
        <div className='w-full max-w-400 px-5 mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr_1fr] items-center gap-5 '>
            <div className="flex gap-3 h-full">
                <div className="font-dancing-script text-center md:text-left text-3xl -rotate-6 w-fit ">Thank you for <br /> being part of our <br /> little paradise</div>
                <Image src="/images/home/9_1.webp" alt="flower" width={80} height={80} className=" size-14 self-end object-contain" />
            </div>
            <div className="flex justify-between grow uppercase text-sm gap-5">
                <div className="flex flex-1 flex-col gap-1 ">
                    <h6 className="text-sm mb-2 uppercase font-medium">shop</h6>
                    {shoplinks.map((link)=>(
                        <Link href={link.link} key={link.title} className="hover:underline" >{link.title}</Link>
                    ))}
                    
                </div>
                <div className="flex flex-1 flex-col gap-1 ">
                    <h6 className="text-sm mb-2 uppercase font-medium">info</h6>
                    {infoLinks.map((link)=>(
                        <Link href={link.link} key={link.title} className="hover:underline" >{link.title}</Link>
                    ))}
                </div>
                <div className="flex flex-1 flex-col gap-1 ">
                    <h6 className="text-sm mb-2 uppercase font-medium">account</h6>
                    {accountLinks.map((link)=>(
                        <Link href={link.link} key={link.title} className="hover:underline" >{link.title}</Link>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-1 text-center text-green-900">
                <p>LET&apos;S BE FRIENDS</p>
                <p>@MOMOPARADISE.OFFICIAL</p>
                <div className="flex gap-7 justify-center py-3">
                   <InstagramIcon className="size-8 " strokeWidth={9} /> 
                   <TiktokIcon className="size-8" />
                   <PinterestIcon className="size-8" />
                   <MailIcon className="size-8" />
                </div>
            </div>
        </div>
        <p className="text-center text-sm text-green-900">&copy; MOMO PARADISE 2026. ALL RIGHTS RESERVED.</p>
        <Image src="/images/home/9_1.webp" alt="flower" width={80} height={80} className="absolute bottom-2 right-5 pb-2 size-14 object-contain" />
    </footer>
  )
}

export default Footer