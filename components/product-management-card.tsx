import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, Star, Eye, BarChart } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import Image from "next/image"

interface ProductManagementCardProps {
  name: string
  description: string
  price: string
  discountPrice: string
  category: string
  stock: number
  imageUrl: string
  featured: boolean
  status: "active" | "inactive"
}

export function ProductManagementCard({
  name,
  description,
  price,
  discountPrice,
  category,
  stock,
  imageUrl,
  featured,
  status,
}: ProductManagementCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="flex flex-col md:flex-row">
        <div className="relative h-48 md:h-auto md:w-1/3">
          <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />
          {featured && <Badge className="absolute top-2 left-2 bg-[#F9B000] text-[#1F3D4A]">Destaque</Badge>}
          {status === "inactive" && (
            <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
              <Badge className="bg-gray-800 text-white">Inativo</Badge>
            </div>
          )}
        </div>
        <div className="flex flex-col flex-1">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium">{name}</h3>
                <Badge variant="outline" className="mt-1">
                  {category}
                </Badge>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{description}</p>

            <div className="mt-3 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm line-through text-muted-foreground">{price}</span>
                  <span className="text-base font-semibold text-[#1F3D4A]">{discountPrice}</span>
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Estoque: <span className={stock < 10 ? "text-red-500 font-medium" : ""}>{stock} unidades</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm">Ativo</span>
                  <Switch checked={status === "active"} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Destaque</span>
                  <Switch checked={featured} />
                </div>
              </div>
            </div>

            <div className="mt-3 flex justify-between">
              <Button variant="outline" size="sm" className="gap-1">
                <Eye className="h-4 w-4" />
                Visualizar
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <BarChart className="h-4 w-4" />
                Estatísticas
              </Button>
              <Button className="bg-[#1F3D4A] hover:bg-[#2A4D5A]" size="sm">
                <Star className="h-4 w-4 mr-1" />
                Destacar
              </Button>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  )
}
