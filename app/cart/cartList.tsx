'use client'
import Image from 'next/image'
import React, { useTransition } from 'react'
import Counter from './counter'
import { Cart } from '@/lib/graphql/cart/types'
import { removeItem, updateQuantity, updateVariant } from '@/lib/graphql/cart/actions'
import { Card, CardContent } from '@/components/ui/card'
import { SizeSelect } from './sizeSelect'
import { formatMoney } from '@/lib/formatMoney'

interface Props {
    products: Cart | null;
    setCart: React.Dispatch<React.SetStateAction<Cart | null>>
}
const CartList = ({products,setCart}:Props) => {
    const [isPending, startTransition] = useTransition();

  const handleQuantityChange = (lineId: string, newQuantity: number) => {
    startTransition(async () => {
      const updatedCart = await updateQuantity(lineId, newQuantity);
      setCart(updatedCart);
    });
  };
    const handleSizeChange = (lineId: string, newMerchandiseId: string) => {
    startTransition(async () => {
      const updatedCart = await updateVariant(lineId, newMerchandiseId);
      setCart(updatedCart);
    });
  };

  const handleRemove = (lineId: string) => {
    startTransition(async () => {
      const updatedCart = await removeItem(lineId);
      setCart(updatedCart);
    });
  };
  return (
    <div className=' w-full'>
        <p className='text-4xl uppercase font-lora font-medium text-red-950'>your cart ({products?.totalQuantity})</p>
        <p className='font-dancing-script text-pink-600 text-2xl pb-2'>thank you for being here</p>
        {/* mobile */}
        <section className='flex flex-col gap-3  lg:hidden'>
            {
                products?.lines?.map((product)=>(
                    <Card key={product.id} className='p-0 w-full rounded-xl'>
                        <CardContent className='p-2 flex gap-2'>
                             <Image src={product.merchandise.image?.url ?? ""} alt={product.merchandise.image?.altText ?? product.merchandise.image?.url ?? ""} width={100} height={100} className='w-28 object-contain rounded-md' />
                             <div className='flex flex-col gap-2'>
                                <p className='text-sm line-clamp-2 text-ellipsis'>{product.merchandise.product.title}</p>
                                <div className='flex justify-between items-center'>
                                    <p className='font-bold' ><SizeSelect line={product} disabled={isPending} onSizeChange={(newId)=> handleSizeChange(product.id,newId) } /></p>
                                </div>
                               <div className='flex justify-between'>
                                <p className='font-bold mt-1'>{(Number(product.merchandise.price.amount) * product.quantity).toFixed(1)} {product.merchandise.price.currencyCode}</p>
                                 <Counter
                                    quantity={product.quantity}
                                    disabled={isPending}
                                    onChange={(newQty) => handleQuantityChange(product.id, newQty)}
                                    onRemove={() => handleRemove(product.id)}
                                />
                               </div>
                             </div>
                        </CardContent>
                    </Card>
                ))
            }
        </section>
        {/* desktop */}
        <section className='hidden lg:block'>
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
                        products?.lines?.map((product)=>(
                            <tr key={product.id}>
                        <td className='flex items-center py-3 gap-3'>
                            <Image src={product.merchandise.image?.url ?? ""} alt={product.merchandise.image?.altText ?? product.merchandise.image?.url ?? ""} width={100} height={100} className='w-28 object-contain' />
                            <div>
                                <p>{product.merchandise.product.title}</p>
                                <div className='mt-3 flex items-center gap-2'>Size : <SizeSelect line={product} disabled={isPending} onSizeChange={(newId)=> handleSizeChange(product.id,newId) } /></div>
                                
                               
                            </div>
                        </td>
                        <td>{formatMoney(product.merchandise.price.amount,product.merchandise.price.currencyCode )}</td>
                        <td><Counter
                quantity={product.quantity}
                disabled={isPending}
                onChange={(newQty) => handleQuantityChange(product.id, newQty)}
                onRemove={() => handleRemove(product.id)}
              /></td>
                        <td>{formatMoney(Number(product.merchandise.price.amount)* product.quantity,product.merchandise.price.currencyCode )}</td>
                    </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
    </div>
  )
}

export default CartList