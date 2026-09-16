"use client"
import { ProductDetail } from '@/lib/graphql/types/productDetailType'
import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import ProductDetails from './productDetails'

type Props = {
    productDetail: ProductDetail | null
}

const ProductContainer = ({productDetail}: Props) => {
  const [active,setActive] = useState(0)
  const images = productDetail?.images ?? []
  return (
     <>
    <div className='grid grid-cols-[2fr_1fr_1fr] px-10 gap-5 pb-16'>
      <section className='grid grid-cols-[1fr_2fr] gap-5'>
       <div className='flex flex-col gap-3'>
        {images?.map((image,i) => (
                    <div key={i} className={cn("border border-transparent cursor-pointer",active === i ? " border-red-400" : "")} onClick={() => setActive(i)}>
                        <Image src={image.url} alt={image?.altText ?? image.url} width={200} height={300} className="w-full h-20 lg:w-full lg:h-auto  object-contain" />
                    </div>
                ))}
       </div>
        <Image src={images[active].url} alt={images[active]?.altText ?? images[active].url} width={700} height={700} className="w-full h-fit max-h-150 object-cover sticky top-28" />
      </section>
      <section>
        <ProductDetails data={productDetail}/>
      </section>
      <section>
        
      </section>
    </div>
   </>
  )
}

export default ProductContainer