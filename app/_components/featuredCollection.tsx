import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"
import Image from "next/image"

const FeaturedCollection = () => {
  return (
     <div className="flex gap-20 px-2 lg:px-32">
        <div className="max-w-52 flex flex-col justify-between  py-5">
            <p className="text-3xl text-green-800 font-roboto-mono uppercase">Featured <br /> collection </p>
            <p className="text-xl text-green-800 font-cormorant-garamond">Timeless pieces in soft tones, made to be loved for years.</p>
            <Button variant="link" className="w-fit p-0 text-green-800 justify-start ">discover more <MoveRight/></Button>
            {/* <Link href={"#"} className="flex gap-2 align-center">expolore the diary <MoveRight/> </Link> */}
        </div>
        <Image src="/images/featured_collection.png" alt="lookbook" width={500} height={200} className="flex-1 h-72 object-cover hidden lg:block" />
    </div>
  )
}

export default FeaturedCollection