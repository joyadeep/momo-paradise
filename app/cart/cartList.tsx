import Image from 'next/image'
import React from 'react'
import Counter from './counter'
import CartHelp from './cartHelp'
import { CartLine } from '@/lib/graphql/cart/types'

interface Props {
    products: CartLine[] | undefined;
}
const CartList = ({products}:Props) => {
  return (
    <div className='w-3/4'>
        <p className='text-4xl uppercase font-lora font-medium text-red-950'>your cart (2)</p>
        <p className='font-dancing-script text-pink-600 text-2xl'>thank you for being here</p>
        <section>
            <table className="w-full table-fixed border-collapse ">
                <colgroup>
                    <col className='w-[48%]'/>
                    <col className='w-[15%]'/>
                    <col className='w-[22%]'/>
                    <col className='w-[15%]'/>
                </colgroup>
                <thead className='h-10 font-ibm-plex-mono '>
                    <tr className=' uppercase border border-transparent border-b-gray-600 mb-2 text-sm w-full'>
                        <td>product</td>
                        <td>price</td>
                        <td>qty</td>
                        <td>total</td>
                    </tr>
                </thead>
                <tbody className='font-lora'>
                    {
                        products?.map((product)=>(
                            <tr key={product.id}>
                        <td className='flex items-center py-3 gap-3'>
                            <Image src={product.merchandise.image?.url ?? ""} alt={product.merchandise.image?.altText ?? product.merchandise.image?.url ?? ""} width={100} height={100} className='w-28 object-contain' />
                            <div>
                                <p>{product.merchandise.product.title}</p>
                                <p>Size : {product.merchandise.title}</p>
                                <div className='flex items-center gap-2'>
                                    <Image src="/images/logo.webp" alt="logo" width={48} height={48} className="size-7 rounded-full overflow-hidden object-contain bg-red-400" />
                                    <p>Cream</p>
                                </div>
                            </div>
                        </td>
                        <td>{product.merchandise.price.amount} {product.merchandise.price.currencyCode}</td>
                        <td><Counter quantity = {product.quantity} productId={product.merchandise.id} /></td>
                        <td>$199.00</td>
                    </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
        <CartHelp/>
    </div>
  )
}

export default CartList