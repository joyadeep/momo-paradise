'use client'

import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"

interface IProps {
    images : {url:string,altText:string|null}[]
}
const ImageSelector = ({images}:IProps) => {
    const [active,setActive] = useState(0)
  return (
    <div className="h-fit pb-5 lg:h-150 w-full lg:w-3/5">
        <div className="flex flex-col lg:flex-row gap-4 overflow-hidden">
            <div className="w-full lg:w-1/4 h-20 lg:h-150 overflow-auto flex flex-row lg:flex-col gap-5 order-2 md:order-1 ">
        {images.map((image,i) => (
            <div key={i} className={cn("border border-transparent cursor-pointer",active === i ? " border-red-400" : "")} onClick={() => setActive(i)}>
                <Image src={image.url} alt={image?.altText ?? image.url} width={100} height={100} className="w-full h-20 lg:w-48 lg:h-auto  object-contain" />
            </div>
        ))}
        </div>
        <div className="flex-1 border border-gray-400 h-150 aspect-3/4 order-1 md:order-2">
            <Image src={images[active].url} alt={images[active]?.altText ?? images[active].url} width={700} height={700} className="w-full h-full object-contain" />
        </div>
        </div>
    </div>
  )
}

export default ImageSelector