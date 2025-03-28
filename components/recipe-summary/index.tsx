import { Info } from 'lucide-react'

type Props = {
  recipe: any
}

const RecipeSummary = ({ recipe }: Props) => {
  return (
    <div className="bg-muted my-6 rounded-lg p-4">
      <div className="mb-2 flex items-center gap-2">
        <Info className="text-primary h-5 w-5" />
        <h2 className="font-medium">About this recipe</h2>
      </div>
      <div className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: recipe.summary }} />
    </div>
  )
}

export { RecipeSummary }
