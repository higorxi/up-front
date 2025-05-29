import { apiClient } from "@/lib/api-client"

export type Address = {
  id: string
  state: string
  city: string
  district: string
  street: string
  complement?: string
  number: string
  zipCode: string
}

export type User = {
  id: string
  email: string
  password: string
  createdAt: string
  updatedAt: string
  professionalId: string
  partnerSupplierId: string | null
  loveDecorationId: string | null
}

export type Professional = {
  id: string
  name: string
  profession: string
  document: string
  generalRegister: string
  registrationAgency: string
  description: string
  experience: string
  officeName: string
  verified: boolean
  featured: boolean
  level: "BRONZE" | "SILVER" | "GOLD"
  points: number
  profileImage: string
  phone: string
  socialMediaId: string | null
  addressId: string
  address: Address
  user: User
}


// Serviço para gerenciar profissionais
class ProfissionaisService {
  // Obter profissional por ID
  async obterProfissionalPorId(id: string): Promise<Professional | null> {
    try {
      const profissional = await apiClient.get<Professional>(`/professional/${id}`);

      return profissional
    } catch (error) {
      console.error(`Erro ao obter profissional com ID ${id}:`, error)
      throw error
    }
  }

  async atualizarProfissional(id: string, dados: Partial<Professional>): Promise<Professional> {
    try {
      const profissional = await apiClient.patch<Professional>(`/professional/${id}`, dados);

      return profissional
    } catch (error) {
      console.error(`Erro ao atualizar profissional com ID ${id}:`, error)
      throw error
    }
  }
}

export const profissionaisService = new ProfissionaisService()
