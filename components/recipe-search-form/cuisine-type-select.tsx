import { CUISINES } from '@/constants/cuisines'
import { SetStateAction } from 'react'
import { Label } from '../ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

type Props = {
  cuisine: string
  setCuisine: React.Dispatch<SetStateAction<string>>
}

const CuisineTypeSelect = ({ cuisine, setCuisine }: Props) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="cuisine">Cuisine Type</Label>
      <Select value={cuisine} onValueChange={setCuisine}>
        <SelectTrigger id="cuisine">
          <SelectValue placeholder="Select cuisine" />
        </SelectTrigger>
        <SelectContent>
          {CUISINES.map((cuisine) => (
            <SelectItem key={cuisine} value={cuisine}>
              {cuisine}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export { CuisineTypeSelect }
