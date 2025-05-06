import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart } from "lucide-react"
import Image from "next/image"

interface ProductCardProps {
  name: string
  description: string
  price: string
  discountPrice: string
  imageUrl: string
  featured?: boolean
}

export function ProductCard({ name, description, price, discountPrice, imageUrl, featured = false }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-48">
        <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />
        {featured && <Badge className="absolute top-2 left-2 bg-[#F9B000] text-[#3A0F2D]">Destaque</Badge>}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white/90 rounded-full"
        >
          <Heart className="h-4 w-4" />
          <span className="sr-only">Adicionar aos favoritos</span>
        </Button>
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-base">{name}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{description}</p>
        <div className="flex items-center gap-2">
          <span className="text-sm line-through text-muted-foreground">{price}</span>
          <span className="text-lg font-semibold text-[#9A3B72]">{discountPrice}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="outline" size="sm">
          Ver Detalhes
        </Button>
        <Button size="sm" className="gap-1 bg-[#9A3B72] hover:bg-[#7A2D5A]">
          <ShoppingCart className="h-4 w-4" />
          Comprar
        </Button>
      </CardFooter>
    </Card>
  )
}
