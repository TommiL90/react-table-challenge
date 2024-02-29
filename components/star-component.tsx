import { StarIcon } from './ui/icons'

interface ComponentProps {
  value: 1 | 2 | 3 | 4 | 5
}

export default function Rating({ value }: ComponentProps) {
  return (
    <div className="flex items-center space-x-2">
      {Array.from({ length: value }, (_, index) => (
        <StarIcon key={index} className="size-3 fill-current text-amber-500" />
      ))}
      {Array.from({ length: 5 - value }, (_, index) => (
        <StarIcon
          key={index + value}
          className="size-3 fill-current text-gray-300 dark:text-gray-700"
        />
      ))}
    </div>
  )
}
