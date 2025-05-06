import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

interface ReviewCardProps {
  name: string
  profession: string
  rating: number
  date: string
  comment: string
  imageUrl: string
}

export function ReviewCard({ name, profession, rating, date, comment, imageUrl }: ReviewCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <div className="relative h-12 w-12 rounded-full overflow-hidden">
            <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-medium">{name}</h3>
                <p className="text-sm text-muted-foreground">{profession}</p>
              </div>
              <div className="flex items-center gap-2 mt-1 sm:mt-0">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < rating ? "fill-[#F9B000] text-[#F9B000]" : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">{date}</span>
              </div>
            </div>
            <p className="mt-2">{comment}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
