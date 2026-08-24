"use client"
import { CategorySummary } from '@/lib/graphql/types/collectionTypes'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useParams } from 'next/navigation'
const CollectionList =({collection}:{collection:CategorySummary[]}) => {
  const params = useParams();
  const active = params?.handle;
  return (
    <div className='text-sm flex items-center gap-3 lg:items-start lg:flex-col lg:gap-1'>
        <Link href={"/collection"} className={cn('capitalize my-1 hover:underline', !active ? "text-black" : "text-gray-500")} >All</Link>
        {collection.map((item)=>(
            <Link href={`/collection/${item.handle}`} key={item.id} className={cn('capitalize hover:underline', active === item.handle ? "text-black" : "text-gray-500")}><p>{item.title}</p>
            </Link>
        ))}
    </div>
  )
}

export default CollectionList