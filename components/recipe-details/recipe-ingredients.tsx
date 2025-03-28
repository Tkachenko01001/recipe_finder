import { ChefHat } from 'lucide-react'

type Props = {
  recipe: any
}

const RecipeIngredients = ({ recipe }: Props) => {
  return (
    <div className="md:col-span-1">
      <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
        <ChefHat className="h-5 w-5" />
        Ingredients
      </h2>
      <ul className="space-y-3">
        {recipe.extendedIngredients.map((ingredient: any) => (
          <li key={ingredient.id} className="flex items-start gap-2">
            <div className="bg-primary mt-2 h-2 w-2 rounded-full" />
            <span>
              <span className="font-medium">
                {ingredient.amount} {ingredient.unit}
              </span>
              {ingredient.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { RecipeIngredients }
