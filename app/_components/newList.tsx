import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getNewProducts } from '@/lib/graphql/queries/productByCollectionQuery';
import NewListCarousel from './newListCarousel';


const NewList = async() => {
  const products =  await getNewProducts();
  return (
    <div className='py-5 '>
        <div className='flex justify-between items-end   text-green-800 mb-5'>
             <div  className='capitalize font-roboto-mono text-lg font-medium px-2 lg:px-32 flex items-center gap-2'>
              <p>New in</p>
              <Image src="/images/home/9_1.webp" alt="flower" width={50} height={50} className="size-5 object-contain " />
             </div>
            <Link href={'/collection/new'}><Button variant="link" className='text-green-800 text-base tracking-tight font-roboto-mono font-normal'>view all <MoveRight/></Button></Link>
        </div>
        <NewListCarousel items={products} />

    </div>
  )
}

export default NewList