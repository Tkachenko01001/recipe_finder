import { APP_ROUTES } from '@/constants/routes'
import { Recipe } from '@/types'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { RecipeImage } from '../recipe-image'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

type Props = {
  data: Recipe[]
}

const RecipeList = ({ data }: Props) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {data.map(({ id, image, title }) => (
        <Card
          key={id}
          className="w-full justify-between bg-white pt-0 shadow-md transition-shadow duration-300 hover:shadow-xl sm:w-72 md:w-80"
        >
          <CardHeader className="p-0">
            <RecipeImage image={image} size={{ width: 320, height: 200 }} />
          </CardHeader>
          <CardContent>
            <CardTitle className="mb-2 text-xl font-semibold">{title}</CardTitle>
            <Button className="mt-4 w-full cursor-pointer" variant="outline">
              <Link
                href={`${APP_ROUTES.RECIPES}/${id}`}
                className="flex size-full items-center justify-center gap-2"
              >
                View Recipe
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export { RecipeList }
