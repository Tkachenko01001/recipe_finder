import { Loader2 } from 'lucide-react'

type LoaderProps = {
  size?: number
  className?: string
  text?: string
}

const Loader = ({ size = 24, className = '' }: LoaderProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center p-8">
      <Loader2 className={`animate-spin text-slate-700 ${className}`} size={size} />
    </div>
  )
}

export { Loader }
