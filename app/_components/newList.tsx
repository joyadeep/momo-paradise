import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getNewProducts } from '@/lib/graphql/queries/productByCollectionQuery';


const NewList = async() => {
  const products =  await getNewProducts();
  return (
    <div className='py-5'>
        <div className='flex justify-between items-center text-green-800'>
            <p className='uppercase px-2 md:px-32 pb-5 '>New in</p>
            <Button variant="link" className='text-green-800'>view all <MoveRight/></Button>
        </div>
        <div className='flex items-center gap-2 px-2 md:px-32'>
            <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselPrevious/>
      <CarouselContent>
         {products?.map((product:any)=>(
           <CarouselItem className="basis-1/2 lg:basis-1/5 min-w-0 cursor-pointer"  key={product?.title}>
              <div className="p-0">
            <Link href={`/product/${product?.handle}`}>
              <Card className=' bg-transparent border-none shadow-none p-0'>
                  <CardContent className=' p-0 m-0 border-none shadow-none'>
                      <div className="relative aspect-3/4 w-full overflow-hidden">
                        <Image
                          src={product.images[0].url}
                          alt={product.images[0].altText ?? product.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className='text-green-800 mt-2'>{product?.title}</h3>
                      <h5 className='text-green-800'>{product?.price?.currencyCode} {product?.price?.amount}</h5>
                  </CardContent>
              </Card>
            </Link>
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