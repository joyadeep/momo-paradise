'use client'

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Minus, Plus } from "lucide-react"

interface Props {
    quantity: number;
    disabled?: boolean;
    onChange: (value: number) => void;
    onRemove: () => void
}
const Counter = ({quantity,onRemove,onChange,disabled}:Props) => {
    
    const handlePlus = () => {
        onChange(quantity + 1)
    }
    const handleMinus = () => {
        onChange(Math.max(quantity - 1, 0))
    }

  return (
    <div className={cn("mt-5 w-fit", disabled && "pointer-events-none")}>
        <div className="flex items-center border border-gray-700 border-collapse">
        <Button variant="ghost" size="sm" className="border-r-gray-700" onClick={handleMinus}> <Minus/> </Button>
        <p className="min-w-10 text-center">{quantity}</p>
        <Button variant="ghost" size="sm" className="border-l-gray-700" onClick={handlePlus}> <Plus/></Button>
    </div>
    <p className="text-center">
        <Button variant="link" onClick={onRemove}>remove</Button>
    </p>
    </div>
  )
}

export default Counter