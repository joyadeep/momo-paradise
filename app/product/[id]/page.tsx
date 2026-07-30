import React from 'react'
import ImageSelector from './imageSelector'
import ProductDetails from './productDetails'
import { getProductByHandle } from '@/lib/graphql/queries/productDetailQuery'

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