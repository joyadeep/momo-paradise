import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"
import Image from "next/image"

const HeroSection = () => {
  return (
    <section className="flex  justify-between items-center h-screen w-full bg-orange-50 border-b border-gray-300">
        <Image src="/images/model.png" loading="eager" alt="model" width={300} height={500} className="w-2/5 h-screen object-cover" />
        <div>
            <p className="text-green-800 uppercase">chapter 01</p>
            <p className="font-cormorant-garamond text-[120px] text-pink-400 tracking-tighter leading ">Soft</p>
            <p className="text-[120px] leading-6 text-green-900 font-cormorant-garamond tracking-tighter">Paradise</p>
            <p className="mt-10 text-base text-green-800 font-lora">Romantic silhouettes designed for <br/> slow days, soft light, and <br/> dreamy summer moments.</p>
            <Button variant="link" className="text-green-800 mt-10">view collection <MoveRight/> </Button>
        </div>
        <Image src="/images/hero2.png" alt="model" width={150} height={500} className="w-auto h-full object-cover" />
    </section>
  )
}

export default HeroSection