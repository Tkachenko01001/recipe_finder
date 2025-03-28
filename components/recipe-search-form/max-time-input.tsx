import { SetStateAction } from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

type Props = {
  maxReadyTime: string
  setMaxReadyTime: React.Dispatch<SetStateAction<string>>
}

const MaxTimeInput = ({ maxReadyTime, setMaxReadyTime }: Props) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="maxTime">Maximum Preparation Time (minutes)</Label>
      <Input
        id="maxTime"
        type="number"
        placeholder="e.g., 30"
        min="1"
        value={maxReadyTime}
        onChange={(e) => setMaxReadyTime(e.target.value)}
      />
    </div>
  )
}

export { MaxTimeInput }
