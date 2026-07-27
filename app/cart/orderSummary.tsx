import { Button } from "@/components/ui/button"

const OrderSummary = () => {
  return (
    <div className="bg-[#fffaf6] p-8 w-1/4 font-ibm-plex-mono">
  <h3 className="flex items-center gap-3 tracking-wider text-[#7b2d2d] font-semibold">
    ORDER SUMMARY
    <span className="text-pink-300 text-3xl">✿</span>
  </h3>

  <hr className="my-6 border-0 border-t-2 border-dotted border-pink-200" />

  <div className="space-y-6 text-sm tracking-wide">
    <div className="flex justify-between">
      <span>SUBTOTAL</span>
      <span>$323.00 USD</span>
    </div>

    <div className="flex justify-between">
      <span>SHIPPING</span>
      <span>$10.00 USD</span>
    </div>

    <div className="flex justify-between">
      <span>TAXES</span>
      <span>$0.00 USD</span>
    </div>
  </div>

  <hr className="my-8 border-0 border-t-2 border-dashed border-pink-200" />

  <div className="flex justify-between font-semibold text-[#7b2d2d] tracking-wider">
    <span>TOTAL</span>
    <span>$333.00 USD</span>
  </div>

<div className="flex flex-col gap-1 mt-5">
    <Button className="font-normal text-sm bg-red-950  text-white hover:bg-red-950/90 hover:text-white">checkout</Button>
    <Button className=" font-normal text-sm bg-red-200 text-red-950 hover:bg-red-200/95">continue shopping</Button>
</div>

</div>
  )
}

export default OrderSummary