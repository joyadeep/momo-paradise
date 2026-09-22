import { Button } from '@/components/ui/button'
import { Heart,ArrowRight, Coffee } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

export const metadata:Metadata = {
    title:"About Us",
    description:"Learn more about our company, team, and mission.",

    alternates:{
        canonical:"/about",
    },

    openGraph:{
        title:"About Us | Momo Paradise",
        description:"Learn more about our company, team, and mission.",
        url:"/about"
    }
}

const About = () => {
  return (
    <main className='px-2 lg:px-16 font-cormorant-garamond font-medium pb-10'>
    <section className="flex flex-col lg:flex-row gap-3 lg:gap-36">
        <div className='w-full lg:w-1/3 text-base font-lora relative leading-7'>
            <div className='flex gap-3 items-center pt-10'>
                <h1 className=' text-red-950 text-3xl uppercase flex items-center gap-2'>About momo </h1>
                <Image src="/images/home/9_1.webp" alt="flower" width={336} height={313} className="size-7 object-contain" />
            </div>
            <div className='grow block lg:hidden'>
                <Image src="/images/about/image.webp" alt="shop" width={1868} height={1360} className="w-full h-80 object-contain" />
            </div>
            <p className='pt-6'>
                Momo Paradise is a little world born from daydreamers, matcha obsessions, romantic details, and a love for things that feel soft, nostalgic, and little bit magical.
            </p>
            <p className='pt-6'>
                We design clothes with heart, inspired by slow days, cozy cafes, and all the beautiful little things in between.
            </p>
            <p className='pt-6'>Thank you for being part of our little paradise ⁠♡ </p>
            <Button className='bg-red-950 hover:bg-red-900 mt-5'>Our story <ArrowRight/> </Button>
        <section className='md:absolute md:bottom-0 md:left-0 mt-5  font-roboto-mono font-normal lg:text-lg text-center grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 md:w-3xl items-center uppercase  '>
        <div>
            <Image src="/images/about/flower.webp" alt="flower" width={262} height={297} className="size-12 mx-auto  object-contain" />
            <p className='text-sm mt-1'>made in small batches</p>
        </div>
        <div>
            <Image src="/images/about/cup.webp" alt="cup" width={303} height={347} className="size-12 mx-auto  object-contain" />
            <p className='text-sm mt-1'>inspired by real life</p>
        </div>
        <div>
            <Image src="/images/about/ribbon.webp" alt="ribbon" width={246} height={197} className="size-12 mx-auto  object-contain" />
            <p className='text-sm mt-1'>slow fashion always</p>
        </div>
        <div>
            <Image src="/images/about/heart.webp" alt="heart" width={253} height={222} className="size-12 mx-auto  object-contain" />
            <p className='text-sm mt-1'>made with love</p>
        </div>
    </section>
        </div>
        <div className='grow hidden lg:block '>
            <Image src="/images/about/image.webp" alt="shop" width={1868} height={1360} className="w-full h-auto object-contain " />
        </div>
    </section>
   
    </main>
  )
}

export default About