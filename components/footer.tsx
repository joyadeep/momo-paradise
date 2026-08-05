import Link from "next/link"
import InstagramIcon from "./icons/instagramIcon"
import MailIcon from "./icons/mailIcon"
import PinterestIcon from "./icons/pinterestIcon"
import TiktokIcon from "./icons/tiktokIcon"

const shoplinks = [
    {
        title: "new in",
        link:"#"
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
        title: "account",
        link:"#"
    },
    {
        title: "orders",
        link:"#"
    },
    {
        title: "wishlist",
        link:"#"
    }
]



const Footer = () => {
  return (
    <footer className=" py-5 bg-pink-200 text-green-800">
        <div className='w-full max-w-400 px-5 mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr_1fr] items-center gap-5 '>
            <div className="font-dancing-script text-center md:text-left text-3xl -rotate-12 w-fit ">Thank you for <br /> being part of our <br /> little paradise</div>
            <div className="flex justify-between grow uppercase text-sm gap-5">
                <div className="flex flex-1 flex-col gap-1 ">
                    <h6 className="text-base mb-2">shop</h6>
                    {shoplinks.map((link)=>(
                        <Link href={link.link} key={link.title} className="hover:underline" >{link.title}</Link>
                    ))}
                    
                </div>
                <div className="flex flex-1 flex-col gap-1 ">
                    <h6 className="text-base mb-2">info</h6>
                    {infoLinks.map((link)=>(
                        <Link href={link.link} key={link.title} className="hover:underline" >{link.title}</Link>
                    ))}
                </div>
                <div className="flex flex-1 flex-col gap-1 ">
                    <h6 className="text-base mb-2">account</h6>
                    {accountLinks.map((link)=>(
                        <Link href={link.link} key={link.title} className="hover:underline" >{link.title}</Link>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-1 text-center text-green-900">
                <p>LET&apos;S BE FRIENDS</p>
                <p>@MOMOPARADISE.OFFICIAL</p>
                <div className="flex gap-10 justify-center py-3">
                   <InstagramIcon className="size-8 " strokeWidth={9} /> 
                   <TiktokIcon className="size-8" />
                   <PinterestIcon className="size-8" />
                   <MailIcon className="size-8" />
                </div>
            </div>
        </div>
        <p className="text-center text-sm text-green-900">&copy; MOMO PARADISE 2026. ALL RIGHTS RESERVED.</p>
    </footer>
  )
}

export default Footer