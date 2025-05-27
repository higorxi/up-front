import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StoreCard } from "@/components/store-card"
import { RecommendationCard } from "@/components/recommendation-card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Gift, LineChart } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Welcome Card */}
      <Card className="">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full">
                <LineChart className="h-8 w-8 text-[#F9B000]" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Olá, Higor Giovane!</h1>
                <div className="flex items-center gap-1 text-sm">
                  <span className="text-[#F9B000]">♦</span> Nível Ouro • Prata
                </div>
              </div>
            </div>

            <div className="flex-1 md:border-l md:pl-6">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium">Rumo ao nível Ouro</span>
                <span className="text-sm font-medium">1250 / 2500 pontos</span>
              </div>
              <Progress value={50} className="h-2 bg-gray-200" indicatorClassName="bg-[#9A3B72]" />

              <div className="mt-4 space-y-2">
                <h3 className="flex items-center gap-1 font-medium">
                  <span className="text-[#F9B000]">♦</span> Benefícios do Nível Prata
                </h3>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-1">
                    <span className="text-[#F9B000]">★</span> Acesso a eventos exclusivos
                  </li>
                  <li className="flex items-center gap-1">
                    <span className="text-[#F9B000]">★</span> Descontos de 10% em fornecedores parceiros
                  </li>
                  <li className="flex items-center gap-1">
                    <span className="text-[#F9B000]">★</span> Workshop gratuito mensal
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total de pontos</CardDescription>
            <CardTitle className="text-3xl">1250</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-1 text-sm text-[#F9B000]">
              <span>♦</span> Nível Ouro
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Eventos disponíveis</CardDescription>
            <CardTitle className="text-3xl">2</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-1 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" /> 2 esta semana
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Fornecedores Parceiros</CardDescription>
            <CardTitle className="text-3xl">2</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">3 novas</CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Workshops ativos</CardDescription>
            <CardTitle className="text-3xl">3</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">1 novo hoje</CardContent>
        </Card>
      </div>

      {/* Tabs Navigation */}
      <Tabs defaultValue="para-voce" className="w-full">
        <TabsList className="border-b bg-transparent p-0">
          <TabsTrigger
            value="para-voce"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-[#9A3B72] data-[state=active]:bg-transparent"
          >
            Para Você
          </TabsTrigger>
          <TabsTrigger
            value="lojas"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-[#9A3B72] data-[state=active]:bg-transparent"
          >
            Fornecedores Parceiros
          </TabsTrigger>
          <TabsTrigger
            value="workshops"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-[#9A3B72] data-[state=active]:bg-transparent"
          >
            Workshops
          </TabsTrigger>
          <TabsTrigger
            value="eventos"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-[#9A3B72] data-[state=active]:bg-transparent"
          >
            Eventos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="para-voce" className="mt-6 space-y-6">
          {/* Featured Event */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Gift className="h-5 w-5 text-[#9A3B72]" />
                <h2 className="text-xl font-semibold">Evento em Destaque</h2>
              </div>
              <Button variant="ghost" className="gap-1 text-[#9A3B72]">
                Ver todos <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <Card className="overflow-hidden">
              <div className="relative h-48 w-full bg-gray-100">
                <img
                  src="/placeholder.svg?height=200&width=800"
                  alt="Evento em destaque"
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="mb-2 text-lg font-medium">Workshop de Design de Interiores</h3>
                <p className="text-sm text-muted-foreground">
                  Participe e ganhe pontos extras. Aprenda com os melhores profissionais do mercado.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Recommended Workshop */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[#9A3B72]" />
                <h2 className="text-xl font-semibold">Workshop Recomendado</h2>
              </div>
              <Button variant="ghost" className="gap-1 text-[#9A3B72]">
                Ver todos <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative h-48 bg-gray-100 md:h-full">
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Workshop recomendado"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="mb-2 text-lg font-medium">Tendências em Decoração 2025</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Baseado nos seus interesses. Descubra as últimas tendências em decoração para o próximo ano.
                  </p>
                  <Button className="bg-[#9A3B72] hover:bg-[#7A2D5A]">Inscrever-se</Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="lojas" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <StoreCard
              id={3}
              name="Móveis Elegance"
              category="Móveis"
              description="Móveis de alta qualidade para sua casa ou escritório."
              discount="10% de desconto"
              imageUrl="/placeholder.svg?height=100&width=200"
            />
            <StoreCard
              id={2}
              name="Iluminação Moderna"
              category="Iluminação"
              description="Soluções de iluminação para todos os ambientes."
              discount="15% de desconto"
              imageUrl="/placeholder.svg?height=100&width=200"
            />
            <StoreCard
              id={1}
              name="Decoração & Arte"
              category="Decoração"
              description="Objetos de decoração e arte para personalizar seu espaço."
              discount="5% de desconto"
              imageUrl="/placeholder.svg?height=100&width=200"
            />
          </div>
        </TabsContent>

        <TabsContent value="workshops" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2">
            <RecommendationCard
              title="Tendências em Decoração 2025"
              store="UP Clube de Negócios"
              description="Descubra as últimas tendências em decoração para o próximo ano."
              imageUrl="/placeholder.svg?height=100&width=200"
            />
            <RecommendationCard
              title="Iluminação para Home Office"
              store="Iluminação Moderna"
              description="Luminária de mesa com ajuste de intensidade ideal para trabalho."
              imageUrl="/placeholder.svg?height=100&width=200"
            />
          </div>
        </TabsContent>

        <TabsContent value="eventos" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2">
            <RecommendationCard
              title="Workshop de Design de Interiores"
              store="UP Clube de Negócios"
              description="Aprenda com os melhores profissionais do mercado."
              imageUrl="/placeholder.svg?height=100&width=200"
            />
            <RecommendationCard
              title="Feira de Decoração 2025"
              store="Centro de Convenções"
              description="A maior feira de decoração do ano com descontos exclusivos."
              imageUrl="/placeholder.svg?height=100&width=200"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
