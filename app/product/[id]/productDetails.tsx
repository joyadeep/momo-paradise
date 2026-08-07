"use client"
import Image from 'next/image'
import Sizes from './sizes'
import { Shirt, Sprout } from 'lucide-react'
import Questions from './questions'
import { ProductDetail } from '@/lib/graphql/types/productDetailType'
import { AddToCartButton } from './addToCartButton'
import { useState } from 'react'
import { formatMoney } from '@/lib/formatMoney'

type Props = {
  data: ProductDetail | null
}

const ProductDetails = ({data}: Props) => {
  const [selectedVariant, setSelectedVariant] = useState(data?.variants[0] ?? null)
  return (
    <section className='w-full lg:w-2/5 font-lora '>
        <h1 className=' uppercase text-lg lg:text-3xl'>{data?.title}</h1>
        <h4 className='text-lg font-bold'>{formatMoney(data?.price?.amount,data?.price?.currencyCode)}</h4>
        <div className='flex gap-3 items-center'>
            <Image src="/images/logo.webp" alt="logo" width={48} height={48} className='size-14 rounded-full overflow-hidden object-contain' />
            <p className='uppercase font-medium'>sunday stripe</p>
        </div>
         <Sizes sizes={data?.variants ?? []} selectedVariant={selectedVariant} onChange={setSelectedVariant}/>
          <AddToCartButton variantId={selectedVariant?.id ?? ""} product={data} size={selectedVariant?.title ?? ""}  />
         <p className='uppercase px-5 text-center w-fit font-medium pt-3 pb-6'>
          pay in 4 x $49.75 usd <br /> with klarna or afterpay
         </p>
         <h2>
          Striped maxi dress featuring a wide ruffled neckline with a front tie detail, short puff sleeves with elasticated ruffle cuffs, a relaxed bodice, and a gathered drop-waist skirt for soft volume.
         </h2>
         <div className='flex items-center text-rose-300 gap-1'>
          <hr className='flex-1 border border-rose-300 border-dashed'/>
          <p className='text-lg'>♡</p>
          <hr  className='flex-1 border border-rose-300 border-dashed'/>
         </div>
         <div className='flex gap-5 mb-5'>
          <Sprout/>
          <p>Made from 35% Bamboo, 35% Polyester, 30% Cotton </p>
         </div>
         <div className='flex gap-5'>
          <Shirt/>
          <p>Model is 5&apos;7&ldquo; and wears size S </p>
         </div>
         <Questions/>
    </section>
  )
}

export default ProductDetails