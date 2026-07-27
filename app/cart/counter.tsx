'use client'

import { Button } from "@/components/ui/button"
import { Minus, Plus } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const Counter = () => {
    const [count,setCount] = useState(0)

    const handlePlus = () => {
        setCount(count + 1)
    }
    const handleMinus = () => {
        setCount(Math.max(count - 1, 0))
    }

  return (
    <div className="mt-5 w-fit">
        <div className="flex items-center border border-gray-700 border-collapse">
        <Button variant="ghost" size="sm" className="border-r-gray-700" onClick={handleMinus}> <Minus/> </Button>
        <p className="min-w-10 text-center">{count}</p>
        <Button variant="ghost" size="sm" className="border-l-gray-700" onClick={handlePlus}> <Plus/></Button>
    </div>
    <p className="text-center">
        <Link href={"#"} className="uppercase text-sm underline ">remove</Link>
    </p>
    </div>
  )
}

export default Counter