"use client";

import { Button } from "@/components/ui/button";
import { addItemToCart } from "@/lib/graphql/cart/actions";
import { useTransition } from "react";
import { toast } from "sonner";

export function AddToCartButton({ variantId }: { variantId: string }) {
  const [isPending, startTransition] = useTransition();

   const handleClick = () => {
    startTransition(async () => {
      try {
        await addItemToCart(variantId, 1);
        toast.success("Added to cart");
      } catch (error) {
        toast.error("Couldn't add to cart", {
          description: error instanceof Error ? error.message : "Please try again.",
        });
      }
    });
  };

  return (
    <Button
    className='bg-rose-600 hover:bg-rose-700 px-20 '
      disabled={isPending}
      onClick={handleClick}
    >
      {isPending ? "Adding..." : "Add to cart"}
    </Button>
  );
}