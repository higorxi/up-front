import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, ArrowUpDown } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProfessionalInterestCard } from "@/components/professional-interest-card"

export default function ProfessionalsPage() {
  // Mock data for professionals
  const professionals = [
    {
      id: 1,
      name: "Ana Oliveira",
      profession: "Arquiteta",
      level: "Ouro",
      lastVisit: "Hoje",
      views: 5,
      imageUrl: "/placeholder.svg?height=100&width=100",
      verified: true,
    },
    {
      id: 2,
      name: "Carlos Santos",
      profession: "Designer de Interiores",
      level: "Prata",
      lastVisit: "Ontem",
      views: 3,
      imageUrl: "/placeholder.svg?height=100&width=100",
      verified: true,
    },
    {
      id: 3,
      name: "Mariana Costa",
      profession: "Decoradora",
      level: "Ouro",
      lastVisit: "3 dias atrás",
      views: 7,
      imageUrl: "/placeholder.svg?height=100&width=100",
      verified: true,
    },
    {
      id: 4,
      name: "Pedro Mendes",
      profession: "Arquiteto",
      level: "Prata",
      lastVisit: "1 semana atrás",
      views: 2,
      imageUrl: "/placeholder.svg?height=100&width=100",
      verified: true,
    },
    {
      id: 5,
      name: "Juliana Alves",
      profession: "Designer de Interiores",
      level: "Ouro",
      lastVisit: "2 dias atrás",
      views: 4,
      imageUrl: "/placeholder.svg?height=100&width=100",
      verified: true,
    },
    {
      id: 6,
      name: "Roberto Silva",
      profession: "Fotógrafo de Interiores",
      level: "Prata",
      lastVisit: "5 dias atrás",
      views: 1,
      imageUrl: "/placeholder.svg?height=100&width=100",
      verified: true,
    },
  ]

  // Professions for filter
  const professions = ["Todas", "Arquiteto", "Designer de Interiores", "Decorador", "Fotógrafo", "Paisagista"]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Profissionais Interessados</h1>
        <p className="text-muted-foreground">
          Veja quais profissionais estão interessados em sua loja e produtos. Entre em contato para parcerias.
        </p>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Buscar profissionais..." className="w-full pl-8" />
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Select>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Profissão" />
                  </SelectTrigger>
                  <SelectContent>
                    {professions.map((profession) => (
                      <SelectItem key={profession} value={profession.toLowerCase()}>
                        {profession}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Nível" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="gold">Ouro</SelectItem>
                    <SelectItem value="silver">Prata</SelectItem>
                    <SelectItem value="bronze">Bronze</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button className="bg-[#1F3D4A] hover:bg-[#2A4D5A]">Buscar</Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-white">
                Todas as profissões ×
              </Badge>
              <Badge variant="outline" className="bg-white">
                Todos os níveis ×
              </Badge>
              <Button variant="link" className="h-auto p-0 text-xs text-[#1F3D4A]">
                Limpar filtros
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between">
        <Tabs defaultValue="all" className="w-auto">
          <TabsList className="bg-transparent p-0 h-9">
            <TabsTrigger
              value="all"
              className="rounded-md data-[state=active]:bg-[#1F3D4A] data-[state=active]:text-white"
            >
              Todos
            </TabsTrigger>
            <TabsTrigger
              value="recent"
              className="rounded-md data-[state=active]:bg-[#1F3D4A] data-[state=active]:text-white"
            >
              Recentes
            </TabsTrigger>
            <TabsTrigger
              value="frequent"
              className="rounded-md data-[state=active]:bg-[#1F3D4A] data-[state=active]:text-white"
            >
              Frequentes
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Ordenar por:</span>
          <Select defaultValue="recent">
            <SelectTrigger className="w-[180px] h-9">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Visita recente</SelectItem>
              <SelectItem value="views">Mais visualizações</SelectItem>
              <SelectItem value="level">Nível</SelectItem>
              <SelectItem value="name">Nome (A-Z)</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" className="h-9 w-9">
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {professionals.map((professional) => (
          <ProfessionalInterestCard
            key={professional.id}
            name={professional.name}
            profession={professional.profession}
            level={professional.level}
            lastVisit={professional.lastVisit}
            views={professional.views}
            imageUrl={professional.imageUrl}
            verified={professional.verified}
          />
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <Button variant="outline" className="bg-white">
          Carregar mais
        </Button>
      </div>
    </div>
  )
}
