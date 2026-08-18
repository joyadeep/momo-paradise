"use client"
import { Input } from './ui/input'
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import * as z from "zod"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  search: z.string(),
})
const SearchBox = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver : zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  })

  const onSubmit = () => {
    router.push(`/search?q=${encodeURIComponent(form.getValues("search").trim())}`);
  };
  return (
    <div className='flex justify-center'>
      <div className='flex items-center'>
        <form onSubmit={form.handleSubmit(onSubmit)}>
      <Input placeholder='Search' className='w-96' />
    </form>
        <X/>
      </div>
    </div>
  )
}

export default SearchBox