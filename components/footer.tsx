import Link from "next/link"
import InstagramIcon from "./icons/instagramIcon"
import MailIcon from "./icons/mailIcon"
import PinterestIcon from "./icons/pinterestIcon"
import TiktokIcon from "./icons/tiktokIcon"

const Footer = () => {
  return (
    <footer className="px-32 py-5 bg-pink-200 text-green-800">
        <div className='flex justify-between items-center gap-16'>
            <div className="font-dancing-script text-3xl -rotate-12 ">Thank you for <br /> being part of our <br /> little paradise</div>
            <div className="flex justify-between grow uppercase text-sm">
                <div className="flex flex-col gap-1">
                    <h6 className="text-base mb-2">shop</h6>
                    <Link href={"#"} >new in</Link>
                    <Link href={"#"} >best sellers</Link>
                    <Link href={"#"} >clothing</Link>
                    <Link href={"#"} >bags</Link>
                    <Link href={"#"} >accessories</Link>
                    <Link href={"#"} >sale</Link>
                </div>
                <div className="flex flex-col gap-1">
                    <h6 className="text-base mb-2">info</h6>
                    <Link href={"#"} >shipping + returns</Link>
                    <Link href={"#"} >sizing</Link>
                    <Link href={"#"} >faqs</Link>
                    <Link href={"#"} >about us</Link>
                    <Link href={"#"} >journal</Link>
                </div>
                <div className="flex flex-col gap-1">
                    <h6 className="text-base mb-2">account</h6>
                    <Link href={"#"} >my account</Link>
                    <Link href={"#"} >order tracking</Link>
                    <Link href={"#"} >wishlist</Link>
                </div>
            </div>
            <div className="flex flex-col gap-2 text-green-900">
                <p>LET&apos;S BE FRIENDS</p>
                <p>@MOMOPARADISE.OFFICIAL</p>
                <div className="flex justify-between">
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