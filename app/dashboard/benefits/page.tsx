"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, ArrowUpDown, X } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { BenefitCard } from "@/components/benefit-card"
import { BenefitModal } from "@/components/benefit-modal"
import { UserPointsDisplay } from "@/components/user-points-display"

export default function BenefitsPage() {
  // User points state
  const [userPoints, setUserPoints] = useState(250)

  // Filter states
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedPointsRange, setSelectedPointsRange] = useState([0, 500])
  const [showAvailableOnly, setShowAvailableOnly] = useState(false)
  const [selectedProviders, setSelectedProviders] = useState<string[]>([])
  const [activeTab, setActiveTab] = useState("all")
  const [sortOption, setSortOption] = useState("points")

  // Modal state
  const [selectedBenefit, setSelectedBenefit] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Mock data for benefits
  const benefits = [
    {
      id: 1,
      title: "Desconto de 20% em Móveis",
      provider: "MóveisElegantes",
      description:
        "Desconto exclusivo em toda linha de móveis para sala de estar. Válido para compras online e em lojas físicas participantes.",
      validUntil: "31 de Dezembro, 2025",
      category: "Móveis",
      pointsCost: 150,
      discount: "20%",
      imageUrl: "/placeholder.svg?height=100&width=200",
      featured: true,
      popular: true,
      location: "Todas as lojas",
      terms: [
        "Válido para uma única utilização por cliente.",
        "Não cumulativo com outras promoções.",
        "Válido apenas para produtos da linha 'Elegance'.",
        "O desconto será aplicado no valor total da compra.",
      ],
    },
    {
      id: 2,
      title: "Consultoria de Decoração Gratuita",
      provider: "Decor Express",
      description:
        "30 minutos de consultoria online com especialistas em decoração. Receba dicas personalizadas para transformar seu ambiente.",
      validUntil: "30 de Setembro, 2025",
      category: "Serviços",
      pointsCost: 200,
      discount: "100%",
      imageUrl: "/placeholder.svg?height=100&width=200",
      featured: false,
      popular: true,
      location: "Online",
      terms: [
        "Agendamento com 7 dias de antecedência.",
        "Sujeito à disponibilidade de horários.",
        "Consulta realizada via videoconferência.",
        "Cancelamentos devem ser feitos com 24h de antecedência.",
      ],
    },
    {
      id: 3,
      title: "Frete Grátis em Compras Acima de R$500",
      provider: "Casa & Estilo",
      description: "Economize com frete grátis em compras de alto valor. Válido para todo o território nacional.",
      validUntil: "31 de Agosto, 2025",
      category: "Frete",
      pointsCost: 100,
      discount: "Frete Grátis",
      imageUrl: "/placeholder.svg?height=100&width=200",
      featured: true,
      popular: false,
      location: "Online",
      terms: [
        "Válido apenas para compras acima de R$500.",
        "Não válido para produtos de grandes dimensões.",
        "Entrega em até 15 dias úteis.",
        "Válido apenas para o primeiro frete.",
      ],
    },
    {
      id: 4,
      title: "Cupom de 15% em Iluminação",
      provider: "Luz & Design",
      description:
        "Desconto especial em luminárias, abajures e pendentes. Renove a iluminação da sua casa com estilo e economia.",
      validUntil: "15 de Outubro, 2025",
      category: "Iluminação",
      pointsCost: 120,
      discount: "15%",
      imageUrl: "/placeholder.svg?height=100&width=200",
      featured: false,
      popular: true,
      location: "Online e Lojas Físicas",
      terms: [
        "Válido para produtos selecionados.",
        "Não cumulativo com outras promoções.",
        "Limite de 5 itens por cliente.",
        "Válido apenas para pagamentos à vista.",
      ],
    },
    {
      id: 5,
      title: "2 por 1 em Almofadas Decorativas",
      provider: "Têxtil Lar",
      description:
        "Leve duas almofadas pelo preço de uma em toda a loja. Renove o visual da sua casa com esta oferta imperdível.",
      validUntil: "20 de Julho, 2025",
      category: "Decoração",
      pointsCost: 80,
      discount: "2 por 1",
      imageUrl: "/placeholder.svg?height=100&width=200",
      featured: true,
      popular: true,
      location: "Todas as lojas",
      terms: [
        "A almofada gratuita deve ser de valor igual ou inferior.",
        "Promoção válida enquanto durarem os estoques.",
        "Não válido para almofadas em promoção.",
        "Limite de 3 pares por cliente.",
      ],
    },
    {
      id: 6,
      title: "30% Off em Tapetes",
      provider: "Tapetes & Cia",
      description:
        "Desconto exclusivo na nova coleção de tapetes importados. Produtos de alta qualidade para complementar sua decoração.",
      validUntil: "10 de Novembro, 2025",
      category: "Decoração",
      pointsCost: 180,
      discount: "30%",
      imageUrl: "/placeholder.svg?height=100&width=200",
      featured: true,
      popular: false,
      location: "Lojas Físicas",
      terms: [
        "Válido apenas para a coleção 'Premium 2025'.",
        "Não cumulativo com outras promoções.",
        "Desconto aplicado no caixa mediante apresentação do cupom.",
        "Não válido para tapetes sob encomenda.",
      ],
    },
    {
      id: 7,
      title: "Curso de Design de Interiores",
      provider: "Academia Decor",
      description:
        "Curso online de introdução ao design de interiores com certificado de conclusão. Aprenda com profissionais renomados.",
      validUntil: "15 de Dezembro, 2025",
      category: "Cursos",
      pointsCost: 350,
      discount: "50%",
      imageUrl: "/placeholder.svg?height=100&width=200",
      featured: false,
      popular: true,
      location: "Online",
      terms: [
        "Acesso por 6 meses após a ativação.",
        "Certificado incluso após conclusão.",
        "Não transferível para terceiros.",
        "Conteúdo em português.",
      ],
    },
    {
      id: 8,
      title: "Kit de Organização Premium",
      provider: "OrganizeJá",
      description:
        "Kit completo com organizadores para armários, gavetas e closets. Solução perfeita para manter sua casa em ordem.",
      validUntil: "30 de Junho, 2025",
      category: "Organização",
      pointsCost: 280,
      discount: "25%",
      imageUrl: "/placeholder.svg?height=100&width=200",
      featured: true,
      popular: false,
      location: "Online",
      terms: [
        "Entrega em até 10 dias úteis.",
        "Garantia de 90 dias.",
        "Troca apenas em caso de defeito.",
        "Frete não incluso.",
      ],
    },
  ]

  // Categories for filter
  const categories = ["Todas", "Móveis", "Decoração", "Iluminação", "Serviços", "Frete", "Cursos", "Organização"]

  // Get unique providers
  const providers = [...new Set(benefits.map((benefit) => benefit.provider))]

  // Handle benefit redemption
  const handleRedeemBenefit = (benefitId: number) => {
    // Find the benefit
    const benefit = benefits.find((b) => b.id === benefitId)
    if (benefit && userPoints >= benefit.pointsCost) {
      // Deduct points
      setUserPoints((prev) => prev - benefit.pointsCost)
    }
  }

  // Filter benefits based on current filters
  const filteredBenefits = benefits.filter((benefit) => {
    // Search query filter
    if (
      searchQuery &&
      !benefit.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !benefit.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !benefit.provider.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

    // Category filter
    if (selectedCategory !== "all" && benefit.category.toLowerCase() !== selectedCategory) {
      return false
    }

    // Points range filter
    if (benefit.pointsCost < selectedPointsRange[0] || benefit.pointsCost > selectedPointsRange[1]) {
      return false
    }

    // Available only filter
    if (showAvailableOnly && benefit.pointsCost > userPoints) {
      return false
    }

    // Provider filter
    if (selectedProviders.length > 0 && !selectedProviders.includes(benefit.provider)) {
      return false
    }

    // Tab filter
    if (activeTab === "featured" && !benefit.featured) {
      return false
    }

    if (activeTab === "popular" && !benefit.popular) {
      return false
    }

    return true
  })

  // Sort benefits
  const sortedBenefits = [...filteredBenefits].sort((a, b) => {
    switch (sortOption) {
      case "points":
        return a.pointsCost - b.pointsCost
      case "discount":
        // Simple sort for discount (not perfect for different formats)
        return b.discount.localeCompare(a.discount)
      case "expiry":
        // Simple string comparison for dates
        return a.validUntil.localeCompare(b.validUntil)
      case "name":
        return a.title.localeCompare(b.title)
      default:
        return 0
    }
  })

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("all")
    setSelectedPointsRange([0, 500])
    setShowAvailableOnly(false)
    setSelectedProviders([])
  }

  // Toggle provider selection
  const toggleProvider = (provider: string) => {
    setSelectedProviders((prev) => (prev.includes(provider) ? prev.filter((p) => p !== provider) : [...prev, provider]))
  }

  // Active filters count
  const activeFiltersCount = [
    selectedCategory !== "all",
    selectedPointsRange[0] > 0 || selectedPointsRange[1] < 500,
    showAvailableOnly,
    selectedProviders.length > 0,
  ].filter(Boolean).length

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Benefícios Exclusivos</h1>
        <p className="text-muted-foreground">Troque seus pontos por benefícios exclusivos com nossos parceiros.</p>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar benefícios..."
                  className="w-full pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas as categorias</SelectItem>
                    {categories.slice(1).map((category) => (
                      <SelectItem key={category} value={category.toLowerCase()}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="relative">
                      <Filter className="h-4 w-4 mr-2" />
                      Filtros
                      {activeFiltersCount > 0 && (
                        <Badge className="ml-1 h-5 w-5 p-0 flex items-center justify-center bg-[#9A3B72]">
                          {activeFiltersCount}
                        </Badge>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="space-y-4">
                      <h4 className="font-medium">Filtros avançados</h4>

                      <div className="space-y-2">
                        <h5 className="text-sm font-medium">Faixa de pontos</h5>
                        <div className="px-1">
                          <Slider
                            defaultValue={[0, 500]}
                            max={500}
                            step={10}
                            value={selectedPointsRange}
                            onValueChange={setSelectedPointsRange}
                          />
                        </div>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>{selectedPointsRange[0]} pontos</span>
                          <span>{selectedPointsRange[1]} pontos</span>
                        </div>
                      </div>

                      <Separator />

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="available"
                          checked={showAvailableOnly}
                          onCheckedChange={(checked) => setShowAvailableOnly(checked as boolean)}
                        />
                        <label
                          htmlFor="available"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Mostrar apenas disponíveis para resgate
                        </label>
                      </div>

                      <Separator />

                      <div className="space-y-2">
                        <h5 className="text-sm font-medium">Parceiros</h5>
                        <div className="space-y-1 max-h-32 overflow-y-auto">
                          {providers.map((provider) => (
                            <div key={provider} className="flex items-center space-x-2">
                              <Checkbox
                                id={`provider-${provider}`}
                                checked={selectedProviders.includes(provider)}
                                onCheckedChange={() => toggleProvider(provider)}
                              />
                              <label
                                htmlFor={`provider-${provider}`}
                                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {provider}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button variant="outline" size="sm" className="w-full mt-2" onClick={clearFilters}>
                        Limpar todos os filtros
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>

                <Button
                  className="bg-[#9A3B72] hover:bg-[#7A2D5A]"
                  onClick={() => {
                    // Apply filters logic here if needed
                  }}
                >
                  Buscar
                </Button>
              </div>
            </div>

            {(selectedCategory !== "all" ||
              selectedPointsRange[0] > 0 ||
              selectedPointsRange[1] < 500 ||
              showAvailableOnly ||
              selectedProviders.length > 0) && (
              <div className="flex flex-wrap gap-2">
                {selectedCategory !== "all" && (
                  <Badge variant="outline" className="bg-white flex items-center gap-1">
                    Categoria: {categories.find((c) => c.toLowerCase() === selectedCategory)}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 p-0 ml-1"
                      onClick={() => setSelectedCategory("all")}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                )}

                {(selectedPointsRange[0] > 0 || selectedPointsRange[1] < 500) && (
                  <Badge variant="outline" className="bg-white flex items-center gap-1">
                    Pontos: {selectedPointsRange[0]}-{selectedPointsRange[1]}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 p-0 ml-1"
                      onClick={() => setSelectedPointsRange([0, 500])}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                )}

                {showAvailableOnly && (
                  <Badge variant="outline" className="bg-white flex items-center gap-1">
                    Apenas disponíveis
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 p-0 ml-1"
                      onClick={() => setShowAvailableOnly(false)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                )}

                {selectedProviders.map((provider) => (
                  <Badge key={provider} variant="outline" className="bg-white flex items-center gap-1">
                    {provider}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4 p-0 ml-1"
                      onClick={() => toggleProvider(provider)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                ))}

                <Button variant="link" className="h-auto p-0 text-xs text-[#9A3B72]" onClick={clearFilters}>
                  Limpar filtros
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
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
              value="popular"
              className="rounded-md data-[state=active]:bg-[#9A3B72] data-[state=active]:text-white"
            >
              Populares
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Ordenar por:</span>
          <Select value={sortOption} onValueChange={setSortOption}>
            <SelectTrigger className="w-[180px] h-9">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="points">Pontos (menor)</SelectItem>
              <SelectItem value="discount">Desconto (maior)</SelectItem>
              <SelectItem value="expiry">Validade (próximos)</SelectItem>
              <SelectItem value="name">Nome (A-Z)</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9"
            onClick={() => {
              // Toggle sort direction logic here if needed
            }}
          >
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {sortedBenefits.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium">Nenhum benefício encontrado</h3>
          <p className="text-muted-foreground mt-2">Tente ajustar seus filtros para ver mais opções.</p>
          <Button variant="outline" className="mt-4" onClick={clearFilters}>
            Limpar todos os filtros
          </Button>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sortedBenefits.map((benefit) => (
            <BenefitCard
              key={benefit.id}
              title={benefit.title}
              provider={benefit.provider}
              description={benefit.description}
              validUntil={benefit.validUntil}
              category={benefit.category}
              pointsCost={benefit.pointsCost}
              discount={benefit.discount}
              imageUrl={benefit.imageUrl}
              featured={benefit.featured}
              userPoints={userPoints}
              onViewDetails={() => {
                setSelectedBenefit(benefit)
                setIsModalOpen(true)
              }}
            />
          ))}
        </div>
      )}

      {sortedBenefits.length > 0 && sortedBenefits.length < benefits.length && (
        <div className="flex justify-center mt-4">
          <Button variant="outline" className="bg-white">
            Carregar mais
          </Button>
        </div>
      )}

      <BenefitModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        benefit={selectedBenefit}
        userPoints={userPoints}
        onRedeem={handleRedeemBenefit}
      />
    </div>
  )
}
