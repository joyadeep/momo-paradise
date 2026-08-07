import { Card, CardContent } from '@/components/ui/card'
import { formatMoney } from '@/lib/formatMoney'
import { getProductsByCollection } from '@/lib/graphql/queries/productByCollectionQuery'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const page = async({params}:{params:Promise<{handle:string}>}) => {
    const {handle} = await params
    const products = await getProductsByCollection(handle)
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
        {
            products?.map((product)=>(
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
  )
}

export default page