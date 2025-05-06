import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, ArrowUpDown, Plus } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductManagementCard } from "@/components/product-management-card"

export default function ProductsPage() {
  // Mock data for products
  const products = [
    {
      id: 1,
      name: "Sofá Modular Confort",
      description: "Sofá modular com 3 lugares, tecido premium e estrutura em madeira maciça.",
      price: "R$ 3.499,00",
      discountPrice: "R$ 3.149,10",
      category: "Sofás",
      stock: 12,
      imageUrl: "/placeholder.svg?height=150&width=200",
      featured: true,
      status: "active",
    },
    {
      id: 2,
      name: "Mesa de Jantar Extensível",
      description: "Mesa extensível para 6-8 pessoas, madeira de demolição com acabamento natural.",
      price: "R$ 2.899,00",
      discountPrice: "R$ 2.609,10",
      category: "Mesas",
      stock: 8,
      imageUrl: "/placeholder.svg?height=150&width=200",
      featured: true,
      status: "active",
    },
    {
      id: 3,
      name: "Poltrona Leitura",
      description: "Poltrona confortável ideal para leitura, com apoio para braços e tecido antimanchas.",
      price: "R$ 1.299,00",
      discountPrice: "R$ 1.169,10",
      category: "Poltronas",
      stock: 15,
      imageUrl: "/placeholder.svg?height=150&width=200",
      featured: false,
      status: "active",
    },
    {
      id: 4,
      name: "Estante Modular",
      description: "Estante modular com 6 nichos, perfeita para livros e objetos decorativos.",
      price: "R$ 1.899,00",
      discountPrice: "R$ 1.709,10",
      category: "Estantes",
      stock: 10,
      imageUrl: "/placeholder.svg?height=150&width=200",
      featured: false,
      status: "active",
    },
    {
      id: 5,
      name: "Cadeira de Escritório Ergonômica",
      description: "Cadeira ergonômica com ajuste de altura e apoio lombar para maior conforto.",
      price: "R$ 899,00",
      discountPrice: "R$ 809,10",
      category: "Cadeiras",
      stock: 20,
      imageUrl: "/placeholder.svg?height=150&width=200",
      featured: false,
      status: "active",
    },
    {
      id: 6,
      name: "Mesa de Centro Retrátil",
      description: "Mesa de centro com tampo retrátil, ideal para otimizar espaços pequenos.",
      price: "R$ 799,00",
      discountPrice: "R$ 719,10",
      category: "Mesas",
      stock: 5,
      imageUrl: "/placeholder.svg?height=150&width=200",
      featured: false,
      status: "inactive",
    },
  ]

  // Categories for filter
  const categories = ["Todas", "Sofás", "Mesas", "Poltronas", "Estantes", "Cadeiras"]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Gerenciamento de Produtos</h1>
        <p className="text-muted-foreground">
          Gerencie seus produtos, preços e estoque. Destaque produtos para maior visibilidade.
        </p>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Buscar produtos..." className="w-full pl-8" />
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
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="active">Ativos</SelectItem>
                    <SelectItem value="inactive">Inativos</SelectItem>
                    <SelectItem value="featured">Destacados</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button className="bg-[#1F3D4A] hover:bg-[#2A4D5A]">Buscar</Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-white">
                Todas as categorias ×
              </Badge>
              <Badge variant="outline" className="bg-white">
                Todos os status ×
              </Badge>
              <Button variant="link" className="h-auto p-0 text-xs text-[#1F3D4A]">
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
              className="rounded-md data-[state=active]:bg-[#1F3D4A] data-[state=active]:text-white"
            >
              Todos
            </TabsTrigger>
            <TabsTrigger
              value="featured"
              className="rounded-md data-[state=active]:bg-[#1F3D4A] data-[state=active]:text-white"
            >
              Destacados
            </TabsTrigger>
            <TabsTrigger
              value="active"
              className="rounded-md data-[state=active]:bg-[#1F3D4A] data-[state=active]:text-white"
            >
              Ativos
            </TabsTrigger>
            <TabsTrigger
              value="inactive"
              className="rounded-md data-[state=active]:bg-[#1F3D4A] data-[state=active]:text-white"
            >
              Inativos
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Ordenar por:</span>
          <Select defaultValue="name">
            <SelectTrigger className="w-[180px] h-9">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Nome (A-Z)</SelectItem>
              <SelectItem value="price-asc">Preço (menor-maior)</SelectItem>
              <SelectItem value="price-desc">Preço (maior-menor)</SelectItem>
              <SelectItem value="stock">Estoque</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" className="h-9 w-9">
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex justify-end">
        <Button className="bg-[#1F3D4A] hover:bg-[#2A4D5A]">
          <Plus className="mr-2 h-4 w-4" />
          Adicionar Produto
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {products.map((product) => (
          <ProductManagementCard
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            discountPrice={product.discountPrice}
            category={product.category}
            stock={product.stock}
            imageUrl={product.imageUrl}
            featured={product.featured}
            status={product.status}
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
