import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUp, Users, ShoppingBag, Calendar, Eye } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { ProfessionalInterestCard } from "@/components/professional-interest-card"
import { ProductPerformanceCard } from "@/components/product-performance-card"
import { Badge } from "@/components/ui/badge"

export default function EnterpriseDashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Welcome Card */}
      <Card className="bg-white">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EBF5F9]">
                <ShoppingBag className="h-8 w-8 text-[#1F3D4A]" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Olá, Móveis Elegance!</h1>
                <div className="flex items-center gap-1 text-sm">
                  <span className="text-[#F9B000]">★</span> Parceiro Premium • Desde 2022
                </div>
              </div>
            </div>

            <div className="flex-1 md:border-l md:pl-6">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium">Visibilidade mensal</span>
                <span className="text-sm font-medium">750 / 1000 visualizações</span>
              </div>
              <Progress value={75} className="h-2 bg-gray-200" indicatorClassName="bg-[#1F3D4A]" />

              <div className="mt-4 space-y-2">
                <h3 className="flex items-center gap-1 font-medium">
                  <span className="text-[#F9B000]">★</span> Benefícios do Plano Premium
                </h3>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-1">
                    <span className="text-[#F9B000]">✓</span> Destaque nas buscas
                  </li>
                  <li className="flex items-center gap-1">
                    <span className="text-[#F9B000]">✓</span> Acesso a todos os profissionais
                  </li>
                  <li className="flex items-center gap-1">
                    <span className="text-[#F9B000]">✓</span> Criação de eventos e workshops
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
            <CardDescription>Visualizações da loja</CardDescription>
            <div className="flex items-center justify-between">
              <CardTitle className="text-3xl">750</CardTitle>
              <Badge className="bg-green-100 text-green-800">
                <ArrowUp className="mr-1 h-3 w-3" />
                12%
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">Últimos 30 dias</CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Profissionais interessados</CardDescription>
            <div className="flex items-center justify-between">
              <CardTitle className="text-3xl">28</CardTitle>
              <Badge className="bg-green-100 text-green-800">
                <ArrowUp className="mr-1 h-3 w-3" />
                5%
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="flex items-center gap-1 text-sm text-muted-foreground">
            <Users className="h-4 w-4" /> 8 novos esta semana
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Produtos cadastrados</CardDescription>
            <div className="flex items-center justify-between">
              <CardTitle className="text-3xl">42</CardTitle>
              <Badge className="bg-orange-100 text-orange-800">
                <ArrowRight className="mr-1 h-3 w-3" />
                0%
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">3 em destaque</CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Mensagens não lidas</CardDescription>
            <div className="flex items-center justify-between">
              <CardTitle className="text-3xl">5</CardTitle>
              <Badge className="bg-red-100 text-red-800">
                <ArrowUp className="mr-1 h-3 w-3" />3
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">2 novas hoje</CardContent>
        </Card>
      </div>

      {/* Tabs Navigation */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="border-b bg-transparent p-0">
          <TabsTrigger
            value="overview"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-[#1F3D4A] data-[state=active]:bg-transparent"
          >
            Visão Geral
          </TabsTrigger>
          <TabsTrigger
            value="professionals"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-[#1F3D4A] data-[state=active]:bg-transparent"
          >
            Profissionais
          </TabsTrigger>
          <TabsTrigger
            value="products"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-[#1F3D4A] data-[state=active]:bg-transparent"
          >
            Produtos
          </TabsTrigger>
          <TabsTrigger
            value="events"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-[#1F3D4A] data-[state=active]:bg-transparent"
          >
            Eventos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6 space-y-6">
          {/* Performance Overview */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-[#1F3D4A]" />
                <h2 className="text-xl font-semibold">Desempenho da Loja</h2>
              </div>
              <Button variant="outline" className="gap-1">
                Ver relatório completo <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Visualizações por Dia</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="h-[200px] w-full bg-[#EBF5F9] rounded-md flex items-center justify-center">
                    <p className="text-sm text-muted-foreground">Gráfico de visualizações diárias</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Interações por Produto</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="h-[200px] w-full bg-[#EBF5F9] rounded-md flex items-center justify-center">
                    <p className="text-sm text-muted-foreground">Gráfico de interações por produto</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[#1F3D4A]" />
                <h2 className="text-xl font-semibold">Atividades Recentes</h2>
              </div>
              <Button variant="ghost" className="gap-1 text-[#1F3D4A]">
                Ver todas <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <Card>
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 border-l-2 border-green-500 pl-3">
                    <div className="flex-1">
                      <p className="font-medium">Novo profissional interessado</p>
                      <p className="text-sm text-muted-foreground">Ana Oliveira (Arquiteta) visualizou sua loja</p>
                    </div>
                    <span className="text-sm text-muted-foreground">Hoje, 14:32</span>
                  </div>
                  <div className="flex items-start gap-3 border-l-2 border-blue-500 pl-3">
                    <div className="flex-1">
                      <p className="font-medium">Nova mensagem recebida</p>
                      <p className="text-sm text-muted-foreground">Carlos Santos perguntou sobre o Sofá Modular</p>
                    </div>
                    <span className="text-sm text-muted-foreground">Hoje, 11:15</span>
                  </div>
                  <div className="flex items-start gap-3 border-l-2 border-purple-500 pl-3">
                    <div className="flex-1">
                      <p className="font-medium">Produto em destaque</p>
                      <p className="text-sm text-muted-foreground">
                        "Mesa de Jantar Extensível" foi adicionado aos destaques
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground">Ontem, 16:45</span>
                  </div>
                  <div className="flex items-start gap-3 border-l-2 border-orange-500 pl-3">
                    <div className="flex-1">
                      <p className="font-medium">Evento criado</p>
                      <p className="text-sm text-muted-foreground">
                        "Lançamento Coleção Verão" foi agendado para 15/05/2025
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground">Ontem, 10:20</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="professionals" className="mt-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Profissionais Interessados</h2>
            <Button variant="outline" className="gap-1">
              Ver todos <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ProfessionalInterestCard
              name="Ana Oliveira"
              profession="Arquiteta"
              level="Ouro"
              lastVisit="Hoje"
              views={5}
              imageUrl="/placeholder.svg?height=100&width=100"
              verified={true}
            />
            <ProfessionalInterestCard
              name="Carlos Santos"
              profession="Designer de Interiores"
              level="Prata"
              lastVisit="Ontem"
              views={3}
              imageUrl="/placeholder.svg?height=100&width=100"
              verified={true}
            />
            <ProfessionalInterestCard
              name="Mariana Costa"
              profession="Decoradora"
              level="Ouro"
              lastVisit="3 dias atrás"
              views={7}
              imageUrl="/placeholder.svg?height=100&width=100"
              verified={true}
            />
          </div>
        </TabsContent>

        <TabsContent value="products" className="mt-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Desempenho dos Produtos</h2>
            <Button className="bg-[#1F3D4A] hover:bg-[#2A4D5A]">Adicionar Produto</Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <ProductPerformanceCard
              name="Sofá Modular Confort"
              views={120}
              clicks={45}
              inquiries={8}
              trend="up"
              featured={true}
              imageUrl="/placeholder.svg?height=100&width=200"
            />
            <ProductPerformanceCard
              name="Mesa de Jantar Extensível"
              views={95}
              clicks={32}
              inquiries={5}
              trend="up"
              featured={true}
              imageUrl="/placeholder.svg?height=100&width=200"
            />
            <ProductPerformanceCard
              name="Poltrona Leitura"
              views={78}
              clicks={25}
              inquiries={3}
              trend="down"
              featured={false}
              imageUrl="/placeholder.svg?height=100&width=200"
            />
            <ProductPerformanceCard
              name="Estante Modular"
              views={65}
              clicks={18}
              inquiries={2}
              trend="stable"
              featured={false}
              imageUrl="/placeholder.svg?height=100&width=200"
            />
          </div>
        </TabsContent>

        <TabsContent value="events" className="mt-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Próximos Eventos</h2>
            <Button className="bg-[#1F3D4A] hover:bg-[#2A4D5A]">Criar Evento</Button>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">Lançamento Coleção Verão</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Calendar className="h-4 w-4" />
                      <span>15 de Maio, 2025</span>
                      <span className="text-[#1F3D4A]">•</span>
                      <span>18:00 - 21:00</span>
                    </div>
                    <p className="mt-2">Evento exclusivo de lançamento da nova coleção de verão com coquetel.</p>
                    <div className="mt-2 flex items-center gap-2">
                      <Badge className="bg-[#EBF5F9] text-[#1F3D4A]">12 confirmados</Badge>
                      <Badge className="bg-[#EBF5F9] text-[#1F3D4A]">8 interessados</Badge>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button variant="outline">Editar</Button>
                    <Button className="bg-[#1F3D4A] hover:bg-[#2A4D5A]">Ver Detalhes</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">Workshop de Decoração</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Calendar className="h-4 w-4" />
                      <span>22 de Maio, 2025</span>
                      <span className="text-[#1F3D4A]">•</span>
                      <span>15:00 - 17:00</span>
                    </div>
                    <p className="mt-2">Workshop gratuito sobre como decorar ambientes pequenos.</p>
                    <div className="mt-2 flex items-center gap-2">
                      <Badge className="bg-[#EBF5F9] text-[#1F3D4A]">8 confirmados</Badge>
                      <Badge className="bg-[#EBF5F9] text-[#1F3D4A]">5 interessados</Badge>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button variant="outline">Editar</Button>
                    <Button className="bg-[#1F3D4A] hover:bg-[#2A4D5A]">Ver Detalhes</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
