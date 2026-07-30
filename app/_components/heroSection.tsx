import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"
import Image from "next/image"

const HeroSection = () => {
  return (
    <section className="px-2 flex flex-col md:flex-row justify-between items-center lg:h-screen w-full bg-orange-50">
        <Image src="/images/model.png" loading="eager" alt="model" width={300} height={500} className="w-full h-40 lg:w-2/5 lg:h-screen object-cover" />
        <div className="w-full lg:w-fit">
            <p className="text-green-800 uppercase pt-3">chapter 01</p>
            <p className="font-cormorant-garamond text-7xl lg:text-[120px] text-pink-400 tracking-tighter lg:leading-36 ">Soft</p>
            <p className="text-7xl lg:text-[120px] leading-6 text-green-900 font-cormorant-garamond tracking-tighter">Paradise</p>
            <p className="mt-10 text-base text-green-800 font-lora">Romantic silhouettes designed for <br/> slow days, soft light, and <br/> dreamy summer moments.</p>
            <Button variant="link" className="p-0 text-green-800 mt-3 lg:mt-10">view collection <MoveRight/> </Button>
        </div>
        <Image src="/images/hero2.png" alt="model" width={150} height={500} className="w-auto h-full object-cover hidden lg:block" />
    </section>
  )
}

export default HeroSection