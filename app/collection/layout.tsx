import { getAllCategories } from '@/lib/graphql/queries/collectionQuery';
import CollectionList from './collectionList'


const layout = async({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
     const collection = await getAllCategories();
  return (
     <div className='px-2 lg:px-10 flex flex-col lg:flex-row gap-5'>
        <section className=" w-full lg:w-32">
            <CollectionList collection={collection}/>
        </section>
        <section className='flex-1'>
            {children}
        </section>
    </div>
  )
}

export default layout