import { apiClient } from "@/lib/api-client"

class ProfissionaisIndicadosService {
  // Listar profissionais indicados
  async listarProfissionaisIndicados(): Promise<ProfissionalIndicado[]> {
    try {
      const response = await apiClient.get<ProfissionalIndicado[]>('/listed-professionals');

      return response
    } catch (error) {
      console.error("Erro ao listar profissionais indicados:", error)
      throw error
    }
  }

}

export const profissionaisIndicadosService = new ProfissionaisIndicadosService()
