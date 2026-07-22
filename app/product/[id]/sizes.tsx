'use client'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import React, { useState } from 'react'

const sizes = ['xs','s','m','l','xl','xxl']
const Sizes = () => {
    const [size,setSize] = useState(0)
  return (
    <div className='py-4'>
        <ToggleGroup
      type="single"
      defaultValue={sizes[size]}
      onValueChange={(value) => {
    if (value) setSize(sizes.indexOf(value));
  }}
      className="flex gap-3"
    >
      {sizes.map((size) => (
        <ToggleGroupItem
          key={size}
          value={size}
          aria-label={size}
          className="
            h-12 w-12 rounded-full
            border border-dashed
            data-[state=on]:bg-rose-100
            data-[state=on]:border-rose-300
            data-[state=on]:text-rose-600
            hover:bg-muted
          "
        >
          {size}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
    </div>
  )
}

export default Sizes