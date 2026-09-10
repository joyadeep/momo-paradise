'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, useCarousel } from "@/components/ui/carousel"
import { Product } from "@/lib/graphql/types/productByCollectionTypes";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
    items : Product[]
}

const PreviousButton = () => {
  const { scrollPrev, canScrollPrev } = useCarousel();
  return (
    <Button variant="ghost" disabled={!canScrollPrev} onClick={scrollPrev}>
       <ChevronLeft className="size-7" />
    </Button>
   
  );
}

const NextButton = () => {
  const { scrollNext, canScrollNext } = useCarousel();
  return (
    <Button variant="ghost" disabled={!canScrollNext} onClick={scrollNext}>
      <ChevronLeft className="rotate-180 size-7" />
    </Button>
  );
}

const NewListCarousel = ({items}: Props) => {
    // const {canScrollNext,canScrollPrev,scrollNext,scrollPrev} = useCarousel();
  return (
    <div className='flex items-center gap-2 px-2 md:px-5'>
            <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <div className=" flex items-center gap-2 ml-2">
        <PreviousButton/>
      <CarouselContent className="ml-4 gap-2">
         {items?.map((product:Product)=>(
           <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5 min-w-0 cursor-pointer border-none border-0 shadow-none"  key={product?.title}>
              <div className="p-0">
            <Link href={`/product/${product?.handle}`}>
              <Card className=' bg-transparent border-0 shadow-none ring-0 p-0'>
                  <CardContent className=' p-0 m-0 '>
                      <div className="relative aspect-3/4 w-full overflow-hidden">
                        <Image
                          src={product.images[0].url}
                          alt={product.images[0].altText ?? product.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className='text-green-800 text-sm mt-4 mb-2'>{product?.title}</h3>
                      <h5 className='text-green-800 font-semibold text-base'>{product?.price?.currencyCode} {product?.price?.amount}</h5>
                  </CardContent>
              </Card>
            </Link>
              </div>
            </CarouselItem>
        ))}
      </CarouselContent>
      <NextButton/>
      </div>
    </Carousel>
        </div>
  )
}

export default NewListCarousel