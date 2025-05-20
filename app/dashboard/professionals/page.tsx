"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, ArrowUpDown } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProfessionalCard } from "@/components/professional-card"
import { useEffect, useState } from "react"
import axios from "axios"
import { ProfessionalCardProps } from "@/types/Professional/ProfessionalCardProps"

export default function ProfessionalsPage() {
const [professionals, setProfessionals] = useState<ProfessionalCardProps[]>([]);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/recommended-professional');
        setProfessionals(response.data);
      } catch (error) {
        console.error('Erro ao buscar parceiros:', error);
      }
    };

    fetchPartners();
  }, []);

  // Professions for filter
  const professions = ["Todas", "Arquiteto", "Designer de Interiores", "Decorador", "Fotógrafo", "Paisagista"]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Profissionais Indicados</h1>
        <p className="text-muted-foreground">
          Encontre os melhores profissionais recomendados pelo Clube de Negócios UP.
        </p>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Buscar profissionais..." className="w-full pl-8" />
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Select>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Profissão" />
                  </SelectTrigger>
                  <SelectContent>
                    {professions.map((profession) => (
                      <SelectItem key={profession} value={profession.toLowerCase()}>
                        {profession}
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
                <Button className="bg-[#9A3B72] hover:bg-[#7A2D5A]">Buscar</Button>
              </div>
            </div>

            {/* <div className="flex flex-wrap gap-2">
              <Badge variant="outline">
                Todas as profissões ×
              </Badge>
              <Badge variant="outline" >
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
              Todos
            </TabsTrigger>
            <TabsTrigger
              value="featured"
              className="rounded-md data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              Destaque
            </TabsTrigger>
            <TabsTrigger
              value="verified"
              className="rounded-md data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              Verificados
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Ordenar por:</span>
          <Select defaultValue="rating">
            <SelectTrigger className="w-[180px] h-9">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Avaliação</SelectItem>
              <SelectItem value="projects">Projetos</SelectItem>
              <SelectItem value="level">Nível</SelectItem>
              <SelectItem value="name">Nome (A-Z)</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" className="h-9 w-9">
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {professionals.map((professional) => (
          <ProfessionalCard
            key={professional.id}
            id={professional.id}
            name={professional.name}
            profession={professional.profession}
            description={professional.description}
            location={`${professional?.address.city}, ${professional?.address.state}` || 'Local não informado'}
            imageUrl={professional.imageUrl}
            featured={professional.featured}
            verified={professional.verified}
          />
        ))}
      </div>

      {/* <div className="flex justify-center mt-4">
        <Button variant="outline">
          Carregar mais
        </Button>
      </div> */}
    </div>
  )
}
