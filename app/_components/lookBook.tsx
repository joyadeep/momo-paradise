import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"
import Image from "next/image"

const LookBook = () => {
  return (
    <div className="flex gap-20 px-2 lg:px-32 bg-pink-100">
        <div className="max-w-52 flex flex-col justify-between text-shadow-pink-400 py-5">
            <p className="text-5xl text-pink-400 font-dancing-script">Lookbook <br /> Diary </p>
            <p className="text-xl text-green-800 font-cormorant-garamond">Pieces that feel like memories, made for your everyday.</p>
            <Button variant="link" className="w-fit p-0 text-green-800 justify-start ">explore the diary <MoveRight/></Button>
            {/* <Link href={"#"} className="flex gap-2 align-center">expolore the diary <MoveRight/> </Link> */}
        </div>
        <Image src="/images/lookbook.png" alt="lookbook" width={500} height={200} className="flex-1 h-72 object-cover hidden lg:block" />
    </div>
  )
}

export default LookBook