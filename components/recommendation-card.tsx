import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, ExternalLink, ThumbsUp } from "lucide-react"
import Image from "next/image"

interface RecommendationCardProps {
  title: string
  store: string
  description: string
  imageUrl: string
}

export function RecommendationCard({ title, store, description, imageUrl }: RecommendationCardProps) {
  return (
    <Card>
      <div className="flex flex-col md:flex-row">
        <div className="relative h-48 md:h-auto md:w-1/3">
          <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <div className="flex flex-col flex-1">
          <CardHeader className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-lg">{title}</CardTitle>
                <CardDescription>Loja: {store}</CardDescription>
              </div>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Heart className="h-4 w-4" />
                <span className="sr-only">Adicionar aos favoritos</span>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0 flex-1">
            <p className="text-sm text-muted-foreground">{description}</p>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex justify-between">
            <Button variant="outline" size="sm" className="gap-1">
              <ThumbsUp className="h-4 w-4" />
              Útil
            </Button>
            <Button size="sm" className="gap-1">
              <ExternalLink className="h-4 w-4" />
              Ver na Loja
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  )
}
