// Vamos melhorar o serviço de lojas para incluir mais funcionalidades

import { apiClient } from "@/lib/api-client"
import type { Endereco } from "./profissionais-service"
import { profissionaisService } from "./profissionais-service"

// Tipos
export type Loja = {
  id: string
  nome: string
  cnpj: string
  telefone?: string
  email?: string
  status: "Ativa" | "Inativa" | "Suspensa"
  dataCadastro: string
  endereco: Endereco
  totalProfissionais: number
  descricao?: string
}

// Serviço para gerenciar lojas
class LojasService {
  // Listar todas as lojas
  async listarLojas(): Promise<Loja[]> {
    try {
      // Quando a API estiver pronta, descomente o código abaixo
      const response = await apiClient.get<Loja[]>('/lojas');

      // Usando dados mockados para desenvolvimento
      return response
    } catch (error) {
      console.error("Erro ao listar lojas:", error)
      throw error
    }
  }

  // Obter loja por ID
  async obterLojaPorId(id: string): Promise<Loja | null> {
    try {
      // Quando a API estiver pronta, descomente o código abaixo
      // return await apiClient.get<Loja>(`/lojas/${id}`);

      // Usando dados mockados para desenvolvimento
      const loja = mockLojas.find((l) => l.id === id)
      return loja || null
    } catch (error) {
      console.error(`Erro ao obter loja com ID ${id}:`, error)
      throw error
    }
  }

  // Atualizar loja existente
  async atualizarLoja(id: string, dados: Partial<Loja>): Promise<Loja> {
    try {
      // Quando a API estiver pronta, descomente o código abaixo
      // return await apiClient.put<Loja>(`/lojas/${id}`, dados);

      // Simulando atualização para desenvolvimento
      console.log(`Loja ${id} atualizada:`, dados)

      // Simulando resposta da API
      const index = mockLojas.findIndex((l) => l.id === id)
      if (index === -1) {
        throw new Error(`Loja com ID ${id} não encontrada`)
      }

      const lojaAtualizada = {
        ...mockLojas[index],
        ...dados,
      }

      // Atualizar no mock para desenvolvimento
      mockLojas[index] = lojaAtualizada

      return lojaAtualizada
    } catch (error) {
      console.error(`Erro ao atualizar loja com ID ${id}:`, error)
      throw error
    }
  }


  // Desativar loja
  async desativarLoja(id: string): Promise<void> {
    try {
      // Quando a API estiver pronta, descomente o código abaixo
      // await apiClient.patch(`/lojas/${id}/desativar`, {});

      // Simulando desativação para desenvolvimento
      console.log(`Loja ${id} desativada`)

      // Atualizar o status no mock para desenvolvimento
      const index = mockLojas.findIndex((l) => l.id === id)
      if (index !== -1) {
        mockLojas[index].status = "Inativa"
      }
    } catch (error) {
      console.error(`Erro ao desativar loja com ID ${id}:`, error)
      throw error
    }
  }



export const lojasService = new LojasService()
