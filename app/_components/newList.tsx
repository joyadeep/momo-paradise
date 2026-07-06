import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { getNewProducts } from '@/lib/products'
import { ChevronLeft, ChevronRight, MoveRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react'


const NewList = async() => {
    const products =  await getNewProducts();
  return (
    <div className='py-5'>
        <div className='flex justify-between items-center text-green-800'>
            <p className='uppercase px-32 pb-5 '>New in</p>
            <Button variant="link" className='text-green-800'>view all <MoveRight/></Button>
        </div>
        <div className='flex items-center gap-2 px-32'>
            <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselPrevious/>
      <CarouselContent>
         {products?.body?.data?.products?.edges?.map((product:any,index:number)=>(
            <CarouselItem key={index} className="basis-1/2 lg:basis-1/5">
            <div className="p-0">
            <Card key={index} className='border-none '>
                <CardContent className=' p-0 m-0 border-none shadow-none'>
                    <Image src={product?.node?.media?.edges[0]?.node?.image?.url} alt="model" width={300} height={500}  className='object-cover'/>
                    <h3 className='text-green-800'>{product?.node?.title}</h3>
                    <h5 className='text-green-800'>{product?.node?.variants?.edges[0]?.node?.price?.currencyCode} {product?.node?.variants?.edges[0]?.node?.price?.amount}</h5>
                </CardContent>
            </Card>
            </div>
        </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext/>
    </Carousel>
        </div>

    </div>
  )
}

export default NewList