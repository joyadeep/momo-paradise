'use client'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

interface Size {
  id: string;
  title: string;
  availableForSale: boolean;
  price: {
    amount: string;
    currencyCode: string;
  };
  selectedOptions: {
    name: string;
    value: string;
  }[];
}

interface Props {
  sizes: Size[];
  selectedVariant: Size | null;
   onChange: (variant: Size) => void;
  
}
const Sizes = ({sizes,selectedVariant,onChange}:Props) => {
  return (
    <div className='py-4 font-roboto-mono'>
        <ToggleGroup
      type="single"
      defaultValue={selectedVariant?.id}
      onValueChange={(value) => {
         const variant = sizes.find((v) => v.id === value);
    if (variant) {
      onChange(variant);
    }
  }}
      className="flex gap-3"
    >
      {sizes.map((size) => (
        <ToggleGroupItem
          key={size?.id}
          value={size?.id}
          aria-label={size?.title}
          className="
            h-12 w-12 rounded-full
            border border-dashed
            data-[state=on]:bg-[#F0CCC6]
            data-[state=on]:border-[#EDD2CD]
            text-[#776A6B]
            hover:bg-muted
            text-xs
          "
        >
          {size?.title}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
    </div>
  )
}

export default Sizes