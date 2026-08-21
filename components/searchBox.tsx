"use client"
import { Input } from './ui/input'
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import * as z from "zod"
import { useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState, useTransition } from 'react'
import { PredictiveProduct } from '@/lib/graphql/queries/searchProductQuery'
import { useDebounce } from '@/lib/hooks/useDebounce'
import { fetchPredictiveSearch } from '@/lib/graphql/queries/searchAction'
import {Controller} from "react-hook-form"
import Image from 'next/image'
import { formatMoney } from '@/lib/formatMoney'
import Link from 'next/link'

const formSchema = z.object({
  search: z.string(),
})

interface Props {
  closeSearch : () => void;
}
const SearchBox = ({closeSearch}:Props) => {
  const router = useRouter();
  const [results, setResults] = useState<PredictiveProduct[]>([]);
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver : zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  })
  const watchSearch = useWatch({
    name: "search",
    control: form.control
  })
  const debouncedTerm = useDebounce(watchSearch, 300);

  useEffect(()=>{
    form.setFocus("search")
  },[form])

  useEffect(() => {
    const term = debouncedTerm.trim();
    if (!term) {
      return;
    }
    startTransition(async () => {
      const products = await fetchPredictiveSearch(debouncedTerm);
      setResults(products);
    });
  }, [debouncedTerm,startTransition]);
 
  const onSubmit = () => {
    router.push(`/search?q=${encodeURIComponent(form.getValues("search").trim())}`);
    closeSearch()
  };

  const resetForm = () =>{
    form.reset({
      search:''
    })
    setResults([]);
  }

  return (
    <div className='flex flex-col '>
      <div className='flex justify-center
       items-center'>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Controller 
          name='search'
          control={form.control}
          render={({field}) => (
            <Input placeholder='Search' className='w-full md:w-96' {...field} />
          )}
          />
      
    </form>
        <X onClick={resetForm}/>
      </div>
      <section className='w-full lg:w-lg mx-auto h-full max-h-96 overflow-y-auto flex flex-col gap-5 py-3'>
        {results?.map((result) => (
          <Link href={`/product/${result.handle}`} onClick={closeSearch} key={result.id} className='flex items-center gap-2'>
            <Image src={result.image?.url ?? ""} alt={result.image?.altText ?? result.image?.url ?? ""} width={50} height={50} />
            <div>
              <p className='text-sm'>{result.title}</p>
              <p className='text-sm font-bold'>{formatMoney(result.price?.amount, result.price?.currencyCode)}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}

export default SearchBox