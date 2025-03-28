import { getRecipeById } from '@/actions/fetchRecipeById'
import { RecipeDetails } from '@/components/recipe-details'

type Params = {
  params: Promise<{ id: string }>
}

const Page = async ({ params }: Params) => {
  const { id } = await params
  const recipe = await getRecipeById(id)

  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold">Recipe not found</h1>
      </div>
    )
  }

  return <RecipeDetails recipe={recipe} />
}

export default Page
