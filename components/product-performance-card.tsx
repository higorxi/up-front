import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowUp, ArrowDown, ArrowRight, Eye, MousePointer, MessageSquare, Edit, Trash2 } from "lucide-react"
import Image from "next/image"

interface ProductPerformanceCardProps {
  name: string
  views: number
  clicks: number
  inquiries: number
  trend: "up" | "down" | "stable"
  featured: boolean
  imageUrl: string
}

export function ProductPerformanceCard({
  name,
  views,
  clicks,
  inquiries,
  trend,
  featured,
  imageUrl,
}: ProductPerformanceCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="flex flex-col md:flex-row">
        <div className="relative h-48 md:h-auto md:w-1/3">
          <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />
          {featured && <Badge className="absolute top-2 left-2 bg-[#F9B000] text-[#1F3D4A]">Destaque</Badge>}
        </div>
        <div className="flex flex-col flex-1">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <h3 className="font-medium">{name}</h3>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2">
              <div className="flex flex-col items-center p-2 bg-[#EBF5F9] rounded-md">
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4 text-[#1F3D4A]" />
                  <span className="font-medium">{views}</span>
                </div>
                <span className="text-xs text-muted-foreground">Visualizações</span>
              </div>
              <div className="flex flex-col items-center p-2 bg-[#EBF5F9] rounded-md">
                <div className="flex items-center gap-1">
                  <MousePointer className="h-4 w-4 text-[#1F3D4A]" />
                  <span className="font-medium">{clicks}</span>
                </div>
                <span className="text-xs text-muted-foreground">Cliques</span>
              </div>
              <div className="flex flex-col items-center p-2 bg-[#EBF5F9] rounded-md">
                <div className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4 text-[#1F3D4A]" />
                  <span className="font-medium">{inquiries}</span>
                </div>
                <span className="text-xs text-muted-foreground">Consultas</span>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <Badge
                className={
                  trend === "up"
                    ? "bg-green-100 text-green-800"
                    : trend === "down"
                      ? "bg-red-100 text-red-800"
                      : "bg-orange-100 text-orange-800"
                }
              >
                {trend === "up" ? (
                  <ArrowUp className="mr-1 h-3 w-3" />
                ) : trend === "down" ? (
                  <ArrowDown className="mr-1 h-3 w-3" />
                ) : (
                  <ArrowRight className="mr-1 h-3 w-3" />
                )}
                {trend === "up" ? "Em alta" : trend === "down" ? "Em queda" : "Estável"}
              </Badge>
              <Button variant="outline" size="sm">
                Ver Detalhes
              </Button>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  )
}
