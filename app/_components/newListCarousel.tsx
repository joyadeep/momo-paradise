'use client'

// import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Product } from "@/lib/graphql/types/productByCollectionTypes";
// import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
    items : Product[]
}

const NewListCarousel = ({items}: Props) => {
  return (
  
    <div className="px-2 lg:px-28">
        <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {items?.map((product:Product)=>(
            <CarouselItem className="basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/5 min-w-0 cursor-pointer border-none border-0 shadow-none"  key={product?.title}>
               <div className="p-0">
             <Link href={`/product/${product?.handle}`}>
               <Card className=' bg-transparent border-0 shadow-none ring-0 p-0'>
                   <CardContent className=' p-0 m-0  font-lora tracking-wide'>
                       <div className="relative aspect-3/4 w-full overflow-hidden">
                         <Image
                           src={product.images[0].url}
                           alt={product.images[0].altText ?? product.title}
                           fill
                           className="object-cover"
                         />
                       </div>
                       <h3 className='text-green-800 mt-4 mb-1 capitalize'>{product?.title}</h3>
                       <h5 className='text-green-800 '>{product?.price?.currencyCode} {product?.price?.amount}</h5>
                   </CardContent>
               </Card>
             </Link>
               </div>
             </CarouselItem>
         ))}
      </CarouselContent>
      <CarouselPrevious variant="ghost" />
      <CarouselNext variant="ghost" />
    </Carousel>
    </div>
  )
}

export default NewListCarousel