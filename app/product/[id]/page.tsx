import React from 'react'
import ImageSelector from './imageSelector'
import ProductDetails from './productDetails'

const images = ['/images/hero2.png','/images/model.png','/images/lookbook.png', '/images/featured_collection.png','/images/hero2.png','/images/model.png','/images/lookbook.png', '/images/featured_collection.png']

const page = () => {
  return (
    <div className='px-20 flex gap-5 pb-10'>
        <ImageSelector images={images}/>
        <ProductDetails/>
    </div>
  )
}

export default page