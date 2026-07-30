import { Button } from '@/components/ui/button'
import { Heart,ArrowRight, Coffee } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


const About = () => {
  return (
    <main className='px-2 lg:px-16 font-cormorant-garamond font-medium'>
    <section className="flex flex-col lg:flex-row">
        <div className='w-full lg:w-1/3 text-xl font-medium'>
            <h1 className=' text-red-950 text-4xl uppercase font-medium flex  items-center gap-2'>About momo <Heart/> </h1>
            <div className='grow block lg:hidden'>
                <Image src="/images/model.png" alt="shop" width={500} height={500} className="w-full h-80 object-cover" />
            </div>
            <p>
                Momo Paradise is a little world born from daydreamers, matcha obsessions, romantic details, and a love for things that feel soft, nostalgic, and little bit magical.
            </p>
            <p className='py-5'>
                We design clothes with heart, inspired by slow days, cozy cafes, and all the beautiful little things in between.
            </p>
            <p>Thank you for being part of our little paradise ⁠♡ </p>
            <Button className='bg-red-950 mt-5'>Our story <ArrowRight/> </Button>
        </div>
        <div className='grow hidden lg:block'>
            <Image src="/images/model.png" alt="shop" width={500} height={500} className="w-full h-80 object-cover" />
        </div>
    </section>
    <section className='mt-5 text-base lg:text-lg text-center border-t border-gray-300 py-10 grid grid-cols-4 items-center text-red-950 uppercase'>
        <div>
            <div className='text-5xl text-center'>❀</div>
            <p>made in small batches</p>
        </div>
        <div>
            <div className='text-5xl text-center'><Coffee className='mx-auto' size={42} strokeWidth={1.5} /></div>
            <p>inspired by real life</p>
        </div>
        <div>
            <div className='text-5xl text-center'>❀</div>
            <p>slow fashion always</p>
        </div>
        <div>
            <div className='text-5xl text-center'>⁠♡</div>
            <p>made with love</p>
        </div>
    </section>
    </main>
  )
}

export default About