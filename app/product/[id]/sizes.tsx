'use client'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import React, { useState } from 'react'

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
    <div className='py-4'>
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
            data-[state=on]:bg-rose-100
            data-[state=on]:border-rose-300
            data-[state=on]:text-rose-600
            hover:bg-muted
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