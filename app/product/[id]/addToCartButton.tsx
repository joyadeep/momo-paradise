"use client";

import { ShowAddedProduct } from "@/app/_components/showAddedProduct";
import { Button } from "@/components/ui/button";
import { addItemToCart } from "@/lib/graphql/cart/actions";
import { ProductDetail } from "@/lib/graphql/types/productDetailType";
import { useEffect, useState, useTransition } from "react";
import { toast } from "sonner";

export function AddToCartButton({ variantId,product,size }: { variantId: string,product:ProductDetail|null,size:string }) {
  const [isPending, startTransition] = useTransition();
  const [showAddedProduct, setShowAddedProduct] = useState(false);

  useEffect(()=>{
    const autoClose = setTimeout(() => {
      setShowAddedProduct(false);
    },5000);

    return () => clearTimeout(autoClose);
  },[showAddedProduct])

  const changeShowAddedProduct = () => {
    setShowAddedProduct(!showAddedProduct);
  };

   const handleClick = () => {
    startTransition(async () => {
      try {
        await addItemToCart(variantId, 1);
        setShowAddedProduct(true);
      } catch (error) {
        toast.error("Couldn't add to cart", {
          description: error instanceof Error ? error.message : "Please try again.",
        });
      }
    });
  };

  return (
    <>
    <Button
    className='w-full lg:w-72 bg-[#F0CCC6] hover:bg-[#F0CCC6] text-[#776A6B] border border-[#776A6B] px-20 font-roboto-mono'
      disabled={isPending}
      onClick={handleClick}
    >
      {isPending ? "Adding..." : "Add to cart"}
    </Button>
    <ShowAddedProduct open={showAddedProduct} setOpen={changeShowAddedProduct} product={product} size={size}/>
    </>
  );
}