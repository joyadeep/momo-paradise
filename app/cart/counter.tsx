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
    <div className={cn("lg:mt-7 w-fit", disabled && "pointer-events-none")}>
        <div className="w-fit h-7 lg:h-auto flex items-center border border-gray-700 border-collapse">
        <Button variant="ghost" className="h-7 px-2 border-r-gray-700" onClick={handleMinus}> <Minus/> </Button>
        <p className="min-w-7 lg:min-w-10 text-center">{quantity}</p>
        <Button variant="ghost" className="h-7 px-2 border-l-gray-700" onClick={handlePlus}> <Plus/></Button>
    </div>
    <p className="text-center">
        <Button variant="link" onClick={onRemove} className="p-0">remove</Button>
    </p>
    </div>
  )
}

export default Counter