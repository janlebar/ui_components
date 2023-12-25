import Link from "next/link"
import { CardContent, Card } from "./components/ui/card"

export default function Component() {
  return (
    <section className="w-full py-12">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6 max-w-xl mx-auto lg:max-w-none">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="grid gap-1">
            <h1 className="text-2xl font-bold tracking-tight">Product Categories</h1>
            <p className="text-gray-500 dark:text-gray-400">Explore our variety of products.</p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <Card>
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View Details</span>
            </Link>
            <img
              alt="Category 1"
              className="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
              height="600"
              src="/placeholder.svg"
              width="450"
            />
            <CardContent>
              <h3 className="font-semibold">Category 1</h3>
              <p className="text-sm leading-none">Description for Category 1.</p>
            </CardContent>
          </Card>
          <Card>
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View Details</span>
            </Link>
            <img
              alt="Category 2"
              className="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
              height="600"
              src="/placeholder.svg"
              width="450"
            />
            <CardContent>
              <h3 className="font-semibold">Category 2</h3>
              <p className="text-sm leading-none">Description for Category 2.</p>
            </CardContent>
          </Card>
          <Card>
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View Details</span>
            </Link>
            <img
              alt="Category 3"
              className="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
              height="600"
              src="/placeholder.svg"
              width="450"
            />
            <CardContent>
              <h3 className="font-semibold">Category 3</h3>
              <p className="text-sm leading-none">Description for Category 3.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}