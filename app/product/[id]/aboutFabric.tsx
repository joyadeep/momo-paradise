import Image from "next/image"

const AboutFabric = () => {
  return (
    <div>
        <div className="flex justify-between items-center">
            <h1 className="font-lora uppercase text-lg tracking-wider">about the fabric</h1>
        </div>
        <div className="flex gap-2 mt-5">
          <Image src="/images/about_fabric/fabric11.webp" alt="fabric 1" width={700} height={700} className="w-1/2 h-auto object-contain" />
          <div className="font-lora text-sm">
            <p className="font-roboto-mono uppercase text-base mb-2">bamboo blend</p>
            <p className="leading-5">Soft and breathable with a silky touch. Bamboo keeps you cool in summer and gentle on sensitive skin</p>
            <p className="mt-3">35% Bamboo</p>
          </div>
        </div>
        <div className="flex gap-2 mt-5">
        <Image src="/images/about_fabric/fabric2.webp" alt="fabric 1" width={700} height={700} className="w-3/5 h-auto object-contain -ml-4" />
        <div className="flex flex-col gap-5">
         <div className="font-lora text-sm">
            <p className="font-roboto-mono uppercase text-base mb-2">polyester</p>
            <p className="leading-5">Adds durablility, helps the fabric hold its shape, and prevents wrinkles for everyday ease </p>
            <p className="mt-3">35% Polyester</p>
          </div>
         <div className="font-lora text-sm">
            <p className="font-roboto-mono uppercase text-base mb-2">cotton</p>
            <p className="leading-5">Natural, breathable, and soft. Brings comfort and that beautiful, lived-in feel we love </p>
            <p className="mt-3">3% Cotton</p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default AboutFabric