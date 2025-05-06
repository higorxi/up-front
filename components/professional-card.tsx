import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, MapPin, Star, CheckCircle, MessageSquare } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProfessionalCardProps {
  name: string
  profession: string
  description: string
  location: string
  rating: number
  projects: number
  level: string
  imageUrl: string
  featured?: boolean
  verified?: boolean
}

export function ProfessionalCard({
  name,
  profession,
  description,
  location,
  rating,
  projects,
  level,
  imageUrl,
  featured = false,
  verified = false,
}: ProfessionalCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="p-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-[#9A3B72]">
              <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />
            </div>
            {verified && <CheckCircle className="absolute -bottom-1 -right-1 h-5 w-5 text-green-600 fill-white" />}
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-lg flex items-center gap-1">
                  {name}
                  {featured && <Badge className="ml-1 bg-[#F9B000] text-[#3A0F2D]">Destaque</Badge>}
                </CardTitle>
                <CardDescription>{profession}</CardDescription>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Heart className="h-4 w-4" />
                <span className="sr-only">Adicionar aos favoritos</span>
              </Button>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-[#F9B000] text-[#F9B000]" />
                <span className="text-sm font-medium">{rating.toFixed(1)}</span>
              </div>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{projects} projetos</span>
              <span className="text-sm text-muted-foreground">•</span>
              <Badge variant="outline" className="bg-[#9A3B72]/10 text-[#9A3B72] border-[#9A3B72]/30">
                Nível {level}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{description}</p>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-3 w-3" />
          <span>{location}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <Link href={`/dashboard/professionals/${encodeURIComponent(name.toLowerCase().replace(/\s+/g, "-"))}`}>
            Ver Perfil
          </Link>
        </Button>
        <Button size="sm" className="gap-1 bg-[#9A3B72] hover:bg-[#7A2D5A]">
          <MessageSquare className="h-4 w-4" />
          Contatar
        </Button>
      </CardFooter>
    </Card>
  )
}
