import { ProfessionalData } from "@/components/professional-card";
import { apiClient } from "@/lib/api-client"

class ProfissionaisIndicadosService {
  // Listar profissionais indicados
  async listarProfissionaisIndicados(): Promise<ProfessionalData[]> {
    try {
      const response = await apiClient.get<ProfessionalData[]>('/listed-professionals');

      return response
    } catch (error) {
      console.error("Erro ao listar profissionais indicados:", error)
      throw error
    }
  }

}

export const profissionaisIndicadosService = new ProfissionaisIndicadosService()
