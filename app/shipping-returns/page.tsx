import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


const ShippingReturns = () => {
  return (
    <div className='relative flex px-3 md:px-10 lg:px-16 font-cormorant-garamond font-medium pb-20'>
        <div className='pt-10 lg:pt-20'>
            <div className='flex items-center'>
                <h1 className='text-red-950 uppercase tracking-tigh text-2xl md:text-4xl font-lora'>shipping and returns</h1>
                <Image src="/images/shipping_returns/pinkHeart.webp" alt="hero2" width={699} height={684} className=' ml-2 size-8 md:size-10 object-contain'/>
            </div>
            <div className='flex mt-10 md:mt-32 text-lg'>
                <div className='flex flex-col border-r border-red-950 pr-5 w-1/2 lg:w-96'>
                    <Image src="/images/shipping_returns/shippingTruck.webp" alt="shipping truck" width={1366} height={972} className="size-20 object-contain" />
                <p className='pt-2 uppercase text-2xl tracking-tight font-lora py-5'>shipping</p>
                <p className='font-lora text-base leading-8 font-light'>
                    We ship worldwide! <br />
                    Orders are processed within 1-3 business days. <br />
                    You&apos;ll receive a tracking number once your ouder is on the way. <br />
                </p>
                </div>

                <div className='flex flex-col pl-10 w-1/2 lg:w-96'>
                    <Image src="/images/shipping_returns/giftbox.webp" alt="shipping truck" width={1305} height={1357} className="size-20 object-contain" />
                <p className='pt-2 uppercase text-2xl font-lora tracking-tight py-5'>returns</p>
                <p className='font-lora text-base leading-8 font-light'>
                    Not in love? <br />
                    Returns are accepted within 7 days of delivery. <br />
                    Item must be unused and in original condition <br />
                </p>
                </div>
                
            </div>
            <Button variant="link" className="text-lg mt-10 pl-0">view full policy <ArrowRight/></Button>
        </div>
        <div className='absolute right-5 w-1/2 hidden xl:block'>
                    <Image src="/images/shipping_returns/sideimage.webp" alt="hero2" width={2791} height={4096} className='w-full h-164 object-contain'/>
                </div>
    </div>
  )
}

export default ShippingReturns