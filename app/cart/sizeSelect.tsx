// components/cart/size-select.tsx
"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CartLine } from "@/lib/graphql/cart/types";

type SizeSelectProps = {
  line: CartLine;
  disabled?: boolean;
  onSizeChange: (newMerchandiseId: string) => void;
};

export function SizeSelect({ line, disabled, onSizeChange }: SizeSelectProps) {
  const sizeOptionName = "Size"; // adjust if your option is named differently

  const sizeVariants = line.merchandise.product.variants.edges
    .map((e) => e.node)
    .filter((variant) =>
      variant.selectedOptions.some((opt) => opt.name === sizeOptionName)
    );

  const currentSize = line.merchandise.selectedOptions.find(
    (opt) => opt.name === sizeOptionName
  )?.value;

  return (
    <Select
      disabled={disabled}
      value={line.merchandise.id}
      onValueChange={(newMerchandiseId) => onSizeChange(newMerchandiseId)}
    >
      <SelectTrigger className="w-16">
        <SelectValue placeholder={currentSize ?? "Size"} />
      </SelectTrigger>
      <SelectContent>
        {sizeVariants.map((variant) => {
          const size = variant.selectedOptions.find((opt) => opt.name === sizeOptionName)?.value;
          return (
            <SelectItem key={variant.id} value={variant.id} disabled={!variant.availableForSale}>
              {size} {!variant.availableForSale && "(Sold out)"}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}