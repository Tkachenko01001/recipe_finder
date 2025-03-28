import Link from 'next/link'
import { ChefHat } from 'lucide-react'

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-slate-800 to-slate-900 py-4 shadow-md">
      <div className="container mx-auto px-4">
        <Link href="/" className="group flex items-center justify-center gap-2 sm:justify-start">
          <ChefHat className="h-7 w-7 text-amber-400 transition-transform group-hover:rotate-12" />
          <h1 className="text-2xl font-bold tracking-tight text-white">
            CookBook
            <span className="ml-1 text-amber-400">Recipes</span>
          </h1>
        </Link>
      </div>
    </header>
  )
}

export { Header }
