/**
 * v0 by Vercel.
 * @see https://v0.dev/t/A8GO611k7Kp
 */
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4">
      <h1 className="text-2xl font-semibold mb-4">Find Nearby Restaurants</h1>
      <form className="w-full flex items-center justify-center mb-8">
        <div className="relative w-full max-w-md">
          <svg
            className=" absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500 dark:text-zinc-400"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <Input className="pl-8 w-full" placeholder="Enter your location..." type="text" />
        </div>
        <Button className="ml-4" variant="default">
          Search
        </Button>
      </form>
      <div className="flex flex-wrap justify-center gap-4">
        <Card className="w-full md:w-1/2 lg:w-1/3">
          <CardHeader className="flex justify-between items-center">
            <CardTitle>Restaurant 1</CardTitle>
            <span>Cuisine Type</span>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div>Rating: 4.5</div>
            <div>Distance: 1.2 miles</div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">
              View Details
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-full md:w-1/2 lg:w-1/3">
          <CardHeader className="flex justify-between items-center">
            <CardTitle>Restaurant 2</CardTitle>
            <span>Cuisine Type</span>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div>Rating: 4.2</div>
            <div>Distance: 2.1 miles</div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">
              View Details
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-full md:w-1/2 lg:w-1/3">
          <CardHeader className="flex justify-between items-center">
            <CardTitle>Restaurant 3</CardTitle>
            <span>Cuisine Type</span>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div>Rating: 4.7</div>
            <div>Distance: 1.5 miles</div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">
              View Details
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

