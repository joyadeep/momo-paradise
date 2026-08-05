import { Button } from "@/components/ui/button"
import { formatMoney } from "@/lib/formatMoney";
import Link from "next/link";

interface OrderCost {
totalAmount: { amount: string; currencyCode: string; }, 
subtotalAmount: { amount: string; currencyCode: string; }; 
}

interface Props {
  cost: OrderCost | undefined;
  checkoutUrl: string | undefined;
}


const OrderSummary = ({cost,checkoutUrl}:Props) => {
  return (
    <div className="bg-[#fffaf6] w-full p-2 lg:p-8 l font-ibm-plex-mono">
  <h3 className="flex items-center gap-3 tracking-wider text-[#7b2d2d] font-semibold">
    ORDER SUMMARY
    <span className="text-pink-300 text-3xl">✿</span>
  </h3>

  <hr className="my-6 border-0 border-t-2 border-dotted border-pink-200" />

  <div className="space-y-6 text-sm tracking-wide">
    <div className="flex justify-between">
      <span>SUBTOTAL</span>
      <span>{formatMoney(cost?.subtotalAmount?.amount,cost?.subtotalAmount.currencyCode)} </span>
    </div>

    <div className="flex justify-between">
      <span>SHIPPING</span>
      <span>Calculated at Checkout</span>
    </div>

    <div className="flex justify-between">
      <span>TAXES</span>
      <span>Calculated at Checkout</span>
    </div>
  </div>

  <hr className="my-8 border-0 border-t-2 border-dashed border-pink-200" />

  <div className="flex justify-between font-semibold text-[#7b2d2d] tracking-wider">
    <span>TOTAL</span>
    <span>{formatMoney(cost?.totalAmount?.amount,cost?.totalAmount.currencyCode)}</span>
  </div>

<div className="flex flex-col gap-1 mt-5">
    <Link href={checkoutUrl ? checkoutUrl : "#"}><Button className="w-full font-normal text-sm bg-red-950  text-white hover:bg-red-950/90 hover:text-white">checkout</Button></Link>
    <Link href="/"><Button className=" font-normal text-sm bg-red-200 text-red-950 hover:bg-red-200/95 w-full">continue shopping</Button></Link>
</div>

</div>
  )
}

export default OrderSummary