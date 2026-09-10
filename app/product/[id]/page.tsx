import React from 'react'
import ImageSelector from './imageSelector'
import ProductDetails from './productDetails'
import { getProductByHandle } from '@/lib/graphql/queries/productDetailQuery'
import { Metadata } from 'next'

type Props = {
  params: Promise<{id:string}>
}

export async function generateMetadata ({params}:Props) : Promise<Metadata>{
  const {id} = await params;
  const productDetail = await getProductByHandle(id);
  return {
    title: productDetail?.title,
    description: productDetail?.descriptionHtml,

    alternates:{
      canonical:`/product/${id}`
    },

    openGraph:{
      title: productDetail?.title,
      description: productDetail?.descriptionHtml,
      url:`/product/${id}`,
      images:[productDetail?.images[0]?.url ?? ""]
    }
    }
  }

const page = async({params}:{params:Promise<{id:string}>}) => {
  const {id} = await params;
  const productDetail = await getProductByHandle(id);
  return (
    <div className='px-2 lg:px-20 flex flex-col lg:flex-row lg:gap-5 pb-10'>
        <ImageSelector images={productDetail?.images ?? []}/>
        <ProductDetails data={productDetail}/>
    </div>
  )
}

export default page