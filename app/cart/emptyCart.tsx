import { Button } from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'

const EmptyCart = () => {
  return (
    <div className='flex flex-col gap-5 items-center justify-center py-20 px-5'>
        <div className='relative size-40 bg-stone-100 rounded-full '>
            <ShoppingBag size={64} strokeWidth={1.5} className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'/>
        </div>
       <div className='text-center'>
         <p className='text-2xl font-bold'>Your Cart is Empty</p>
        <p className='text-gray-600'>You haven&apos;t added anything yet. Find your perfect fit!</p>
       </div>
        <Link href="/"><Button>start shopping</Button></Link>
    </div>
  )
}

export default EmptyCart