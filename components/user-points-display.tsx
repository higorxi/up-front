import { CircleDollarSign, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface UserPointsDisplayProps {
  currentPoints: number
  nextLevelPoints: number
  level: string
}

export function UserPointsDisplay({ currentPoints, nextLevelPoints, level }: UserPointsDisplayProps) {
  const progress = (currentPoints / nextLevelPoints) * 100

  return (
    <Card className="bg-gradient-to-r from-[#9A3B72]/10 to-[#9A3B72]/5">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-[#9A3B72] p-2 rounded-full mr-3">
              <CircleDollarSign className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-medium text-sm">Seus pontos</h3>
              <p className="text-2xl font-bold">{currentPoints}</p>
            </div>
          </div>

          <div className="text-right">
            <div className="flex items-center justify-end">
              <TrendingUp className="h-4 w-4 mr-1 text-[#9A3B72]" />
              <span className="text-sm font-medium">Nível {level}</span>
            </div>
            <p className="text-xs text-muted-foreground">
              {nextLevelPoints - currentPoints} pontos para o próximo nível
            </p>
          </div>
        </div>

        <div className="mt-3">
          <Progress value={progress} className="h-2" />
        </div>
      </CardContent>
    </Card>
  )
}
