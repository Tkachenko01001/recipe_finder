'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'

const Back = () => {
  const router = useRouter()

  return (
    <Button variant="ghost" type="button" onClick={() => router.back()} className="cursor-pointer">
      <ArrowLeft className="h-4 w-4" />
      Back
    </Button>
  )
}

export { Back }
