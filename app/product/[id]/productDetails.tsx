import Image from 'next/image'
import React from 'react'
import Sizes from './sizes'
import { Button } from '@/components/ui/button'
import { Shirt, Sprout } from 'lucide-react'
import Questions from './questions'

// type Props = {}

const ProductDetails = () => {
  return (
    <section className='w-2/5 font-cormorant-garamond '>
        <h1 className=' uppercase text-3xl'>seafarer dress - sunday stripe</h1>
        <h4 className='text-lg'>$199.00 USD</h4>
        <div className='flex gap-3 items-center'>
            <Image src="/images/logo.png" alt="logo" width={48} height={48} className='size-14 rounded-full overflow-hidden object-contain' />
            <p className='uppercase font-medium'>sunday stripe</p>
        </div>
         <Sizes/>
         <Button className='bg-rose-600 hover:bg-rose-700 px-20 '>add to cart</Button>
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