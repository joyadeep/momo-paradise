"use client"
import { CategorySummary } from '@/lib/graphql/types/collectionTypes'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useParams } from 'next/navigation'
const CollectionList =({collection}:{collection:CategorySummary[]}) => {
  const params = useParams();
  const active = params?.handle;
  console.log("active",active)
  return (
    <div className='text-sm'>
        <Link href={"/collection"} className={cn('capitalize my-1 hover:underline', !active ? "text-black" : "text-gray-500")} >All</Link>
        {collection.map((item)=>(
            <Link href={`/collection/${item.handle}`} key={item.id} className={cn('capitalize my-1 hover:underline', active === item.handle ? "text-black" : "text-gray-500")}><p>{item.title}</p>
            </Link>
        ))}
    </div>
  )
}

export default CollectionList