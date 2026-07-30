import { Mail } from 'lucide-react'

const CartHelp = () => {
  return (
    <div className='flex flex-col gap-5 lg:gap-0 lg:flex-row bg-red-100 px-2 py-5 lg:p-10'>
        <div className='flex-1 flex items-center justify-center gap-3 lg:border-r lg:border-gray-400 h-10'>
            <p className='text-4xl'>✿</p>
            <div>
                <p className='uppercase'>free shipping</p>
                <p>on all orders above $200</p>
            </div>
        </div>
      <div className='flex flex-1 justify-center items-center gap-3 lg:h-10'>
        <Mail size={32}/>
            <div>
                <p className='uppercase'>need help?</p>
                <p>we are here for you</p>
                <p>hello@momoparadise.com</p>
            </div>
        </div>
    </div>
  )
}

export default CartHelp