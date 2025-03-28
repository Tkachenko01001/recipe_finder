import { Clock, Leaf, Users } from 'lucide-react'
import { Badge } from '../ui/badge'

type Props = {
  recipe: any
}

const RecipeHeader = ({ recipe }: Props) => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{recipe.title}</h1>
      <div className="flex flex-wrap gap-2">
        {recipe.cuisines.map((cuisine: string) => (
          <Badge key={cuisine} variant="secondary" className="text-sm">
            {cuisine}
          </Badge>
        ))}
        {recipe.diets.map((diet: string) => (
          <Badge key={diet} variant="outline" className="text-sm">
            {diet}
          </Badge>
        ))}
      </div>
      <div className="text-muted-foreground flex flex-wrap gap-6">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span>{recipe.readyInMinutes} mins</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          <span>{recipe.servings} servings</span>
        </div>
        {recipe.healthScore && (
          <div className="flex items-center gap-2">
            <Leaf className="h-4 w-4" />
            <span>Health score: {recipe.healthScore}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export { RecipeHeader }
