import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"
import Image from "next/image"

const LookBook = () => {
  return (
    <div className="relative flex gap-2 px-2 lg:px-16 bg-[url('/images/home/7.webp')] bg-repeat-x my-2 h-80">
             <Image src="/images/home/8_1.webp" alt="ribbon" width={80} height={80} className="mt-2 size-14 object-contain" />
            <div className=" w-56">
               <Image src="/images/home/11.webp" alt="ribbon" width={200} height={100} className="mt-2 w-52 h-auto object-contain " />
            <p className="text-lg text-green-800 font-lora mt-2 mb-4">Pieces that feel like memories, made for your everyday.</p>
            <Button variant="link" className="w-fit p-0 text-green-800 justify-start text-base font-roboto-mono font-normal ">explore the diary <MoveRight/></Button>
            </div>
        <Image src="/images/home/vintage_pastel_memory_collage.webp" alt="lookbook" width={500} height={200} className="flex-1 h-80 md:w-full object-contain overflow-hidden hidden md:block" />
        <Image src="/images/home/9_1.webp" alt="flower" width={80} height={80} className="absolute bottom-2 right-5 pb-2 size-16 object-contain" />
    </div>
  )
}

export default LookBook