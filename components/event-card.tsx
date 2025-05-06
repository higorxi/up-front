import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Calendar, MapPin, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface EventCardProps {
  title: string
  organizer: string
  description: string
  date: string
  location: string
  category: string
  points: number
  imageUrl: string
  featured?: boolean
}

export function EventCard({
  title,
  organizer,
  description,
  date,
  location,
  category,
  points,
  imageUrl,
  featured = false,
}: EventCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="flex flex-col md:flex-row">
        <div className="relative h-48 md:h-auto md:w-1/3">
          <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
          {featured && <Badge className="absolute top-2 left-2 bg-[#F9B000] text-[#3A0F2D]">Destaque</Badge>}
        </div>
        <div className="flex flex-col flex-1">
          <CardHeader className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-lg">{title}</CardTitle>
                <CardDescription>por {organizer}</CardDescription>
              </div>
              <div className="flex gap-2">
                <Badge
                  variant="outline"
                  className="bg-[#9A3B72]/10 text-[#9A3B72] border-[#9A3B72]/30 flex items-center gap-1"
                >
                  <Award className="h-3 w-3" />
                  {points} pontos
                </Badge>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <Heart className="h-4 w-4" />
                  <span className="sr-only">Adicionar aos favoritos</span>
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0 flex-1">
            <p className="text-sm text-muted-foreground mb-3">{description}</p>
            <div className="flex flex-col gap-1 text-sm">
              <div className="flex items-center gap-1 text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span>{location}</span>
              </div>
            </div>
            <Badge className="mt-3" variant="outline">
              {category}
            </Badge>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex justify-between">
            <Button variant="outline" size="sm" asChild>
              <Link href={`/dashboard/events/${encodeURIComponent(title.toLowerCase().replace(/\s+/g, "-"))}`}>
                Ver Detalhes
              </Link>
            </Button>
            <Button size="sm" className="bg-[#9A3B72] hover:bg-[#7A2D5A]">
              Participar
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  )
}
