import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"
import Image from "next/image"

const FeaturedCollection = () => {
  return (
     <div className="mt-10 flex gap-16 px-2 lg:px-32">
        <div className="max-w-52 flex flex-col justify-center gap-3  py-5">
            <div className="flex gap-3">
              <p className="text-3xl text-green-800 font-roboto-mono uppercase">Featured <br /> collection </p>
            <Image src="/images/home/star_icon_transparent.webp" alt="ribbon" width={80} height={80} className="self-end size-8 object-contain" />
            </div>
            <p className="text-lg text-green-800 font-lora">Timeless pieces in soft tones, made to be loved for years.</p>
            <Button variant="link" className="w-fit p-0 text-green-800 justify-start text-base font-roboto-mono font-normal ">discover more <MoveRight/></Button>
            {/* <Link href={"#"} className="flex gap-2 align-center">expolore the diary <MoveRight/> </Link> */}
        </div>
        <Image src="/images/home/vintage_lace_dress_polaroid_collage.webp" alt="lookbook" width={500} height={200} className="flex-1 h-80 md:w-full overflow-hidden object-contain hidden md:block" />
    </div>
  )
}

export default FeaturedCollection