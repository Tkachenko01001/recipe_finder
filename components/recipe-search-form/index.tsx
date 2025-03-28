'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { CuisineTypeSelect } from './cuisine-type-select'
import { SearchInput } from './search-input'
import { MaxTimeInput } from './max-time-input'
import { useRouter } from 'next/navigation'
import { APP_ROUTES } from '@/constants/routes'
import { SearchParams } from '@/types'

const RecipeSearchForm = () => {
  const [isFormValid, setIsFormValid] = useState(false)
  const [query, setQuery] = useState('')
  const [cuisine, setCuisine] = useState('')
  const [maxReadyTime, setMaxReadyTime] = useState('')
  const router = useRouter()

  const createQueryString = (searchParams: SearchParams) => {
    const params = new URLSearchParams()

    Object.entries(searchParams).forEach(([key, value]) => {
      if (value) params.set(key, value)
    })

    return params.toString()
  }

  useEffect(() => {
    if (query || cuisine || maxReadyTime) {
      setIsFormValid(true)
    }
  }, [query, cuisine, maxReadyTime])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`${APP_ROUTES.RECIPES}?${createQueryString({ query, cuisine, maxReadyTime })}`)
  }

  return (
    <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
      <SearchInput query={query} setQuery={setQuery} />
      <CuisineTypeSelect cuisine={cuisine} setCuisine={setCuisine} />
      <MaxTimeInput maxReadyTime={maxReadyTime} setMaxReadyTime={setMaxReadyTime} />
      <Button type="submit" className="w-full cursor-pointer" disabled={!isFormValid}>
        Next
      </Button>
    </form>
  )
}

export { RecipeSearchForm }
