import { Back } from '@/components/buttons/back'
import { Loader } from '@/components/loader'
import { Suspense } from 'react'

export default function RecipesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="container">
      <div className="mb-6">
        <Back />
      </div>
      <Suspense fallback={<Loader size={50} />}>{children}</Suspense>
    </div>
  )
}
