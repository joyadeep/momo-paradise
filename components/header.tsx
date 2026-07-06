import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet"
import Image from "next/image"

const Header = () => {
  return (
    <header className="flex justify-between items-center px-10 py-3">
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" className="text-green-800 hover:text-green-700"> <Menu className="size-5"/> menu </Button>
            </SheetTrigger>
            <SheetContent side="left" >
                <SheetHeader>menu</SheetHeader>
            </SheetContent>
        </Sheet>
        <Image src="/images/logo.png" alt="momo paradise logo" width={200} height={100} className="w-48 h-14 object-contain" />
        <div className="flex gap-14 text-xs text-green-800">
            <div>SEARCH (0)</div>
            <div>CART (0)</div>
        </div>
    </header>
  )
}

export default Header