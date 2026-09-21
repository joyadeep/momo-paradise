import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"
import Image from "next/image"

const LookBook = () => {
  return (
    <div className="relative flex gap-2 px-2 lg:px-16 bg-[url('/images/home/7.webp')] bg-repeat-x my-2 min-h-80">
             <Image src="/images/home/8_1.webp" alt="ribbon" width={252} height={250} className="absolute left-2 top-0 mt-2 size-14 object-contain" />
            <div className="w-full md:w-56">
               <Image src="/images/home/11.webp" alt="lookbook text" width={1536} height={1024} className="ml-16 md:ml-0 mt-2 w-36 md:w-48 h-auto object-contain " />
            <p className="md:text-lg text-green-800 font-lora mt-2 mb-4 text-sm">Pieces that feel like memories, made for your everyday.</p>
             <Image src="/images/home/vintage_pastel_memory_collage.webp" alt="lookbook" width={2172} height={724} className="flex-1 w-full h-auto   object-contain md:hidden" />
            <Button variant="link" className="w-fit p-0 text-green-800 justify-start text-base font-roboto-mono font-normal mt-3 md:mt-0 ">explore the diary <MoveRight/></Button>
            </div>
        <Image src="/images/home/vintage_pastel_memory_collage.webp" alt="lookbook" width={2172} height={724} className="flex-1 h-80 md:w-full object-contain overflow-hidden hidden md:block" />
        <Image src="/images/home/9_1.webp" alt="flower" width={336} height={313} className="absolute bottom-2 right-5 pb-2 size-16 object-contain" />
    </div>
  )
}

export default LookBook