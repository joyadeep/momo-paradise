import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const page = () => {
  return (
    <div className="relative px-2 lg:px-10 pb-5">
        <div className="px-2 lg:px-32 pb-5">
            <section className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
                <h1 className="font-cormorant-garamond text-5xl md:text-6xl uppercase text-[#5B1F22]">size guide</h1>
                <Image src="/images/size-guide/flower.webp" alt="flower" width={284} height={317} className="size-14 object-contain" />
            </div>
            <div className="flex  items-center gap-5 font-dancing-script">
                <p className="text-3xl [word-spacing:8px] text-[#AA686D]">find your perfect fit</p>
                <Image src="/images/size-guide/heart.webp" alt="flower" width={287} height={256} className="size-8 object-contain" />
            </div>
            <p className="font-lora text-sm">All measurements are in inches.</p>
        </section>
        <Image src="/images/size-guide/image.webp" alt="lookbook" width={650} height={302} className="h-56 w-auto object-contain hidden md:block absolute -top-5 z-50 right-28" />
        <section className="mt-5 flex flex-col lg:flex-row gap-16">
           <div className="grow flex flex-col gap-7">
             <Table className="w-full text-black border border-collapse border-[#E9CDC8]">
               <TableHeader>
                <TableRow className="bg-[#F5E1DD] hover:bg-[#F5E1DD]">
                    <TableHead className="text-black text-center border border-[#E9CDC8]">size</TableHead>
                    <TableHead className="text-black text-center border border-[#E9CDC8]">xs</TableHead>
                    <TableHead className="text-black text-center border border-[#E9CDC8]">sm</TableHead>
                    <TableHead className="text-black text-center border border-[#E9CDC8] ">m</TableHead>
                    <TableHead className="text-black text-center border border-[#E9CDC8]" >lg</TableHead>
                    <TableHead className="text-black text-center border border-[#E9CDC8]">xl</TableHead>
                </TableRow>
                </TableHeader> 
                <TableBody className="font-lora">
                    <TableRow>
                        <TableCell className="text-black text-center border border-[#E9CDC8]">BUST</TableCell>
                        <TableCell className="text-black text-center border border-[#E9CDC8]">30-31</TableCell>
                        <TableCell className="text-black text-center border border-[#E9CDC8]">32-33</TableCell>
                        <TableCell className="text-black text-center border border-[#E9CDC8]">34-35</TableCell>
                        <TableCell className="text-black text-center border border-[#E9CDC8]">36-37</TableCell>
                        <TableCell className="text-black text-center border border-[#E9CDC8]">38-39</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="text-black text-center border border-[#E9CDC8]">WAIST</TableCell>
                        <TableCell className="text-black text-center border border-[#E9CDC8]">22-23</TableCell>
                        <TableCell className="text-black text-center border border-[#E9CDC8]">24-25</TableCell>
                        <TableCell className="text-black text-center border border-[#E9CDC8]">26-27</TableCell>
                        <TableCell className="text-black text-center border border-[#E9CDC8]">28-29</TableCell>
                        <TableCell className="text-black text-center border border-[#E9CDC8]">30-31</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="text-black text-center border border-[#E9CDC8]">HIP</TableCell>
                        <TableCell className="text-black text-center border border-[#E9CDC8]">32-33</TableCell>
                        <TableCell className="text-black text-center border border-[#E9CDC8]">34-35</TableCell>
                        <TableCell className="text-black text-center border border-[#E9CDC8]">36-37</TableCell>
                        <TableCell className="text-black text-center border border-[#E9CDC8]">38-39</TableCell>
                        <TableCell className="text-black text-center border border-[#E9CDC8]">40-41</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <div className="relative">
                <div className="bg-[#F5E1DD] w-full lg:w-3/4 h-36 p-3 lg:p-7 relative flex flex-col">
                <div className="flex gap-3">
                    <Image src="/images/size-guide/flower.webp" alt="flower" width={284} height={317} className="size-7 object-contain" />
                    <p className="uppercase text-base font-roboto-mono text-[#5B1F22]">still unsure ?</p>
                </div>
                <p className="font-lora text-sm w-3/4 lg:w-full">we&apos;re happy to help you find your perfect fit.</p>
                <Link href="#" className="flex items-center gap-2 uppercase font-roboto-mono text-xs mt-auto text-[#5B1F22]">contact us <ArrowRight size={16} /></Link>
                <Image src="/images/size-guide/measuring_tape.webp" alt="flower" width={284} height={317} className="size-36 object-contain absolute top-1/2 -translate-y-1/2 right-3 lg:right-5" />
             <Image src="/images/size-guide/size_note.webp" alt="size note" width={635} height={279} className="h-36 w-auto hidden lg:block object-contain absolute -bottom-10  -right-96 " />
            </div>
            </div>
           </div>

            <div className="w-full lg:w-120 min-h-64 pt-0 lg:pt-10 flex flex-col lg:flex-row justify-between">
                <section className="flex flex-col gap-3">
                    <div className="flex gap-3 items-center">
                <p className="uppercase">how to measure</p>
                 <Image src="/images/size-guide/flower.webp" alt="flower" width={284} height={317} className="size-7 object-contain" />
                 </div>
                 <div>
                    <h6 className="font-roboto-mono text-sm">BUST</h6>
                    <p className="font-lora text-xs">Measure around the fullest part of your bust. </p>
                 </div>
                 <Separator />
                 <div>
                    <h6 className="font-roboto-mono text-sm">WAIST</h6>
                    <p className="font-lora text-xs">Measure around the narrowest part of your waist. </p>
                 </div>
                 <Separator />
                 <div>
                    <h6 className="font-roboto-mono text-sm">HIP</h6>
                    <p className="font-lora text-xs">Measure around the fullest part of your hip. </p>
                 </div>
                 <div>

                 </div>
                </section>
                <Image src="/images/size-guide/diagram.webp" alt="lookbook" width={664} height={869} className="h-72 w-auto object-contain" />
            </div>

        </section>
        </div>
        <div className="w-full bg-[url('/images/size-guide/pink_gingham_background.webp')] bg-repeat-x bg-contain h-14 flex items-center mt-10 justify-center font-dancing-script text-2xl text-[#5B1F22]">
        <p>made slowly, with love</p>
        </div>
    </div>
  )
}

export default page