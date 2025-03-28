import { Search } from 'lucide-react'
import { SetStateAction } from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

type Props = {
  query: string
  setQuery: React.Dispatch<SetStateAction<string>>
}

const SearchInput = ({ query, setQuery }: Props) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="query">What would you like to cook?</Label>
      <div className="relative">
        <Search className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
        <Input
          id="query"
          placeholder="Enter ingredients or dish name..."
          className="pl-10"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  )
}

export { SearchInput }
