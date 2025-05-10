import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ProductCard } from "@/components/product-card"
import { ReviewCard } from "@/components/review-card"
import {
  ArrowLeft,
  Heart,
  Share2,
  MapPin,
  Phone,
  Globe,
  Clock,
  Star,
  MessageSquare,
  Calendar,
  Users,
  ShoppingBag,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function StoreDetailPage({ params }: { params: { id: string } }) {

  const store = {
    id: params.id,
    name: "Móveis Elegance",
    category: "Móveis",
    description:
      "Móveis de alta qualidade para sua casa ou escritório. Trabalhamos com as melhores madeiras e acabamentos premium para garantir durabilidade e beleza em cada peça. Nossa equipe de designers está pronta para ajudar você a encontrar as melhores soluções para seu espaço.",
    discount: "10% de desconto para membros UP",
    rating: 4.8,
    location: "Av. Paulista, 1000 - São Paulo, SP",
    phone: "(11) 3456-7890",
    website: "www.moveiselegance.com.br",
    hours: "Segunda a Sábado: 10h às 20h | Domingo: 12h às 18h",
    imageUrl: "/placeholder.svg?height=300&width=800",
    logoUrl: "/placeholder.svg?height=100&width=100",
    featured: true,
    new: false,
    gallery: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
    products: [
      {
        id: 1,
        name: "Sofá Modular Confort",
        description: "Sofá modular com 3 lugares, tecido premium e estrutura em madeira maciça.",
        price: "R$ 3.499,00",
        discountPrice: "R$ 3.149,10",
        imageUrl: "/placeholder.svg?height=150&width=200",
        featured: true,
      },
      {
        id: 2,
        name: "Mesa de Jantar Extensível",
        description: "Mesa extensível para 6-8 pessoas, madeira de demolição com acabamento natural.",
        price: "R$ 2.899,00",
        discountPrice: "R$ 2.609,10",
        imageUrl: "/placeholder.svg?height=150&width=200",
        featured: false,
      },
      {
        id: 3,
        name: "Poltrona Leitura",
        description: "Poltrona confortável ideal para leitura, com apoio para braços e tecido antimanchas.",
        price: "R$ 1.299,00",
        discountPrice: "R$ 1.169,10",
        imageUrl: "/placeholder.svg?height=150&width=200",
        featured: true,
      },
      {
        id: 4,
        name: "Estante Modular",
        description: "Estante modular com 6 nichos, perfeita para livros e objetos decorativos.",
        price: "R$ 1.899,00",
        discountPrice: "R$ 1.709,10",
        imageUrl: "/placeholder.svg?height=150&width=200",
        featured: false,
      },
    ],
    reviews: [
      {
        id: 1,
        name: "Ana Oliveira",
        profession: "Arquiteta",
        rating: 5,
        date: "15/04/2025",
        comment: "Excelente loja com produtos de alta qualidade. Recomendo para todos os meus clientes.",
        imageUrl: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 2,
        name: "Carlos Santos",
        profession: "Designer de Interiores",
        rating: 4,
        date: "02/04/2025",
        comment: "Bom atendimento e produtos de qualidade. Apenas o prazo de entrega que poderia ser menor.",
        imageUrl: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 3,
        name: "Mariana Costa",
        profession: "Decoradora",
        rating: 5,
        date: "28/03/2025",
        comment: "Móveis lindos e duráveis. Já comprei várias vezes e sempre saio satisfeita.",
        imageUrl: "/placeholder.svg?height=50&width=50",
      },
    ],
    events: [
      {
        id: 1,
        title: "Lançamento Coleção Verão",
        date: "15 de Maio, 2025",
        time: "18:00 - 21:00",
        description: "Evento exclusivo de lançamento da nova coleção de verão com coquetel para convidados.",
      },
      {
        id: 2,
        title: "Workshop de Decoração",
        date: "22 de Maio, 2025",
        time: "15:00 - 17:00",
        description: "Workshop gratuito sobre como decorar ambientes pequenos com móveis multifuncionais.",
      },
    ],
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/dashboard/stores">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Voltar
          </Link>
        </Button>
      </div>

      {/* Store Header */}
      <div className="relative h-64 w-full overflow-hidden rounded-xl">
        <Image src={store.imageUrl || "/placeholder.svg"} alt={store.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-white p-1">
              <Image
                src={store.logoUrl || "/placeholder.svg"}
                alt={store.name}
                width={64}
                height={64}
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">{store.name}</h1>
              <div className="flex items-center gap-2">
                <Badge className="bg-[#F9B000] text-[#3A0F2D]">{store.category}</Badge>
                <div className="flex items-center gap-1 text-white">
                  <Star className="h-4 w-4 fill-[#F9B000] text-[#F9B000]" />
                  <span>{store.rating}</span>
                  <span className="text-sm">({store.reviews.length} avaliações)</span>
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

      {/* Store Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Sobre a Loja</h2>
                  <p className="text-muted-foreground">{store.description}</p>
                </div>

                <div className="flex items-center gap-2 text-[#9A3B72] font-medium">
                  <Badge variant="outline" className="bg-[#9A3B72]/10 text-[#9A3B72] border-[#9A3B72]/30">
                    {store.discount}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-[#9A3B72] mt-0.5" />
                    <div>
                      <h3 className="font-medium">Endereço</h3>
                      <p className="text-sm text-muted-foreground">{store.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-5 w-5 text-[#9A3B72] mt-0.5" />
                    <div>
                      <h3 className="font-medium">Telefone</h3>
                      <p className="text-sm text-muted-foreground">{store.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Globe className="h-5 w-5 text-[#9A3B72] mt-0.5" />
                    <div>
                      <h3 className="font-medium">Website</h3>
                      <p className="text-sm text-muted-foreground">{store.website}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-[#9A3B72] mt-0.5" />
                    <div>
                      <h3 className="font-medium">Horário de Funcionamento</h3>
                      <p className="text-sm text-muted-foreground">{store.hours}</p>
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
              <h2 className="text-xl font-semibold mb-4">Galeria</h2>
              <div className="grid grid-cols-2 gap-2">
                {store.gallery.map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-md overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Galeria ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                Ver todas as fotos
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="products" className="w-full">
        <TabsList className="bg-transparent p-0 h-10 border-b">
          <TabsTrigger
            value="products"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-[#9A3B72] data-[state=active]:bg-transparent"
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Produtos
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
        </TabsList>

        <TabsContent value="products" className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Produtos em Destaque</h2>
            <Button variant="outline">Ver todos</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {store.products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                discountPrice={product.discountPrice}
                imageUrl={product.imageUrl}
                featured={product.featured}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Avaliações de Profissionais</h2>
            <Button>Avaliar</Button>
          </div>
          <div className="space-y-4">
            {store.reviews.map((review) => (
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
            {store.events.map((event) => (
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
      </Tabs>
    </div>
  )
}
