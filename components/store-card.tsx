import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ExternalLink, MapPin, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface StoreCardProps {
  name: string
  category: string
  description: string
  discount: string
  imageUrl: string
  rating?: number
  location?: string
  featured?: boolean
  new?: boolean
}

export function StoreCard({
  name,
  category,
  description,
  discount,
  imageUrl,
  rating = 0,
  location = "",
  featured = false,
  new: isNew = false,
}: StoreCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-48">
        <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />
        <Badge className="absolute top-2 right-2 bg-[#9A3B72]">{discount}</Badge>
        {featured && <Badge className="absolute top-2 left-2 bg-[#F9B000] text-[#3A0F2D]">Destaque</Badge>}
        {isNew && <Badge className="absolute top-2 left-2 bg-green-600">Novo</Badge>}
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
            <CardTitle className="text-lg">{name}</CardTitle>
            <CardDescription>{category}</CardDescription>
          </div>
          {rating > 0 && (
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-[#F9B000] text-[#F9B000]" />
              <span className="text-sm font-medium">{rating.toFixed(1)}</span>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        {location && (
          <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
            <MapPin className="h-3 w-3" />
            <span>{location}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <Link href={`/dashboard/stores/${encodeURIComponent(name.toLowerCase().replace(/\s+/g, "-"))}`}>
            Ver Detalhes
          </Link>
        </Button>
        <Button size="sm" className="gap-1 bg-[#9A3B72] hover:bg-[#7A2D5A]">
          <ExternalLink className="h-4 w-4" />
          Visitar
        </Button>
      </CardFooter>
    </Card>
  )
}
