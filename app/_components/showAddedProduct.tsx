import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ProductDetail } from '@/lib/graphql/types/productDetailType'
import { Card, CardContent } from "@/components/ui/card";

interface IProps {
  product: ProductDetail|null
  open: boolean
}

export function ShowAddedProduct({product,open=false}:IProps) {
  
  return (
    open && (
      <Card className="fixed top-2 left-1/2 -translate-x-1/2" >
      <CardContent >
       <div className="flex flex-col gap-5">
         <Image src={product?.images[0].url ?? ""} alt={product?.images[0].altText ?? product?.images[0].url ?? ""} width={200} height={200} className="w-32 h-auto" />
          <div className="flex flex-col gap-3">
            <p>{product?.title}</p>
            <Link href="/cart"><Button className="bg-red-600 hover:bg-red-600 w-full">Go to Cart</Button></Link>
          </div>
        </div>
      </CardContent>
    </Card>
    )
  )
}