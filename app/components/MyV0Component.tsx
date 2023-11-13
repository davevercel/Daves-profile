/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lzZqaH8Hp2P
 */
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4 bg-black text-white">
      <h1 className="text-2xl font-semibold mb-4">List Your Top 10 Favorite Movies</h1>
      <form className="w-full flex flex-col items-center justify-center mb-8">
        <Button className="mt-4 bg-white text-black" variant="default">
          Submit
        </Button>
      </form>
      <div className="w-full max-w-md my-2">
        <Input className="pl-2 w-full bg-white text-black" placeholder="Your List..." type="text" />
      </div>
      <ol className="list-decimal list-inside text-left w-full max-w-md bg-white text-black p-4 rounded" />
    </div>
  )
}

