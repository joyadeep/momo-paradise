import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { formatMoney } from '@/lib/formatMoney';
import { searchProducts } from '@/lib/graphql/queries/searchProductQuery';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {
    searchParams : Promise<{ q?: string; after?: string; before?: string }>
}

const page = async({searchParams}: Props) => {
    const {after,q,before} = await searchParams;
     if (!q) return <p className="px-10">Enter a search term.</p>;
    const products = before ? await searchProducts(q, {last:20,before}) : await searchProducts(q, {first:20,after});
    const isFirstPage = !after && !before;
  return (
    <div className='px-5 py-5'>
       <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {
            products?.products?.map((product)=>(
                <Link href={`/product/${product?.handle}`} key={product?.id}>
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
            ))
        }
    </div>
    <div className='flex justify-center gap-3 items-center w-full '>
     <Link
    href={`/search?q=${encodeURIComponent(q??"")}&after=${encodeURIComponent(products?.endCursor??"")}`}
    className={cn("mt-6 inline-block underline",
      isFirstPage && "pointer-events-none opacity-50")}
  >
   <Button>Previous <ChevronLeft/></Button>
  </Link>
     <Link
    href={`/search?q=${encodeURIComponent(q??"")}&after=${encodeURIComponent(products?.endCursor??"")}`}
    className={cn("mt-6 inline-block underline",
      !products?.hasNextPage && "pointer-events-none opacity-50")}
  >
    <Button><span>Next</span> <ChevronRight/></Button>
  </Link>
    </div>

    </div>
  )
}

export default page