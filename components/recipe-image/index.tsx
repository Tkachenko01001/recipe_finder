'use client'

import Image from 'next/image'
import { useState } from 'react'

type Props = {
  image: string
  size: { width: number; height: number }
}

const RecipeImage = ({ image, size }: Props) => {
  const [isError, setIsError] = useState(false)

  const placeholderPath = `/placeholder.svg?height=${size.height}&width=${size.width}`

  return (
    <Image
      placeholder="blur"
      blurDataURL={placeholderPath}
      width={size.width}
      height={size.height}
      src={!isError ? image : placeholderPath}
      alt="recipe image"
      className="h-full w-full object-cover"
      onError={() => setIsError(true)}
    />
  )
}

export { RecipeImage }
