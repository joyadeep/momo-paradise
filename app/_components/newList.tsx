import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getNewProducts } from '@/lib/graphql/queries/productByCollectionQuery';
import { formatMoney } from '@/lib/formatMoney';


const NewList = async() => {
  const products =  await getNewProducts();
  return (
    <div className='py-5 '>
        <div className='flex justify-between items-end px-2 md:px-10  text-green-800 mb-5'>
           <div>
            <p className='uppercase font-ibm-plex-mono'>latest arrivals</p>
             <p className='capitalize font-lora text-4xl font-medium'>New in</p>
           </div>
            <Button variant="link" className='text-green-800'>view all <MoveRight/></Button>
        </div>
        <div className='flex items-center gap-2 px-2 md:px-16'>
            <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselPrevious className='hidden lg:block'/>
      <CarouselContent>
         {products?.map((product:any)=>(
           <CarouselItem className="basis-1/2 lg:basis-1/5 min-w-0 cursor-pointer border-none border-0 shadow-none"  key={product?.title}>
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
                      <h5 className='text-green-800 font-semibold text-base'>{formatMoney(product?.price?.amount,product?.price?.currencyCode)}</h5>
                  </CardContent>
              </Card>
            </Link>
              </div>
            </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className='hidden lg:block'/>
    </Carousel>
        </div>

    </div>
  )
}

export default NewList