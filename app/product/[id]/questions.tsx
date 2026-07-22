import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const Questions = () => {
  return (
    <Accordion type="single" defaultValue={"sizing"} collapsible className="font-lora mt-5">
      <AccordionItem value="sizing" className="border-black border-t">
        <AccordionTrigger>SIZING</AccordionTrigger>
        <AccordionContent>
          We recommend ordering 1-2 sizes larger than your normal wear size.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="returns" className="border-black">
        <AccordionTrigger>SHIPPING + RETURNS</AccordionTrigger>
        <AccordionContent>
          Returns accepted within 30 days. Items must be unused and in original
          packaging. Refunds processed within 5-7 business days.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="wrapping" className="border-black">
        <AccordionTrigger>GIFT WRAPPING AVAILABLE IN CART</AccordionTrigger>
        <AccordionContent>
          Gift wrapping available in cart.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default Questions