"use client"
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { CategorySummary } from '@/lib/graphql/types/collectionTypes'
import { useRouter } from 'next/navigation'
const CollectionList =({collection}:{collection:CategorySummary[]}) => {
  const itemFormat = collection?.map((item) => ({ label: item.title,value: item.handle })) 
  const items = [{label:"All",value:"all"},...itemFormat]
  const router = useRouter();
  return (
    <div>
      <Label className='lowercase text-sm'>Collection</Label>
      <Select defaultValue='all' onValueChange={(value)=>{
        router.push(`/collection/${value === "all" ? "" : value }`) 
      }}
      >
        <SelectTrigger className='w-32 capitalize'>
          <SelectValue className='no-underline'/>
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value} className='capitalize'>
             {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default CollectionList