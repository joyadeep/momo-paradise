"use client";

import { ShowAddedProduct } from "@/app/_components/showAddedProduct";
import { Button } from "@/components/ui/button";
import { addItemToCart } from "@/lib/graphql/cart/actions";
import { ProductDetail } from "@/lib/graphql/types/productDetailType";
import { useTransition } from "react";
import { toast } from "sonner";

export function AddToCartButton({ variantId,product }: { variantId: string,product:ProductDetail|null }) {
  const [isPending, startTransition] = useTransition();

   const handleClick = () => {
    startTransition(async () => {
      try {
        await addItemToCart(variantId, 1);
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
    className='w-full lg:w-fit bg-rose-600 hover:bg-rose-700 px-20 '
      disabled={isPending}
      onClick={handleClick}
    >
      {isPending ? "Adding..." : "Add to cart"}
    </Button>
    <ShowAddedProduct open={true} product={product}/>
    </>
  );
}