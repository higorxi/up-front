"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { StoreCard } from '@/components/store-card';
import { Search, Filter, ArrowUpDown } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useEffect, useState } from 'react';
import { fornecedoresParceirosService, FornecedorParceiro } from '@/services/fornecedores-parcerios-service';
import FallbackMessage from '@/components/fallback-loading';

export default function StoresPage() {
const [partners, setPartners] = useState<FornecedorParceiro[]>([]);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const data = await fornecedoresParceirosService.listarFornecedoresParceiros();
        setPartners(data);
      } catch (error) {
        console.error('Erro ao buscar parceiros:', error);
      }
    };

    fetchPartners();
  }, []);

  // Categories for filter
  const categories = ['Todas', 'Móveis', 'Iluminação', 'Decoração', 'Revestimentos', 'Tintas', 'Tecidos'];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Fornecedores Parceiros</h1>
        <p className="text-muted-foreground">
          Explore todas os fornecedores parceiros do Clube de Negócios UP e aproveite descontos exclusivos.
        </p>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Buscar lojas..." className="w-full pl-8" />
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
                <Button className="bg-primary">Buscar</Button>
              </div>
            </div>

            {/* <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-white">
                Todas as categorias ×
              </Badge>
              <Badge variant="outline" className="bg-white">
                Todas as localizações ×
              </Badge>
              <Button variant="link" className="h-auto p-0 text-xs text-[#9A3B72]">
                Limpar filtros
              </Button>
            </div> */}
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between">
        <Tabs defaultValue="all" className="w-auto">
          <TabsList className="bg-transparent p-0 h-9">
            <TabsTrigger
              value="all"
              className="rounded-md data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              Todas
            </TabsTrigger>
            <TabsTrigger
              value="featured"
              className="rounded-md data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              Destaque
            </TabsTrigger>
            <TabsTrigger
              value="new"
              className="rounded-md data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              Novas
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Ordenar por:</span>
          <Select defaultValue="recommended">
            <SelectTrigger className="w-[180px] h-9">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recommended">Recomendados</SelectItem>
              <SelectItem value="rating">Avaliação</SelectItem>
              <SelectItem value="discount">Maior desconto</SelectItem>
              <SelectItem value="name">Nome (A-Z)</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" className="h-9 w-9">
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {partners.length > 0 ? (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {partners.map((partner) => (
          <StoreCard
            key={partner.id}
            id={partner.id}
            name={partner.tradeName}
            category="Parceiro"
            description={partner.companyName || ''}
            imageUrl={partner.profileImage || ''}
            rating={5}
            location={`${partner?.store?.address.city}, ${partner?.store?.address.state}` || 'Local não informado'}
            featured={true}
            new={false}
          />
        ))}
      </div>
      ) : (
        <FallbackMessage message="Não contém Lojas cadastradas." />
      )}


      {/* <div className="flex justify-center mt-4">
        <Button variant="outline" className="bg-white">
          Carregar mais
        </Button>
      </div> */}
    </div>
  );
}
