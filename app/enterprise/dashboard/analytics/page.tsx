import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowUp, ArrowDown, Calendar, Eye, MousePointer, MessageSquare, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground">
          Acompanhe o desempenho da sua loja, produtos e interações com profissionais.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <Tabs defaultValue="30days" className="w-auto">
          <TabsList className="bg-transparent p-0 h-9">
            <TabsTrigger
              value="7days"
              className="rounded-md data-[state=active]:bg-[#1F3D4A] data-[state=active]:text-white"
            >
              7 dias
            </TabsTrigger>
            <TabsTrigger
              value="30days"
              className="rounded-md data-[state=active]:bg-[#1F3D4A] data-[state=active]:text-white"
            >
              30 dias
            </TabsTrigger>
            <TabsTrigger
              value="90days"
              className="rounded-md data-[state=active]:bg-[#1F3D4A] data-[state=active]:text-white"
            >
              90 dias
            </TabsTrigger>
            <TabsTrigger
              value="custom"
              className="rounded-md data-[state=active]:bg-[#1F3D4A] data-[state=active]:text-white"
            >
              Personalizado
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex items-center gap-2">
          <Button variant="outline">Exportar Relatório</Button>
        </div>
      </div>

      {/* Overview Stats */}
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
          <CardContent className="text-sm text-muted-foreground">vs. período anterior</CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Visualizações de produtos</CardDescription>
            <div className="flex items-center justify-between">
              <CardTitle className="text-3xl">1,245</CardTitle>
              <Badge className="bg-green-100 text-green-800">
                <ArrowUp className="mr-1 h-3 w-3" />
                8%
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">vs. período anterior</CardContent>
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
          <CardContent className="text-sm text-muted-foreground">vs. período anterior</CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Mensagens recebidas</CardDescription>
            <div className="flex items-center justify-between">
              <CardTitle className="text-3xl">42</CardTitle>
              <Badge className="bg-red-100 text-red-800">
                <ArrowDown className="mr-1 h-3 w-3" />
                3%
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">vs. período anterior</CardContent>
        </Card>
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Visualizações por Dia</CardTitle>
            <CardDescription>Número de visualizações da sua loja nos últimos 30 dias</CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <div className="h-[300px] w-full bg-[#EBF5F9] rounded-md flex items-center justify-center">
              <p className="text-sm text-muted-foreground">Gráfico de visualizações diárias</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Interações por Tipo</CardTitle>
            <CardDescription>Distribuição de interações com sua loja</CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <div className="h-[300px] w-full bg-[#EBF5F9] rounded-md flex items-center justify-center">
              <p className="text-sm text-muted-foreground">Gráfico de distribuição de interações</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analytics */}
      <Tabs defaultValue="traffic" className="w-full">
        <TabsList className="border-b bg-transparent p-0">
          <TabsTrigger
            value="traffic"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-[#1F3D4A] data-[state=active]:bg-transparent"
          >
            Tráfego
          </TabsTrigger>
          <TabsTrigger
            value="products"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-[#1F3D4A] data-[state=active]:bg-transparent"
          >
            Produtos
          </TabsTrigger>
          <TabsTrigger
            value="professionals"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-[#1F3D4A] data-[state=active]:bg-transparent"
          >
            Profissionais
          </TabsTrigger>
          <TabsTrigger
            value="events"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-[#1F3D4A] data-[state=active]:bg-transparent"
          >
            Eventos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="traffic" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Fontes de Tráfego</CardTitle>
              <CardDescription>De onde vêm os visitantes da sua loja</CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="h-[200px] w-full bg-[#EBF5F9] rounded-md flex items-center justify-center">
                    <p className="text-sm text-muted-foreground">Gráfico de fontes de tráfego</p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full bg-[#1F3D4A]"></div>
                          <span>Busca direta</span>
                        </div>
                        <span className="font-medium">45%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#1F3D4A]" style={{ width: "45%" }}></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full bg-[#3D7A9A]"></div>
                          <span>Recomendações</span>
                        </div>
                        <span className="font-medium">30%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#3D7A9A]" style={{ width: "30%" }}></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full bg-[#5A9ABF]"></div>
                          <span>Eventos</span>
                        </div>
                        <span className="font-medium">15%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#5A9ABF]" style={{ width: "15%" }}></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full bg-[#7ABED9]"></div>
                          <span>Outros</span>
                        </div>
                        <span className="font-medium">10%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#7ABED9]" style={{ width: "10%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center justify-center">
                      <Eye className="h-8 w-8 text-[#1F3D4A] mb-2" />
                      <p className="text-2xl font-bold">4.2</p>
                      <p className="text-sm text-muted-foreground">Média de páginas por visita</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 flex flex-col items-center justify-center">
                      <Clock className="h-8 w-8 text-[#1F3D4A] mb-2" />
                      <p className="text-2xl font-bold">3:45</p>
                      <p className="text-sm text-muted-foreground">Tempo médio na loja</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4 flex flex-col items-center justify-center">
                      <MousePointer className="h-8 w-8 text-[#1F3D4A] mb-2" />
                      <p className="text-2xl font-bold">32%</p>
                      <p className="text-sm text-muted-foreground">Taxa de interação</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Desempenho dos Produtos</CardTitle>
              <CardDescription>Produtos mais visualizados e com maior interação</CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Top 5 Produtos</h3>
                  <Select defaultValue="views">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Ordenar por" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="views">Visualizações</SelectItem>
                      <SelectItem value="clicks">Cliques</SelectItem>
                      <SelectItem value="inquiries">Consultas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  {[
                    { name: "Sofá Modular Confort", views: 120, clicks: 45, inquiries: 8 },
                    { name: "Mesa de Jantar Extensível", views: 95, clicks: 32, inquiries: 5 },
                    { name: "Poltrona Leitura", views: 78, clicks: 25, inquiries: 3 },
                    { name: "Estante Modular", views: 65, clicks: 18, inquiries: 2 },
                    { name: "Cadeira de Escritório Ergonômica", views: 52, clicks: 15, inquiries: 1 },
                  ].map((product, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg border">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#EBF5F9] rounded-md flex items-center justify-center">
                        <span className="font-bold text-[#1F3D4A]">{index + 1}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{product.name}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            <span>{product.views}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MousePointer className="h-3 w-3" />
                            <span>{product.clicks}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageSquare className="h-3 w-3" />
                            <span>{product.inquiries}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <Button variant="ghost" size="sm">
                          Ver detalhes
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="professionals" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Análise de Profissionais</CardTitle>
              <CardDescription>Perfil e comportamento dos profissionais interessados</CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Distribuição por Profissão</h3>
                  <div className="h-[250px] w-full bg-[#EBF5F9] rounded-md flex items-center justify-center">
                    <p className="text-sm text-muted-foreground">Gráfico de distribuição por profissão</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Distribuição por Nível</h3>
                  <div className="h-[250px] w-full bg-[#EBF5F9] rounded-md flex items-center justify-center">
                    <p className="text-sm text-muted-foreground">Gráfico de distribuição por nível</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-medium mb-4">Profissionais Mais Ativos</h3>
                <div className="space-y-4">
                  {[
                    { name: "Ana Oliveira", profession: "Arquiteta", level: "Ouro", visits: 12, interactions: 8 },
                    {
                      name: "Carlos Santos",
                      profession: "Designer de Interiores",
                      level: "Prata",
                      visits: 10,
                      interactions: 5,
                    },
                    { name: "Mariana Costa", profession: "Decoradora", level: "Ouro", visits: 8, interactions: 6 },
                  ].map((professional, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg border">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#EBF5F9] rounded-full flex items-center justify-center">
                        <span className="font-bold text-[#1F3D4A]">{professional.name.charAt(0)}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{professional.name}</p>
                          <Badge variant="outline" className="bg-[#EBF5F9] text-[#1F3D4A] border-[#1F3D4A]/30">
                            {professional.level}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{professional.profession}</p>
                      </div>
                      <div className="flex-shrink-0 text-right">
                        <p className="font-medium">{professional.visits} visitas</p>
                        <p className="text-sm text-muted-foreground">{professional.interactions} interações</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Análise de Eventos</CardTitle>
              <CardDescription>Desempenho dos seus eventos e workshops</CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Participação em Eventos</h3>
                    <div className="h-[250px] w-full bg-[#EBF5F9] rounded-md flex items-center justify-center">
                      <p className="text-sm text-muted-foreground">Gráfico de participação em eventos</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Interesse vs. Confirmação</h3>
                    <div className="h-[250px] w-full bg-[#EBF5F9] rounded-md flex items-center justify-center">
                      <p className="text-sm text-muted-foreground">
                        Gráfico de conversão de interesse para confirmação
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Próximos Eventos</h3>
                  <div className="space-y-4">
                    {[
                      { name: "Lançamento Coleção Verão", date: "15 de Maio, 2025", interested: 20, confirmed: 12 },
                      { name: "Workshop de Decoração", date: "22 de Maio, 2025", interested: 15, confirmed: 8 },
                    ].map((event, index) => (
                      <div key={index} className="flex items-center gap-4 p-3 rounded-lg border">
                        <div className="flex-shrink-0 w-12 h-12 bg-[#EBF5F9] rounded-md flex items-center justify-center">
                          <Calendar className="h-6 w-6 text-[#1F3D4A]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium">{event.name}</p>
                          <p className="text-sm text-muted-foreground">{event.date}</p>
                        </div>
                        <div className="flex-shrink-0 text-right">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-[#EBF5F9] text-[#1F3D4A]">{event.interested} interessados</Badge>
                            <Badge className="bg-[#1F3D4A] text-white">{event.confirmed} confirmados</Badge>
                          </div>
                          <div className="mt-1 text-sm text-muted-foreground">
                            Taxa de conversão: {Math.round((event.confirmed / event.interested) * 100)}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
