import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, ArrowUpDown } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EventCard } from "@/components/event-card"

export default function EventsPage() {
  // Mock data for events
  const events = [
    {
      id: 1,
      title: "Feira de Decoração 2025",
      organizer: "UP Clube de Negócios",
      description: "A maior feira de decoração do ano com descontos exclusivos para membros.",
      date: "10-12 de Junho, 2025",
      location: "Centro de Convenções, São Paulo",
      category: "Feira",
      points: 300,
      imageUrl: "/placeholder.svg?height=100&width=200",
      featured: true,
      upcoming: true,
    },
    {
      id: 2,
      title: "Palestra: Tendências em Arquitetura",
      organizer: "Associação de Arquitetos",
      description: "Palestra com renomados arquitetos sobre as tendências para os próximos anos.",
      date: "25 de Maio, 2025",
      location: "Hotel Premium, Rio de Janeiro",
      category: "Palestra",
      points: 150,
      imageUrl: "/placeholder.svg?height=100&width=200",
      featured: false,
      upcoming: true,
    },
    {
      id: 3,
      title: "Encontro de Profissionais de Design",
      organizer: "UP Clube de Negócios",
      description: "Networking entre profissionais de design e decoração.",
      date: "5 de Junho, 2025",
      location: "Espaço Cultural, Belo Horizonte",
      category: "Networking",
      points: 200,
      imageUrl: "/placeholder.svg?height=100&width=200",
      featured: true,
      upcoming: true,
    },
    {
      id: 4,
      title: "Lançamento: Nova Coleção de Móveis",
      organizer: "Móveis Elegance",
      description: "Evento exclusivo de lançamento da nova coleção de móveis.",
      date: "18 de Maio, 2025",
      location: "Showroom Móveis Elegance, São Paulo",
      category: "Lançamento",
      points: 100,
      imageUrl: "/placeholder.svg?height=100&width=200",
      featured: false,
      upcoming: true,
    },
    {
      id: 5,
      title: "Workshop de Fotografia de Interiores",
      organizer: "Estúdio Fotográfico Premium",
      description: "Workshop prático sobre fotografia de interiores para profissionais.",
      date: "1 de Junho, 2025",
      location: "Estúdio Fotográfico Premium, Curitiba",
      category: "Workshop",
      points: 250,
      imageUrl: "/placeholder.svg?height=100&width=200",
      featured: false,
      upcoming: true,
    },
    {
      id: 6,
      title: "Exposição: Design Brasileiro",
      organizer: "Museu de Arte Moderna",
      description: "Exposição sobre a história e evolução do design brasileiro.",
      date: "15-30 de Junho, 2025",
      location: "Museu de Arte Moderna, São Paulo",
      category: "Exposição",
      points: 180,
      imageUrl: "/placeholder.svg?height=100&width=200",
      featured: true,
      upcoming: true,
    },
  ]

  // Categories for filter
  const categories = ["Todas", "Feira", "Palestra", "Networking", "Lançamento", "Workshop", "Exposição"]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Eventos</h1>
        <p className="text-muted-foreground">Participe de eventos exclusivos e ganhe pontos para subir de nível.</p>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Buscar eventos..." className="w-full pl-8" />
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
                    <SelectValue placeholder="Localização" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas</SelectItem>
                    <SelectItem value="sp">São Paulo</SelectItem>
                    <SelectItem value="rj">Rio de Janeiro</SelectItem>
                    <SelectItem value="mg">Belo Horizonte</SelectItem>
                    <SelectItem value="pr">Curitiba</SelectItem>
                    <SelectItem value="df">Brasília</SelectItem>
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
                Todas as localizações ×
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
              <SelectItem value="location">Localização</SelectItem>
              <SelectItem value="name">Nome (A-Z)</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" className="h-9 w-9">
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            organizer={event.organizer}
            description={event.description}
            date={event.date}
            location={event.location}
            category={event.category}
            points={event.points}
            imageUrl={event.imageUrl}
            featured={event.featured}
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
