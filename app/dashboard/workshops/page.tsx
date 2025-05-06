import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, ArrowUpDown } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { WorkshopCard } from "@/components/workshop-card"

export default function WorkshopsPage() {
  // Mock data for workshops
  const workshops = [
    {
      id: 1,
      title: "Tendências em Decoração 2025",
      instructor: "Ana Oliveira",
      description: "Descubra as últimas tendências em decoração para o próximo ano.",
      date: "15 de Maio, 2025",
      time: "19:00 - 21:00",
      duration: "2 horas",
      category: "Decoração",
      level: "Iniciante",
      points: 150,
      imageUrl: "/placeholder.svg?height=100&width=200",
      featured: true,
      upcoming: true,
    },
    {
      id: 2,
      title: "Iluminação para Ambientes Residenciais",
      instructor: "Carlos Santos",
      description: "Aprenda técnicas de iluminação para diferentes ambientes da casa.",
      date: "22 de Maio, 2025",
      time: "18:30 - 20:30",
      duration: "2 horas",
      category: "Iluminação",
      level: "Intermediário",
      points: 200,
      imageUrl: "/placeholder.svg?height=100&width=200",
      featured: false,
      upcoming: true,
    },
    {
      id: 3,
      title: "Design de Interiores para Espaços Pequenos",
      instructor: "Mariana Costa",
      description: "Soluções criativas para otimizar espaços pequenos com estilo.",
      date: "29 de Maio, 2025",
      time: "19:00 - 21:30",
      duration: "2.5 horas",
      category: "Design de Interiores",
      level: "Intermediário",
      points: 250,
      imageUrl: "/placeholder.svg?height=100&width=200",
      featured: true,
      upcoming: true,
    },
    {
      id: 4,
      title: "Sustentabilidade na Decoração",
      instructor: "Pedro Mendes",
      description: "Como incorporar práticas sustentáveis em seus projetos de decoração.",
      date: "5 de Junho, 2025",
      time: "18:00 - 20:00",
      duration: "2 horas",
      category: "Sustentabilidade",
      level: "Todos os níveis",
      points: 180,
      imageUrl: "/placeholder.svg?height=100&width=200",
      featured: false,
      upcoming: true,
    },
    {
      id: 5,
      title: "Cores e Psicologia nos Ambientes",
      instructor: "Juliana Alves",
      description: "Entenda como as cores influenciam o humor e a percepção dos espaços.",
      date: "12 de Junho, 2025",
      time: "19:00 - 21:00",
      duration: "2 horas",
      category: "Design de Interiores",
      level: "Iniciante",
      points: 150,
      imageUrl: "/placeholder.svg?height=100&width=200",
      featured: false,
      upcoming: true,
    },
    {
      id: 6,
      title: "Fotografia de Interiores",
      instructor: "Roberto Silva",
      description: "Técnicas para fotografar ambientes internos com qualidade profissional.",
      date: "19 de Junho, 2025",
      time: "18:30 - 21:30",
      duration: "3 horas",
      category: "Fotografia",
      level: "Intermediário",
      points: 300,
      imageUrl: "/placeholder.svg?height=100&width=200",
      featured: true,
      upcoming: true,
    },
  ]

  // Categories for filter
  const categories = ["Todas", "Decoração", "Iluminação", "Design de Interiores", "Sustentabilidade", "Fotografia"]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Workshops</h1>
        <p className="text-muted-foreground">Participe de workshops exclusivos e ganhe pontos para subir de nível.</p>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Buscar workshops..." className="w-full pl-8" />
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Select>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category.toLowerCase()}>
                        {category}
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
                    <SelectItem value="beginner">Iniciante</SelectItem>
                    <SelectItem value="intermediate">Intermediário</SelectItem>
                    <SelectItem value="advanced">Avançado</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button className="bg-[#9A3B72] hover:bg-[#7A2D5A]">Buscar</Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-white">
                Todas as categorias ×
              </Badge>
              <Badge variant="outline" className="bg-white">
                Todos os níveis ×
              </Badge>
              <Button variant="link" className="h-auto p-0 text-xs text-[#9A3B72]">
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
              className="rounded-md data-[state=active]:bg-[#9A3B72] data-[state=active]:text-white"
            >
              Todos
            </TabsTrigger>
            <TabsTrigger
              value="featured"
              className="rounded-md data-[state=active]:bg-[#9A3B72] data-[state=active]:text-white"
            >
              Destaque
            </TabsTrigger>
            <TabsTrigger
              value="upcoming"
              className="rounded-md data-[state=active]:bg-[#9A3B72] data-[state=active]:text-white"
            >
              Próximos
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Ordenar por:</span>
          <Select defaultValue="date">
            <SelectTrigger className="w-[180px] h-9">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date">Data (próximos)</SelectItem>
              <SelectItem value="points">Pontos (maior)</SelectItem>
              <SelectItem value="duration">Duração (menor)</SelectItem>
              <SelectItem value="name">Nome (A-Z)</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" className="h-9 w-9">
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {workshops.map((workshop) => (
          <WorkshopCard
            key={workshop.id}
            title={workshop.title}
            instructor={workshop.instructor}
            description={workshop.description}
            date={workshop.date}
            time={workshop.time}
            duration={workshop.duration}
            category={workshop.category}
            level={workshop.level}
            points={workshop.points}
            imageUrl={workshop.imageUrl}
            featured={workshop.featured}
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
