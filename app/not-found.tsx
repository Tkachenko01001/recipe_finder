import Link from 'next/link'
import { FileQuestion } from 'lucide-react'
import { Button } from '@/components/ui/button'

const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 rounded-full bg-slate-100 p-6">
        <FileQuestion className="h-16 w-16 text-slate-700" />
      </div>
      <h1 className="mb-2 text-4xl font-bold text-slate-900">Page Not Found</h1>
      <p className="mb-8 max-w-md text-slate-600">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/">Go Home</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/recipes">Browse Recipes</Link>
        </Button>
      </div>
    </div>
  )
}

export default NotFound
