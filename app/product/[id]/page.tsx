import { getProductByHandle } from '@/lib/graphql/queries/productDetailQuery'
import { Metadata } from 'next'
import ProductContainer from './productContainer'

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
  <ProductContainer productDetail={productDetail} />
  )
}

export default page