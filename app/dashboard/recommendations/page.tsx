import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RecommendationCard } from "@/components/recommendation-card"
import { Search, Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RecommendationsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Recomendações</h1>
        <p className="text-muted-foreground">Recomendações exclusivas de produtos e serviços para seus projetos.</p>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Buscar recomendações..." className="w-full pl-8" />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Select>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              <SelectItem value="furniture">Móveis</SelectItem>
              <SelectItem value="lighting">Iluminação</SelectItem>
              <SelectItem value="decoration">Decoração</SelectItem>
              <SelectItem value="flooring">Pisos</SelectItem>
              <SelectItem value="paint">Tintas</SelectItem>
              <SelectItem value="fabric">Tecidos</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button>Buscar</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <RecommendationCard
          title="Móveis para Sala de Estar"
          store="Móveis Elegance"
          description="Conjunto de sofá e mesa de centro em estilo contemporâneo."
          imageUrl="/placeholder.svg?height=100&width=200"
        />
        <RecommendationCard
          title="Iluminação para Home Office"
          store="Iluminação Moderna"
          description="Luminária de mesa com ajuste de intensidade ideal para trabalho."
          imageUrl="/placeholder.svg?height=100&width=200"
        />
        <RecommendationCard
          title="Quadros Decorativos"
          store="Decoração & Arte"
          description="Conjunto de quadros abstratos para sala de jantar."
          imageUrl="/placeholder.svg?height=100&width=200"
        />
        <RecommendationCard
          title="Porcelanato Acetinado"
          store="Pisos Premium"
          description="Porcelanato de alta resistência para áreas molhadas."
          imageUrl="/placeholder.svg?height=100&width=200"
        />
        <RecommendationCard
          title="Tinta Acrílica Premium"
          store="Tintas Colorama"
          description="Tinta lavável de alta cobertura para ambientes internos."
          imageUrl="/placeholder.svg?height=100&width=200"
        />
        <RecommendationCard
          title="Cortinas Blackout"
          store="Tecidos & Cortinas"
          description="Cortinas com tecido blackout para quartos e home theaters."
          imageUrl="/placeholder.svg?height=100&width=200"
        />
        <RecommendationCard
          title="Mesa de Jantar Extensível"
          store="Marcenaria Artesanal"
          description="Mesa de jantar extensível em madeira maciça para até 8 pessoas."
          imageUrl="/placeholder.svg?height=100&width=200"
        />
        <RecommendationCard
          title="Espelho Decorativo"
          store="Vidros & Espelhos"
          description="Espelho decorativo com moldura em metal para hall de entrada."
          imageUrl="/placeholder.svg?height=100&width=200"
        />
      </div>

      <div className="flex justify-center">
        <Button variant="outline">Carregar mais</Button>
      </div>
    </div>
  )
}
