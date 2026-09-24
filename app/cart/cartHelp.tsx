import Image from 'next/image'

const CartHelp = () => {
  return (
    <div className='flex flex-col gap-5 sm:flex-row sm:col-span-2 sm:items-center lg:col-span-1 lg:gap-0 lg:flex-row bg-[#F9E9E2] px-2 py-5 lg:p-10'>
        <div className='flex-1 flex items-center justify-center gap-8 lg:border-r lg:border-gray-400 h-10'>
            <Image src="/images/cart/flower_outline.webp" alt="flower outline" width={311} height={359} className="object-contain size-16" />
            <div className='flex flex-col gap-1'>
                <p className='uppercase font-roboto-mono'>free shipping</p>
                <p className='font-lora'>on all orders above $200</p>
            </div>
        </div>
      <div className='flex flex-1 justify-center items-center gap-10 lg:h-10'>
        <Image src="/images/cart/mail_left_tilted.webp" alt="left tilted mail" width={311} height={359} className="object-contain size-16" />
            <div className='flex flex-col gap-1'>
                <p className='uppercase font-roboto-mono'>need help?</p>
                <p className='font-lora'>we are here for you</p>
                <p className='font-lora'>hello@momoparadise.com</p>
            </div>
        </div>
    </div>
  )
}

export default CartHelp