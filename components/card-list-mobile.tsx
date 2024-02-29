import { CheckCircledIcon, DotsVerticalIcon } from '@radix-ui/react-icons'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Car } from '@/app/page'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Rating from './star-component'
import { Button } from './ui/button'

interface Props {
  carList: Car[]
}

const CardListMobile = ({ carList }: Props) => {
  return (
    <Card className="w-full md:hidden">
      <CardHeader className="pb-3">
        <CardTitle>Rent a car</CardTitle>
        <CardDescription>Explore cars.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid gap-6">
            {carList.map((car, index) => (
              <div
                key={index}
                className="flex items-center justify-between space-x-4"
              >
                <div className="flex w-full items-center justify-between space-x-6">
                  <div className="h-30 relative w-24">
                    <Image
                      src={car.urlImage}
                      alt="car image"
                      priority
                      width={200}
                      height={200}
                    />
                    <CheckCircledIcon
                      className={cn(
                        car.status !== 'available' ? 'hidden' : '',
                        'text-success absolute left-0 top-0 size-10',
                      )}
                    />
                  </div>
                  <div className="space-y-4 py-4">
                    <h4 className="text-base font-medium leading-none">
                      {car.name}
                    </h4>
                    <h4 className="leading-none text-muted-foreground">
                      {car.nextAvailableDate}
                    </h4>
                    <Rating value={car.rating} />
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <DotsVerticalIcon className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem
                      // onClick={() => navigator.clipboard.writeText(car.id)}
                      >
                        Copy car ID
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>View customer</DropdownMenuItem>
                      <DropdownMenuItem>View car details</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CardListMobile
