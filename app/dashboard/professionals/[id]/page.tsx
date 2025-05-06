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
  Phone,
  Mail,
  Globe,
  Star,
  MessageSquare,
  Calendar,
  Briefcase,
  Award,
  CheckCircle,
  Clock,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProfessionalDetailPage({ params }: { params: { id: string } }) {
  // Mock data for professional details
  const professional = {
    id: params.id,
    name: "Ana Oliveira",
    profession: "Arquiteta",
    description:
      "Arquiteta especializada em projetos residenciais com foco em sustentabilidade. Com mais de 10 anos de experiência no mercado, desenvolvo projetos que combinam estética, funcionalidade e respeito ao meio ambiente. Formada pela Universidade de São Paulo, com especialização em Arquitetura Sustentável pela Universidade de Barcelona.",
    rating: 4.9,
    reviews: 45,
    projects: 38,
    level: "Ouro",
    location: "São Paulo, SP",
    phone: "(11) 98765-4321",
    email: "ana.oliveira@exemplo.com",
    website: "www.anaoliveiraarquitetura.com.br",
    imageUrl: "/placeholder.svg?height=300&width=800",
    profileUrl: "/placeholder.svg?height=150&width=150",
    verified: true,
    featured: true,
    gallery: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
    projects: [
      {
        id: 1,
        name: "Residência Vila Nova",
        description: "Projeto residencial com conceito aberto e integração com a natureza.",
        location: "São Paulo, SP",
        year: "2024",
        imageUrl: "/placeholder.svg?height=150&width=200",
      },
      {
        id: 2,
        name: "Apartamento Jardins",
        description: "Reforma completa de apartamento com foco em iluminação natural.",
        location: "São Paulo, SP",
        year: "2023",
        imageUrl: "/placeholder.svg?height=150&width=200",
      },
      {
        id: 3,
        name: "Casa de Praia",
        description: "Projeto de casa de praia com materiais sustentáveis e energia solar.",
        location: "Guarujá, SP",
        year: "2023",
        imageUrl: "/placeholder.svg?height=150&width=200",
      },
      {
        id: 4,
        name: "Escritório Corporativo",
        description: "Projeto de escritório com foco em bem-estar e produtividade.",
        location: "São Paulo, SP",
        year: "2022",
        imageUrl: "/placeholder.svg?height=150&width=200",
      },
    ],
    reviews: [
      {
        id: 1,
        name: "Carlos Santos",
        profession: "Cliente",
        rating: 5,
        date: "15/04/2025",
        comment: "Excelente profissional, atenciosa e criativa. Recomendo fortemente.",
        imageUrl: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 2,
        name: "Mariana Costa",
        profession: "Cliente",
        rating: 5,
        date: "02/04/2025",
        comment: "Projeto entregue no prazo e com qualidade excepcional. Superou minhas expectativas.",
        imageUrl: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 3,
        name: "Pedro Mendes",
        profession: "Cliente",
        rating: 4,
        date: "28/03/2025",
        comment: "Ótimo trabalho, apenas o prazo que foi um pouco estendido, mas valeu a pena esperar.",
        imageUrl: "/placeholder.svg?height=50&width=50",
      },
    ],
    events: [
      {
        id: 1,
        title: "Workshop de Arquitetura Sustentável",
        date: "15 de Maio, 2025",
        time: "18:00 - 21:00",
        description: "Workshop sobre práticas sustentáveis na arquitetura residencial.",
      },
      {
        id: 2,
        title: "Palestra: Tendências em Arquitetura 2025",
        date: "22 de Maio, 2025",
        time: "19:00 - 20:30",
        description: "Palestra sobre as principais tendências em arquitetura para o próximo ano.",
      },
    ],
    certifications: [
      "Arquiteta e Urbanista - CAU/SP",
      "Especialista em Arquitetura Sustentável",
      "Certificação LEED AP",
      "Membro do Conselho de Arquitetura e Urbanismo",
    ],
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/dashboard/professionals">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Voltar
          </Link>
        </Button>
      </div>

      {/* Professional Header */}
      <div className="relative h-64 w-full overflow-hidden rounded-xl">
        <Image
          src={professional.imageUrl || "/placeholder.svg"}
          alt={professional.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="h-20 w-20 rounded-full bg-white p-1">
                <Image
                  src={professional.profileUrl || "/placeholder.svg"}
                  alt={professional.name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
              </div>
              {professional.verified && (
                <CheckCircle className="absolute -bottom-1 -right-1 h-6 w-6 text-green-600 fill-white" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-white">{professional.name}</h1>
                {professional.featured && <Badge className="bg-[#F9B000] text-[#3A0F2D]">Destaque</Badge>}
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-[#9A3B72]">{professional.profession}</Badge>
                <div className="flex items-center gap-1 text-white">
                  <Star className="h-4 w-4 fill-[#F9B000] text-[#F9B000]" />
                  <span>{professional.rating}</span>
                  <span className="text-sm">({professional.reviews} avaliações)</span>
                </div>
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

      {/* Professional Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Sobre</h2>
                  <p className="text-muted-foreground">{professional.description}</p>
                </div>

                <div className="flex items-center gap-2 text-[#9A3B72] font-medium">
                  <Badge
                    variant="outline"
                    className="bg-[#9A3B72]/10 text-[#9A3B72] border-[#9A3B72]/30 flex items-center gap-1"
                  >
                    <Award className="h-4 w-4" />
                    Nível {professional.level}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="bg-[#9A3B72]/10 text-[#9A3B72] border-[#9A3B72]/30 flex items-center gap-1"
                  >
                    <Briefcase className="h-4 w-4" />
                    {professional.projects} projetos
                  </Badge>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-[#9A3B72] mt-0.5" />
                    <div>
                      <h3 className="font-medium">Localização</h3>
                      <p className="text-sm text-muted-foreground">{professional.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-5 w-5 text-[#9A3B72] mt-0.5" />
                    <div>
                      <h3 className="font-medium">Telefone</h3>
                      <p className="text-sm text-muted-foreground">{professional.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail className="h-5 w-5 text-[#9A3B72] mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-muted-foreground">{professional.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Globe className="h-5 w-5 text-[#9A3B72] mt-0.5" />
                    <div>
                      <h3 className="font-medium">Website</h3>
                      <p className="text-sm text-muted-foreground">{professional.website}</p>
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
              <h2 className="text-xl font-semibold mb-4">Certificações</h2>
              <ul className="space-y-2">
                {professional.certifications.map((certification, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#9A3B72]" />
                    <span>{certification}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button className="w-full bg-[#9A3B72] hover:bg-[#7A2D5A]">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="projects" className="w-full">
        <TabsList className="bg-transparent p-0 h-10 border-b">
          <TabsTrigger
            value="projects"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-[#9A3B72] data-[state=active]:bg-transparent"
          >
            <Briefcase className="h-4 w-4 mr-2" />
            Projetos
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-[#9A3B72] data-[state=active]:bg-transparent"
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Avaliações
          </TabsTrigger>
          <TabsTrigger
            value="events"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-[#9A3B72] data-[state=active]:bg-transparent"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Eventos
          </TabsTrigger>
          <TabsTrigger
            value="gallery"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-[#9A3B72] data-[state=active]:bg-transparent"
          >
            <Image className="h-4 w-4 mr-2" />
            Galeria
          </TabsTrigger>
        </TabsList>

        <TabsContent value="projects" className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Projetos Recentes</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {professional.projects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold">{project.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                  <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>{project.location}</span>
                    </div>
                    <span>{project.year}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Avaliações de Clientes</h2>
            <Button>Avaliar</Button>
          </div>
          <div className="space-y-4">
            {professional.reviews.map((review) => (
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

        <TabsContent value="events" className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Próximos Eventos</h2>
          </div>
          <div className="space-y-4">
            {professional.events.map((event) => (
              <Card key={event.id}>
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{event.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                        <Clock className="h-4 w-4 ml-2" />
                        <span>{event.time}</span>
                      </div>
                      <p className="mt-2">{event.description}</p>
                    </div>
                    <Button className="bg-[#9A3B72] hover:bg-[#7A2D5A] md:self-center">Participar</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="gallery" className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Galeria de Projetos</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {professional.gallery.concat(professional.gallery).map((image, index) => (
              <div key={index} className="relative aspect-square rounded-md overflow-hidden">
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
      </Tabs>
    </div>
  )
}
