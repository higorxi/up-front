import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Eye, CheckCircle } from "lucide-react"
import Image from "next/image"

interface ProfessionalInterestCardProps {
  name: string
  profession: string
  level: string
  lastVisit: string
  views: number
  imageUrl: string
  verified?: boolean
}

export function ProfessionalInterestCard({
  name,
  profession,
  level,
  lastVisit,
  views,
  imageUrl,
  verified = false,
}: ProfessionalInterestCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-[#1F3D4A]">
              <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />
            </div>
            {verified && <CheckCircle className="absolute -bottom-1 -right-1 h-5 w-5 text-green-600 fill-white" />}
          </div>
          <div className="flex-1">
            <h3 className="font-medium">{name}</h3>
            <div className="flex items-center gap-2">
              <p className="text-sm text-muted-foreground">{profession}</p>
              <Badge variant="outline" className="bg-[#EBF5F9] text-[#1F3D4A] border-[#1F3D4A]/30">
                Nível {level}
              </Badge>
            </div>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            <span>{views} visualizações</span>
          </div>
          <span>Última visita: {lastVisit}</span>
        </div>

        <div className="mt-3 flex gap-2">
          <Button variant="outline" className="flex-1">
            Ver Perfil
          </Button>
          <Button className="flex-1 gap-1 bg-[#1F3D4A] hover:bg-[#2A4D5A]">
            <MessageSquare className="h-4 w-4" />
            Contatar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
