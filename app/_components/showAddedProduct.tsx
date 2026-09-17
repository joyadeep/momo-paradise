import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ProductDetail } from '@/lib/graphql/types/productDetailType'
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";

interface IProps {
  product: ProductDetail|null,
  open: boolean,
  setOpen: ()=> void,
  size:string
}

export function ShowAddedProduct({product,open=false,size,setOpen}:IProps) {
  
  return (
    open && (
      <Card className="fixed z-50 top-0 left-1/2 -translate-x-1/2 rounded-lg w-full md:w-full md:max-w-125 p-0 shadow-2xl" >
      <CardContent className="p-2 m-0" >
        <div className="text-right">
          <Button variant="ghost" size="xs" onClick={setOpen} ><X/></Button>
        </div>
        {/* <p className="text-center text-xl font-b">Added to Cart</p> */}
       <div className="flex gap-2">
         <Image src={product?.images[0].url ?? ""} alt={product?.images[0].altText ?? product?.images[0].url ?? ""} width={200} height={320} className="w-32 h-auto object-contain" />
          <div className="flex flex-col gap-3 w-full">
            <p>{product?.title}</p>
            <p>Size : {size}</p>
            <p className="font-semibold flex-1">{`${product?.price?.currencyCode} ${product?.price?.amount}`}</p>
            <Link href="/cart"><Button className="bg-[#F0CCC6] hover:bg-[#F0CCC6] w-full font-roboto-mono text">Go to Cart</Button></Link>
          </div>
        </div>
      </CardContent>
    </Card>
    )
  )
}