import React from 'react'
import { RecipeHeader } from './recipe-header'
import { RecipeIngredients } from './recipe-ingredients'
import { RecipeSummary } from '../recipe-summary'
import { RecipeImage } from '../recipe-image'

type Props = {
  recipe: any
}

const RecipeDetails = ({ recipe }: Props) => {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <RecipeHeader recipe={recipe} />
      <div className="relative my-8 aspect-video overflow-hidden rounded-lg">
        <RecipeImage image={recipe.image} size={{ width: 800, height: 500 }} />
      </div>
      {recipe.summary && <RecipeSummary recipe={recipe} />}
      <div className="my-8 grid gap-8 md:grid-cols-3">
        <RecipeIngredients recipe={recipe} />
      </div>
    </div>
  )
}

export { RecipeDetails }
