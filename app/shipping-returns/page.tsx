import { Button } from '@/components/ui/button'
import { ArrowRight, Gift, Truck } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


const ShippingReturns = () => {
  return (
    <div className='flex px-16 font-cormorant-garamond font-medium pb-20'>
        <div>
            <h1 className='text-red-950 uppercase text-5xl'>shipping and returns ⁠♡</h1>
            <div className='flex mt-20 text-lg'>
                <div className='flex flex-col justify-center items-center border-r border-red-950 pr-10 '>
                    <Truck size={64} strokeWidth={1} className='text-red-950'/>
                <p className='pt-2 uppercase text-2xl'>shipping</p>
                <p>
                    We ship worldwide! <br />
                    Orders are processed within 1-3 business days. <br />
                    You&apos;ll receive a tracking number once your ouder is on the way. <br />
                </p>
                </div>

                <div className='flex flex-col justify-center items-center  pl-10'>
                    <Gift size={64} strokeWidth={1} className='text-red-950'/>
                <p className='pt-2 uppercase text-2xl'>returns</p>
                <p>
                    Not in love? <br />
                    Returns are accepted within 7 days of delivery. <br />
                    Item must be unused and in original condition <br />
                </p>
                </div>
                <div className='w-1/3'>
                    <Image src="/images/hero2.png" alt="hero2" width={200} height={500} className='w-full h-72 object-cover'/>
                </div>
            </div>
            <Button variant="link" className="text-lg mt-10">view full policy <ArrowRight/></Button>
        </div>
    </div>
  )
}

export default ShippingReturns