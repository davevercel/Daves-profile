/**
 * v0 by Vercel.
 * @see https://v0.dev/t/LdxmWh9G5SG
 */
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4">
      <h1 className="text-2xl font-semibold mb-4">List Your Top 5 Favorite Movies</h1>
      <form className="w-full flex flex-col items-center justify-center mb-8">
        <Button className="mt-4" variant="default">
          Submit
        </Button>
      </form>
      <h2 className="text-xl font-semibold mb-4">Your List</h2>
      <div className="flex flex-wrap justify-center gap-4" />
    </div>
  )
}

