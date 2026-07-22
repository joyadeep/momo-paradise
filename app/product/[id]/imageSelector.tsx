'use client'

import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"

interface IProps {
    images : string[]
}
const ImageSelector = ({images}:IProps) => {
    const [active,setActive] = useState(0)
  return (
    <div className="h-150 w-3/5">
        <div className="flex gap-4 overflow-hidden">
            <div className="w-1/4 h-150 overflow-auto flex flex-col gap-5 ">
        {images.map((image,i) => (
            <div key={i} className={cn("border border-transparent cursor-pointer",active === i ? " border-gray-400" : "")} onClick={() => setActive(i)}>
                <Image src={image} alt={image} width={100} height={100} className="w-full h-auto max-h-40 object-contain" />
            </div>
        ))}
        </div>
        <div className="flex-1 border border-gray-400 h-150">
            <Image src={images[active]} alt={images[active]} width={100} height={100} className="w-full h-full object-contain" />
        </div>
        </div>
    </div>
  )
}

export default ImageSelector