import { apiClient } from "@/lib/api-client"

// Interfaces para tipagem dos dados
interface Address {
  id: string
  state: string
  city: string
  district: string
  street: string
  complement: string
  number: string
  zipCode: string
}

interface Store {
  id: string
  name: string
  description: string | null
  website: string | null
  rating: number
  openingHours: string | null
  addressId: string
  partnerId: string
  address: Address
}

export interface FornecedorParceiro {
  id: string
  tradeName: string
  companyName: string
  document: string
  stateRegistration: string
  contact: string
  profileImage: string | null
  addressId: string
  accessPending: boolean
  storeId: string | null
  store: Store
}

// Serviço para gerenciar fornecedores parceiros
class FornecedoresParceirosService {
  async listarFornecedoresParceiros(): Promise<FornecedorParceiro[]> {
    try {
      const response = await apiClient.get<FornecedorParceiro[]>('/partner-supplier')
      return response
    } catch (error) {
      console.error("Erro ao listar fornecedores parceiros:", error)
      throw error
    }
  }

  async obterFornecedorParceiroPorId(id: string): Promise<FornecedorParceiro | null> {
    try {
      const response = await apiClient.get<FornecedorParceiro>(`/partner-supplier/${id}`)
      return response
    } catch (error) {
      console.error(`Erro ao obter fornecedor parceiro com ID ${id}:`, error)
      throw error
    }
  }
}

export const fornecedoresParceirosService = new FornecedoresParceirosService()