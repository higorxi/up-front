"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, ArrowUpDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfessionalCard, ProfessionalData } from "@/components/professional-card";
import { useEffect, useState, useMemo } from "react";
import { profissionaisIndicadosService } from "@/services/profissionais-indicados-service";
import FallbackMessage from "@/components/fallback-loading";

export default function ProfessionalsPage() {
  const [professionals, setProfessionals] = useState<any>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("all");
  const [selectedProfession, setSelectedProfession] = useState("all");
  const [sortOrder, setSortOrder] = useState("name-asc");
  
  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const data =
          await profissionaisIndicadosService.listarProfissionaisIndicados();
        setProfessionals(data);
      } catch (error) {
        console.error("Erro ao buscar parceiros:", error);
      }
    };

    fetchPartners();
  }, []);

  // Extrair bairros únicos dos dados
  const districts = useMemo(() => {
    const uniqueDistricts = [...new Set(professionals.map((prof: { district: any; }) => prof.district).filter(Boolean))];
    return uniqueDistricts.sort();
  }, [professionals]);

  // Extrair profissões únicas dos dados
  const professions = useMemo(() => {
    const uniqueProfessions = [...new Set(professionals.map((prof: { profession: any; }) => prof.profession))];
    return uniqueProfessions.sort();
  }, [professionals]);

  // Filtrar e ordenar profissionais
  const filteredAndSortedProfessionals = useMemo(() => {
    let filtered = professionals;

    // Filtro por busca (nome, profissão ou descrição)
    if (searchTerm) {
      filtered = filtered.filter((prof: { name: string; profession: string; description: string; }) =>
        prof.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prof.profession.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prof.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtro por bairro
    if (selectedDistrict && selectedDistrict !== "all") {
      filtered = filtered.filter((prof: { city: any; district: any; }) => `${prof.city} - ${prof.district}` === selectedDistrict);
    }

    // Filtro por profissão
    if (selectedProfession && selectedProfession !== "all") {
      filtered = filtered.filter((prof: { profession: string; }) => prof.profession === selectedProfession);
    }

    // Ordenação apenas por nome
    filtered.sort((a: { name: string; }, b: { name: string; }) => {
      switch (sortOrder) {
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [professionals, searchTerm, selectedDistrict, selectedProfession, sortOrder]);

  const handleSearch = () => {
    // A busca já é feita automaticamente através do useMemo
    // Esta função pode ser usada para analytics ou outras ações
    console.log("Buscando por:", searchTerm);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedDistrict("all");
    setSelectedProfession("all");
    setSortOrder("name-asc");
  };

  // Buscar via API - removido pois agora é dinâmico

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Profissionais Indicados
        </h1>
        <p className="text-muted-foreground">
          Encontre os melhores profissionais recomendados pelo Clube de Negócios
          UP.
        </p>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar profissionais..."
                  className="w-full pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Select value={selectedProfession} onValueChange={setSelectedProfession}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Profissão" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas as profissões</SelectItem>
                    {professions.map((profession: any) => (
                      <SelectItem key={profession} value={profession}>
                        {profession}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Localização" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas as localizações</SelectItem>
                    {districts.map((district: any) => (
                      <SelectItem key={district} value={district}>
                        {district}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {(searchTerm || selectedDistrict !== "all" || selectedProfession !== "all") && (
              <div className="flex flex-wrap gap-2">
                {searchTerm && (
                  <div className="px-2 py-1 bg-gray-100 rounded-md text-sm flex items-center gap-1">
                    Busca: "{searchTerm}"
                    <button
                      onClick={() => setSearchTerm("")}
                      className="ml-1 text-gray-500 hover:text-gray-700"
                    >
                      ×
                    </button>
                  </div>
                )}
                {selectedProfession !== "all" && (
                  <div className="px-2 py-1 bg-gray-100 rounded-md text-sm flex items-center gap-1">
                    Profissão: {selectedProfession}
                    <button
                      onClick={() => setSelectedProfession("all")}
                      className="ml-1 text-gray-500 hover:text-gray-700"
                    >
                      ×
                    </button>
                  </div>
                )}
                {selectedDistrict !== "all" && (
                  <div className="px-2 py-1 bg-gray-100 rounded-md text-sm flex items-center gap-1">
                    Local: {selectedDistrict}
                    <button
                      onClick={() => setSelectedDistrict("all")}
                      className="ml-1 text-gray-500 hover:text-gray-700"
                    >
                      ×
                    </button>
                  </div>
                )}
                <Button 
                  variant="link" 
                  className="h-auto p-0 text-xs text-[#9A3B72]"
                  onClick={handleClearFilters}
                >
                  Limpar filtros
                </Button>
              </div>
            )}
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
          <Select value={sortOrder} onValueChange={setSortOrder}>
            <SelectTrigger className="w-[180px] h-9">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name-asc">Nome (A-Z)</SelectItem>
              <SelectItem value="name-desc">Nome (Z-A)</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" className="h-9 w-9">
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>
          {filteredAndSortedProfessionals.length} profissional(is) encontrado(s)
        </span>
      </div>

      {filteredAndSortedProfessionals.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredAndSortedProfessionals.map((professional: ProfessionalData) => (
            <ProfessionalCard
              key={professional.id}
              professional={professional}
            />
          ))}
        </div>
      ) : professionals.length > 0 ? (
        <FallbackMessage message="Nenhum profissional encontrado com os filtros aplicados." />
      ) : (
        <FallbackMessage message="Não contém profissionais indicados cadastrados." />
      )}

      {/* <div className="flex justify-center mt-4">
        <Button variant="outline">
          Carregar mais
        </Button>
      </div> */}
    </div>
  );
}