import { RecipeSearchForm } from '@/components/recipe-search-form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const Page = () => {
  return (
    <main className="from-background to-muted/50 flex min-h-screen flex-col items-center justify-center bg-gradient-to-b p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Find Recipes</CardTitle>
        </CardHeader>
        <CardContent>
          <RecipeSearchForm />
        </CardContent>
      </Card>
    </main>
  )
}

export default Page
