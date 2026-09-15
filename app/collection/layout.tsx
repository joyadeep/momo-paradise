import { getAllCategories } from '@/lib/graphql/queries/collectionQuery';
import CollectionList from './collectionList'
import { Metadata } from 'next';


export const metadata : Metadata = {
  title:"Collection",
  alternates:{
    canonical:"/collection"
  }
}

const layout = async({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
     const collection = await getAllCategories();
  return (
     <div className='px-5 md:px-10 lg:px-52 py-10 flex flex-col gap-7'>
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