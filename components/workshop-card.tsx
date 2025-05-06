import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Calendar, Clock, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface WorkshopCardProps {
  title: string
  instructor: string
  description: string
  date: string
  time: string
  duration: string
  category: string
  level: string
  points: number
  imageUrl: string
  featured?: boolean
}

export function WorkshopCard({
  title,
  instructor,
  description,
  date,
  time,
  duration,
  category,
  level,
  points,
  imageUrl,
  featured = false,
}: WorkshopCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-48">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <Badge className="absolute top-2 right-2 bg-[#9A3B72]">{level}</Badge>
        {featured && <Badge className="absolute top-2 left-2 bg-[#F9B000] text-[#3A0F2D]">Destaque</Badge>}
        <Button
          variant="ghost"
          size="icon"
          className="absolute bottom-2 right-2 bg-white/80 hover:bg-white/90 rounded-full"
        >
          <Heart className="h-4 w-4" />
          <span className="sr-only">Adicionar aos favoritos</span>
        </Button>
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription>por {instructor}</CardDescription>
          </div>
          <Badge
            variant="outline"
            className="bg-[#9A3B72]/10 text-[#9A3B72] border-[#9A3B72]/30 flex items-center gap-1"
          >
            <Award className="h-3 w-3" />
            {points} pontos
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{description}</p>
        <div className="flex flex-col gap-1 text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Calendar className="h-3 w-3" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>
              {time} ({duration})
            </span>
          </div>
        </div>
        <Badge className="mt-3" variant="outline">
          {category}
        </Badge>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <Link href={`/dashboard/workshops/${encodeURIComponent(title.toLowerCase().replace(/\s+/g, "-"))}`}>
            Ver Detalhes
          </Link>
        </Button>
        <Button size="sm" className="bg-[#9A3B72] hover:bg-[#7A2D5A]">
          Inscrever-se
        </Button>
      </CardFooter>
    </Card>
  )
}
