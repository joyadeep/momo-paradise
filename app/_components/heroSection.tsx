import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const HeroSection = () => {
  return (
    <section className=" relative md:flex flex-col gap-0 md:flex-row justify-between items-center md:h-152 overflow-hidden w-full bg-orange-50">
        <Image src="/images/home/soft-moments-torn-edge-transparent.webp" loading="eager" alt="model" width={300} height={500} className="w-full h-full md:h-full md:w-2/5 opacity-60 md:opacity-100 lg:h-fit  object-contain" />
        <div className="absolute inset-0 top-5 pt-12  pl-3 md:static  md:translate-y-0 md:pl-10  w-full lg:w-fit">
            <div className="flex items-center gap-2">
              <p className="text-green-800 uppercase pt-3 font-roboto-mono">chapter 01</p>
            <Image src="/images/home/star_icon_transparent.webp" alt="ribbon" width={50} height={50} className="mt-2 size-5 object-contain " />
            </div>
            <p className="font-cormorant-garamond text-7xl lg:text-[120px] text-pink-400 tracking-tighter lg:leading-36 ">Soft</p>
            <p className="text-7xl lg:text-[120px] leading-12 text-green-900 font-cormorant-garamond tracking-tighter">Paradise</p>
            <Image src="/images/home/4_2.webp" alt="ribbon" width={500} height={50} className=" w-full mt-10 md:w-full lg:w-full h-auto  object-contain " />
            <p className=" text-base text-green-800 font-lora text-justify [word-spacing:5px] tracking-wider">Romantic silhouettes designed for <br/> slow days, soft light, and <br/> dreamy summer moments.</p>
            <Link href="/collection">
            <Button variant="link" className="p-0 text-green-800 mt-3 lg:mt-7 text-base font-roboto-mono font-normal">view collection <MoveRight/> </Button>
            </Link>
        </div>
        <Image src="/images/home/polaroid-collage-enhanced.webp" alt="model" width={150} height={500} className="w-auto  md:w-full lg:w-3/12 h-full object-contain hidden md:block" />
    </section>
  )
}

export default HeroSection