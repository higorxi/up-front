"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Star, Tag, Lock } from "lucide-react"

interface BenefitCardProps {
  title: string
  provider: string
  description: string
  validUntil: string
  category: string
  pointsCost: number
  discount: string
  imageUrl: string
  featured: boolean
  userPoints: number
  onViewDetails: () => void
}

export function BenefitCard({
  title,
  provider,
  description,
  validUntil,
  category,
  pointsCost,
  discount,
  imageUrl,
  featured,
  userPoints,
  onViewDetails,
}: BenefitCardProps) {
  const hasEnoughPoints = userPoints >= pointsCost

  return (
    <Card
      className={`overflow-hidden transition-all duration-200 ${!hasEnoughPoints ? "opacity-80" : "hover:shadow-md"}`}
    >
      <div className="relative">
        <img src={imageUrl || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
        {featured && (
          <Badge className="absolute top-2 right-2 bg-[#9A3B72]">
            <Star className="h-3 w-3 mr-1" /> Destaque
          </Badge>
        )}
        <Badge className="absolute top-2 left-2 bg-white text-black">
          <Tag className="h-3 w-3 mr-1" /> {discount}
        </Badge>
        {!hasEnoughPoints && (
          <div className="absolute inset-0 bg-gray-900/30 flex items-center justify-center">
            <Badge className="bg-gray-800 text-white px-3 py-1.5">
              <Lock className="h-3 w-3 mr-1" /> Pontos insuficientes
            </Badge>
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex flex-col gap-2">
          <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-sm text-muted-foreground">Oferecido por: {provider}</p>
          </div>
          <p className="text-sm line-clamp-2">{description}</p>
          <div className="flex items-center text-xs text-muted-foreground">
            <Calendar className="h-3 w-3 mr-1" />
            <span>Válido até: {validUntil}</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <Badge variant="outline">{category}</Badge>
            <span className={`font-medium ${hasEnoughPoints ? "text-[#9A3B72]" : "text-gray-500"}`}>
              {pointsCost} pontos
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="outline" className="w-full" onClick={onViewDetails}>
          Ver detalhes
        </Button>
      </CardFooter>
    </Card>
  )
}
