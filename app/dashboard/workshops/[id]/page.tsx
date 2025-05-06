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
  Users,
  Award,
  BookOpen,
  CheckCircle,
  BarChart,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function WorkshopDetailPage({ params }: { params: { id: string } }) {
  // Mock data for workshop details
  const workshop = {
    id: params.id,
    title: "Tendências em Decoração 2025",
    instructor: "Ana Oliveira",
    instructorTitle: "Arquiteta e Designer de Interiores",
    description:
      "Descubra as últimas tendências em decoração para o próximo ano. Neste workshop, você aprenderá sobre as cores, materiais, estilos e técnicas que estarão em alta em 2025. Ideal para profissionais de arquitetura, design de interiores e decoração que desejam se manter atualizados com as tendências do mercado.",
    longDescription:
      "Este workshop abrangente oferece uma visão detalhada das tendências emergentes em decoração de interiores para 2025. Conduzido pela renomada arquiteta e designer Ana Oliveira, o evento combina apresentações teóricas, estudos de caso e exercícios práticos para proporcionar uma experiência de aprendizado completa.\n\nDurante as 2 horas de workshop, os participantes explorarão as principais tendências de cores, materiais sustentáveis, estilos de mobiliário, iluminação inovadora e técnicas de decoração que definirão o próximo ano. Ana compartilhará insights valiosos baseados em pesquisas de mercado global e sua vasta experiência no setor.\n\nO workshop é estruturado para permitir interação e networking entre os participantes, com oportunidades para perguntas e discussões. Ao final, todos receberão um certificado digital de participação e material complementar exclusivo.",
    date: "15 de Maio, 2025",
    time: "19:00 - 21:00",
    duration: "2 horas",
    location: "Centro de Eventos UP, São Paulo, SP",
    category: "Decoração",
    level: "Iniciante",
    points: 150,
    rating: 4.8,
    reviews: 24,
    participants: 45,
    maxParticipants: 50,
    price: "Gratuito para membros",
    imageUrl: "/placeholder.svg?height=300&width=800",
    instructorImageUrl: "/placeholder.svg?height=150&width=150",
    featured: true,
    gallery: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
    topics: [
      "Paleta de cores para 2025",
      "Materiais sustentáveis em alta",
      "Estilos de mobiliário contemporâneo",
      "Técnicas de iluminação inovadoras",
      "Integração de tecnologia na decoração",
      "Decoração biofílica e conexão com a natureza",
    ],
    requirements: [
      "Conhecimentos básicos de design de interiores",
      "Interesse em tendências de decoração",
      "Notebook ou tablet para anotações (opcional)",
    ],
    benefits: [
      "Certificado digital de participação",
      "Material complementar exclusivo",
      "Networking com profissionais da área",
      "150 pontos para seu perfil UP",
    ],
    reviews: [
      {
        id: 1,
        name: "Carlos Santos",
        profession: "Designer de Interiores",
        rating: 5,
        date: "15/04/2025",
        comment: "Workshop excelente! Conteúdo atual e relevante para o mercado.",
        imageUrl: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 2,
        name: "Mariana Costa",
        profession: "Decoradora",
        rating: 5,
        date: "02/04/2025",
        comment: "A Ana é uma excelente instrutora. Recomendo fortemente este workshop.",
        imageUrl: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 3,
        name: "Pedro Mendes",
        profession: "Arquiteto",
        rating: 4,
        date: "28/03/2025",
        comment: "Conteúdo muito bom, apenas achei que poderia ter mais exemplos práticos.",
        imageUrl: "/placeholder.svg?height=50&width=50",
      },
    ],
    relatedWorkshops: [
      {
        id: 1,
        title: "Iluminação para Ambientes Residenciais",
        instructor: "Carlos Santos",
        date: "22 de Maio, 2025",
        category: "Iluminação",
        imageUrl: "/placeholder.svg?height=100&width=150",
      },
      {
        id: 2,
        title: "Design de Interiores para Espaços Pequenos",
        instructor: "Mariana Costa",
        date: "29 de Maio, 2025",
        category: "Design de Interiores",
        imageUrl: "/placeholder.svg?height=100&width=150",
      },
      {
        id: 3,
        title: "Sustentabilidade na Decoração",
        instructor: "Pedro Mendes",
        date: "5 de Junho, 2025",
        category: "Sustentabilidade",
        imageUrl: "/placeholder.svg?height=100&width=150",
      },
    ],
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/dashboard/workshops">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Voltar
          </Link>
        </Button>
      </div>

      {/* Workshop Header */}
      <div className="relative h-64 w-full overflow-hidden rounded-xl">
        <Image src={workshop.imageUrl || "/placeholder.svg"} alt={workshop.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Badge className="bg-[#9A3B72]">{workshop.category}</Badge>
              <Badge className="bg-[#9A3B72]">{workshop.level}</Badge>
              {workshop.featured && <Badge className="bg-[#F9B000] text-[#3A0F2D]">Destaque</Badge>}
            </div>
            <h1 className="text-2xl font-bold text-white mt-2">{workshop.title}</h1>
            <div className="flex items-center gap-4 mt-1">
              <div className="flex items-center gap-1 text-white">
                <Star className="h-4 w-4 fill-[#F9B000] text-[#F9B000]" />
                <span>{workshop.rating}</span>
                <span className="text-sm">({workshop.reviews} avaliações)</span>
              </div>
              <div className="flex items-center gap-1 text-white">
                <Users className="h-4 w-4" />
                <span>
                  {workshop.participants}/{workshop.maxParticipants} participantes
                </span>
              </div>
              <div className="flex items-center gap-1 text-white">
                <Award className="h-4 w-4" />
                <span>{workshop.points} pontos</span>
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

      {/* Workshop Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Sobre o Workshop</h2>
                  <p className="text-muted-foreground">{workshop.longDescription}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  <div className="flex items-start gap-2">
                    <Calendar className="h-5 w-5 text-[#9A3B72] mt-0.5" />
                    <div>
                      <h3 className="font-medium">Data</h3>
                      <p className="text-sm text-muted-foreground">{workshop.date}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-[#9A3B72] mt-0.5" />
                    <div>
                      <h3 className="font-medium">Horário</h3>
                      <p className="text-sm text-muted-foreground">
                        {workshop.time} ({workshop.duration})
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-[#9A3B72] mt-0.5" />
                    <div>
                      <h3 className="font-medium">Local</h3>
                      <p className="text-sm text-muted-foreground">{workshop.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <BarChart className="h-5 w-5 text-[#9A3B72] mt-0.5" />
                    <div>
                      <h3 className="font-medium">Nível</h3>
                      <p className="text-sm text-muted-foreground">{workshop.level}</p>
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
                      src={workshop.instructorImageUrl || "/placeholder.svg"}
                      alt={workshop.instructor}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{workshop.instructor}</h3>
                    <p className="text-sm text-muted-foreground">{workshop.instructorTitle}</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Preço</h3>
                  <p className="text-lg font-semibold text-[#9A3B72]">{workshop.price}</p>
                </div>
                <Button className="w-full bg-[#9A3B72] hover:bg-[#7A2D5A]">Inscrever-se</Button>
                <p className="text-xs text-center text-muted-foreground">
                  Restam apenas {workshop.maxParticipants - workshop.participants} vagas!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="content" className="w-full">
        <TabsList className="bg-transparent p-0 h-10 border-b">
          <TabsTrigger
            value="content"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-[#9A3B72] data-[state=active]:bg-transparent"
          >
            <BookOpen className="h-4 w-4 mr-2" />
            Conteúdo
          </TabsTrigger>
          <TabsTrigger
            value="requirements"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-[#9A3B72] data-[state=active]:bg-transparent"
          >
            <CheckCircle className="h-4 w-4 mr-2" />
            Requisitos
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-[#9A3B72] data-[state=active]:bg-transparent"
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Avaliações
          </TabsTrigger>
          <TabsTrigger
            value="related"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-[#9A3B72] data-[state=active]:bg-transparent"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Relacionados
          </TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Tópicos Abordados</h3>
                <ul className="space-y-2">
                  {workshop.topics.map((topic, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#9A3B72]" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Benefícios</h3>
                <ul className="space-y-2">
                  {workshop.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-[#9A3B72]" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="requirements" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Pré-requisitos</h3>
              <ul className="space-y-2">
                {workshop.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#9A3B72]" />
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Avaliações</h2>
            <Button>Avaliar</Button>
          </div>
          <div className="space-y-4">
            {workshop.reviews.map((review) => (
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

        <TabsContent value="related" className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Workshops Relacionados</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {workshop.relatedWorkshops.map((related) => (
              <Card key={related.id} className="overflow-hidden">
                <div className="flex">
                  <div className="relative h-24 w-24">
                    <Image
                      src={related.imageUrl || "/placeholder.svg"}
                      alt={related.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-3 flex-1">
                    <h3 className="font-medium text-sm line-clamp-2">{related.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">por {related.instructor}</p>
                    <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{related.date}</span>
                    </div>
                    <Badge className="mt-2 text-xs" variant="outline">
                      {related.category}
                    </Badge>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
