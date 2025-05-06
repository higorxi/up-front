import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ReviewCard } from "@/components/review-card"
import {
  ArrowLeft,
  Heart,
  Share2,
  MapPin,
  Calendar,
  Clock,
  Star,
  MessageSquare,
  Award,
  Building,
  CheckCircle,
  Ticket,
  Info,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function EventDetailPage({ params }: { params: { id: string } }) {
  // Mock data for event details
  const event = {
    id: params.id,
    title: "Feira de Decoração 2025",
    organizer: "UP Clube de Negócios",
    description:
      "A maior feira de decoração do ano com descontos exclusivos para membros. Venha conhecer as últimas tendências em decoração, móveis, iluminação e muito mais.",
    longDescription:
      "A Feira de Decoração 2025 é o evento mais aguardado do ano para profissionais e entusiastas de design de interiores, arquitetura e decoração. Durante três dias, o Centro de Convenções de São Paulo se transformará em um hub de inovação, tendências e networking para o setor.\n\nCom mais de 100 expositores nacionais e internacionais, a feira apresentará as últimas novidades em mobiliário, iluminação, revestimentos, tecidos, objetos decorativos e soluções tecnológicas para ambientes. Os visitantes terão a oportunidade de conhecer em primeira mão lançamentos exclusivos e participar de demonstrações práticas.\n\nAlém da exposição, o evento contará com uma programação rica de palestras, workshops e mesas redondas com renomados profissionais do mercado, abordando temas como sustentabilidade no design, tendências para 2025, tecnologia aplicada aos ambientes e muito mais.\n\nMembros do Clube de Negócios UP têm acesso exclusivo a descontos especiais em produtos e serviços dos expositores, além de área VIP com serviços diferenciados.",
    date: "10-12 de Junho, 2025",
    time: "10:00 - 20:00",
    location: "Centro de Convenções, São Paulo, SP",
    address: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100",
    category: "Feira",
    points: 300,
    rating: 4.7,
    reviews: 35,
    participants: 120,
    maxParticipants: 500,
    price: "R$ 50,00 (Gratuito para membros Ouro e Prata)",
    imageUrl: "/placeholder.svg?height=300&width=800",
    organizerImageUrl: "/placeholder.svg?height=150&width=150",
    featured: true,
    gallery: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
    highlights: [
      "Mais de 100 expositores nacionais e internacionais",
      "Palestras e workshops com profissionais renomados",
      "Lançamentos exclusivos de produtos",
      "Área de networking para profissionais",
      "Descontos especiais para membros UP",
      "Área VIP com serviços diferenciados",
    ],
    schedule: [
      {
        day: "10 de Junho",
        items: [
          { time: "10:00", title: "Abertura da Feira" },
          { time: "11:00", title: "Palestra: Tendências em Decoração 2025" },
          { time: "14:00", title: "Workshop: Iluminação Residencial" },
          { time: "16:00", title: "Mesa Redonda: Sustentabilidade no Design" },
          { time: "19:00", title: "Coquetel de Networking (apenas convidados)" },
        ],
      },
      {
        day: "11 de Junho",
        items: [
          { time: "10:00", title: "Abertura da Feira" },
          { time: "11:00", title: "Palestra: Tecnologia e Decoração" },
          { time: "14:00", title: "Workshop: Decoração de Pequenos Espaços" },
          { time: "16:00", title: "Apresentação: Novos Materiais Sustentáveis" },
          { time: "18:00", title: "Lançamento de Produtos (área VIP)" },
        ],
      },
      {
        day: "12 de Junho",
        items: [
          { time: "10:00", title: "Abertura da Feira" },
          { time: "11:00", title: "Palestra: O Futuro do Design de Interiores" },
          { time: "14:00", title: "Workshop: Fotografia de Ambientes" },
          { time: "16:00", title: "Premiação: Melhores Stands e Produtos" },
          { time: "19:00", title: "Encerramento da Feira" },
        ],
      },
    ],
    exhibitors: [
      {
        name: "Móveis Elegance",
        category: "Móveis",
        description: "Móveis de alta qualidade para sua casa ou escritório.",
        imageUrl: "/placeholder.svg?height=50&width=50",
      },
      {
        name: "Iluminação Moderna",
        category: "Iluminação",
        description: "Soluções de iluminação para todos os ambientes.",
        imageUrl: "/placeholder.svg?height=50&width=50",
      },
      {
        name: "Decoração & Arte",
        category: "Decoração",
        description: "Objetos de decoração e arte para personalizar seu espaço.",
        imageUrl: "/placeholder.svg?height=50&width=50",
      },
      {
        name: "Pisos Premium",
        category: "Revestimentos",
        description: "Pisos e revestimentos de alta qualidade.",
        imageUrl: "/placeholder.svg?height=50&width=50",
      },
      {
        name: "Tintas Colorama",
        category: "Tintas",
        description: "Tintas de alta qualidade para todos os ambientes.",
        imageUrl: "/placeholder.svg?height=50&width=50",
      },
      {
        name: "Tecidos & Cortinas",
        category: "Tecidos",
        description: "Tecidos e cortinas para todos os estilos.",
        imageUrl: "/placeholder.svg?height=50&width=50",
      },
    ],
    reviews: [
      {
        id: 1,
        name: "Carlos Santos",
        profession: "Arquiteto",
        rating: 5,
        date: "15/06/2024",
        comment: "Evento excelente! Muitas novidades e contatos importantes para meus projetos.",
        imageUrl: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 2,
        name: "Mariana Costa",
        profession: "Designer de Interiores",
        rating: 4,
        date: "14/06/2024",
        comment: "Ótima organização e expositores de qualidade. Recomendo fortemente.",
        imageUrl: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 3,
        name: "Pedro Mendes",
        profession: "Decorador",
        rating: 5,
        date: "13/06/2024",
        comment: "As palestras foram excelentes, com conteúdo relevante e atual.",
        imageUrl: "/placeholder.svg?height=50&width=50",
      },
    ],
    relatedEvents: [
      {
        id: 1,
        title: "Palestra: Tendências em Arquitetura",
        organizer: "Associação de Arquitetos",
        date: "25 de Maio, 2025",
        category: "Palestra",
        imageUrl: "/placeholder.svg?height=100&width=150",
      },
      {
        id: 2,
        title: "Encontro de Profissionais de Design",
        organizer: "UP Clube de Negócios",
        date: "5 de Junho, 2025",
        category: "Networking",
        imageUrl: "/placeholder.svg?height=100&width=150",
      },
      {
        id: 3,
        title: "Lançamento: Nova Coleção de Móveis",
        organizer: "Móveis Elegance",
        date: "18 de Maio, 2025",
        category: "Lançamento",
        imageUrl: "/placeholder.svg?height=100&width=150",
      },
    ],
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/dashboard/events">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Voltar
          </Link>
        </Button>
      </div>

      {/* Event Header */}
      <div className="relative h-64 w-full overflow-hidden rounded-xl">
        <Image src={event.imageUrl || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Badge className="bg-[#9A3B72]">{event.category}</Badge>
              {event.featured && <Badge className="bg-[#F9B000] text-[#3A0F2D]">Destaque</Badge>}
            </div>
            <h1 className="text-2xl font-bold text-white mt-2">{event.title}</h1>
            <div className="flex items-center gap-4 mt-1">
              <div className="flex items-center gap-1 text-white">
                <Building className="h-4 w-4" />
                <span>{event.organizer}</span>
              </div>
              <div className="flex items-center gap-1 text-white">
                <Star className="h-4 w-4 fill-[#F9B000] text-[#F9B000]" />
                <span>{event.rating}</span>
                <span className="text-sm">({event.reviews} avaliações)</span>
              </div>
              <div className="flex items-center gap-1 text-white">
                <Award className="h-4 w-4" />
                <span>{event.points} pontos</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 hover:text-white"
            >
              <Heart className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 hover:text-white"
            >
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Event Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Sobre o Evento</h2>
                  <p className="text-muted-foreground whitespace-pre-line">{event.longDescription}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  <div className="flex items-start gap-2">
                    <Calendar className="h-5 w-5 text-[#9A3B72] mt-0.5" />
                    <div>
                      <h3 className="font-medium">Data</h3>
                      <p className="text-sm text-muted-foreground">{event.date}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-[#9A3B72] mt-0.5" />
                    <div>
                      <h3 className="font-medium">Horário</h3>
                      <p className="text-sm text-muted-foreground">{event.time}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-[#9A3B72] mt-0.5" />
                    <div>
                      <h3 className="font-medium">Local</h3>
                      <p className="text-sm text-muted-foreground">{event.location}</p>
                      <p className="text-xs text-muted-foreground">{event.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Ticket className="h-5 w-5 text-[#9A3B72] mt-0.5" />
                    <div>
                      <h3 className="font-medium">Ingresso</h3>
                      <p className="text-sm text-muted-foreground">{event.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <Image
                      src={event.organizerImageUrl || "/placeholder.svg"}
                      alt={event.organizer}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{event.organizer}</h3>
                    <p className="text-sm text-muted-foreground">Organizador</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">Participantes</h3>
                    <span className="text-sm text-muted-foreground">
                      {event.participants}/{event.maxParticipants}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#9A3B72]"
                      style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <Button className="w-full bg-[#9A3B72] hover:bg-[#7A2D5A]">Participar</Button>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Info className="h-4 w-4" />
                  <span>Membros Ouro e Prata têm acesso à área VIP</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="highlights" className="w-full">
        <TabsList className="bg-transparent p-0 h-10 border-b">
          <TabsTrigger
            value="highlights"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-[#9A3B72] data-[state=active]:bg-transparent"
          >
            <Info className="h-4 w-4 mr-2" />
            Destaques
          </TabsTrigger>
          <TabsTrigger
            value="schedule"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-[#9A3B72] data-[state=active]:bg-transparent"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Programação
          </TabsTrigger>
          <TabsTrigger
            value="exhibitors"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-[#9A3B72] data-[state=active]:bg-transparent"
          >
            <Building className="h-4 w-4 mr-2" />
            Expositores
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-[#9A3B72] data-[state=active]:bg-transparent"
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Avaliações
          </TabsTrigger>
        </TabsList>

        <TabsContent value="highlights" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Destaques do Evento</h3>
              <ul className="space-y-2">
                {event.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#9A3B72]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {event.gallery.map((image, index) => (
              <div key={index} className="relative aspect-video rounded-md overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Galeria ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="schedule" className="mt-6">
          <div className="space-y-6">
            {event.schedule.map((day, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">{day.day}</h3>
                  <div className="space-y-3">
                    {day.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <div className="w-16 text-sm font-medium text-[#9A3B72]">{item.time}</div>
                        <div className="flex-1">
                          <p className="font-medium">{item.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="exhibitors" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {event.exhibitors.map((exhibitor, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={exhibitor.imageUrl || "/placeholder.svg"}
                        alt={exhibitor.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{exhibitor.name}</h3>
                      <Badge variant="outline" className="mt-1">
                        {exhibitor.category}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">{exhibitor.description}</p>
                  <Button variant="link" className="h-auto p-0 text-xs text-[#9A3B72] mt-2">
                    Ver detalhes
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Avaliações</h2>
            <Button>Avaliar</Button>
          </div>
          <div className="space-y-4">
            {event.reviews.map((review) => (
              <ReviewCard
                key={review.id}
                name={review.name}
                profession={review.profession}
                rating={review.rating}
                date={review.date}
                comment={review.comment}
                imageUrl={review.imageUrl}
              />
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <Button variant="outline">Ver todas as avaliações</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
