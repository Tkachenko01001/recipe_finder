import { getRecipes } from '@/actions/fetchRecipes'
import { RecipeList } from '@/components/recipe-list'

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export const dynamic = 'force-dynamic'

const Page = async (props: { searchParams: SearchParams }) => {
  const searchParams = await props.searchParams
  const { query, cuisine, maxReadyTime } = searchParams

  const data = await getRecipes({ query, cuisine, maxReadyTime })

  if (data.status === 'failure') {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold">{data.message}</h1>
      </div>
    )
  }
  
  if (data.results.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold">Nothing found matching your request!</h1>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold">Oops, an unexpected error occurred!</h1>
      </div>
    )
  }

  return <RecipeList data={data.results} />
}

export default Page
