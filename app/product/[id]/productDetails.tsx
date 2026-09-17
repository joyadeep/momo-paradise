"use client"
import Image from 'next/image'
import Sizes from './sizes'
import Questions from './questions'
import { ProductDetail } from '@/lib/graphql/types/productDetailType'
import { AddToCartButton } from './addToCartButton'
import { useState } from 'react'
import DOMPurify from "isomorphic-dompurify";

type Props = {
  data: ProductDetail | null
}

const ProductDetails = ({data}: Props) => {
  const [selectedVariant, setSelectedVariant] = useState(data?.variants[0] ?? null)
  return (
    <section className='w-full font-lora text-[#353230] '>
        <h1 className=' uppercase text-lg lg:text-3xl'>{data?.title}</h1>
        <h4 className='mt-3'>{`${selectedVariant?.price?.currencyCode} ${selectedVariant?.price?.amount}`}</h4>
        <div className='flex gap-3 items-center'>
            <Image src="/images/logo.webp" alt="logo" width={48} height={48} className='size-10 rounded-full overflow-hidden object-contain' />
            <p className='uppercase font-medium'>sunday stripe</p>
        </div>
         <Sizes sizes={data?.variants ?? []} selectedVariant={selectedVariant} onChange={setSelectedVariant}/>
          <div className='flex flex-col items-center justify-center'>
            <AddToCartButton variantId={selectedVariant?.id ?? ""} product={data} size={selectedVariant?.title ?? ""}  />
         <p className='uppercase text-xs px-5 text-center w-fit pt-3 pb-6 font-roboto-mono'>
          pay in 4 x $49.75 usd <br /> with klarna or afterpay
         </p>
          </div>
         <div className='text-justify text-sm font-lora' dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(data?.descriptionHtml ?? "")
         }}/>
         <div className='flex items-center text-rose-300 gap-1'>
          <hr className='flex-1 border border-rose-300 border-dashed'/>
          <p className='text-lg'>♡</p>
          <hr  className='flex-1 border border-rose-300 border-dashed'/>
         </div>
         <div className='flex gap-5 mb-2 text-sm'>
          <Image src="/images/about_fabric/symmetrical_brown_botanical_emblem.webp" alt="symmetrical_brown_botanical_emblem" width={364} height={602} className="w-5 h-10 object-contain"  />
          <p>Made from 35% Bamboo, 35% Polyester, 30% Cotton </p>
         </div>
         <div className='flex gap-5 text-sm items-center'>
          <Image src="/images/about_fabric/dress_form_icon.webp" alt="symmetrical_brown_botanical_emblem" width={364} height={602} className="w-5 h-10 object-contain"  />
          <p>Model is 5&apos;7&ldquo; and wears size S </p>
         </div>
         <Questions/>
    </section>
  )
}

export default ProductDetails