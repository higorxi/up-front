"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Info, MapPin, Tag, Clock, AlertCircle, CheckCircle2 } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/components/ui/use-toast"

interface BenefitModalProps {
  isOpen: boolean
  onClose: () => void
  benefit: {
    id: number
    title: string
    provider: string
    description: string
    validUntil: string
    category: string
    pointsCost: number
    discount: string
    imageUrl: string
    featured: boolean
    location?: string
    terms?: string[]
  } | null
  userPoints: number
  onRedeem: (benefitId: number) => void
}

export function BenefitModal({ isOpen, onClose, benefit, userPoints, onRedeem }: BenefitModalProps) {
  const { toast } = useToast()
  const [isRedeeming, setIsRedeeming] = useState(false)

  if (!benefit) return null

  const hasEnoughPoints = userPoints >= benefit.pointsCost

  const handleRedeem = () => {
    setIsRedeeming(true)

    // Simulate API call
    setTimeout(() => {
      setIsRedeeming(false)
      onRedeem(benefit.id)
      toast({
        title: "Benefício resgatado com sucesso!",
        description: `Você resgatou "${benefit.title}". O código foi enviado para seu email.`,
        variant: "default",
      })
      onClose()
    }, 1500)
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">{benefit.title}</DialogTitle>
          <DialogDescription className="text-sm">
            Oferecido por <span className="font-medium">{benefit.provider}</span>
          </DialogDescription>
        </DialogHeader>

        <div className="relative mt-2 mb-4">
          <img
            src={benefit.imageUrl || "/placeholder.svg?height=200&width=500"}
            alt={benefit.title}
            className="w-full h-64 object-cover rounded-md"
          />
          <Badge className="absolute top-2 right-2 bg-white text-black">
            <Tag className="h-3 w-3 mr-1" /> {benefit.discount}
          </Badge>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Descrição</h4>
            <p className="text-sm text-muted-foreground">{benefit.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center text-sm">
              <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>Válido até: {benefit.validUntil}</span>
            </div>

            <div className="flex items-center text-sm">
              <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>{benefit.location || "Online / Todas as lojas"}</span>
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="font-medium mb-2">Termos e Condições</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              {(
                benefit.terms || [
                  "Válido para uma única utilização por cliente.",
                  "Não cumulativo com outras promoções.",
                  "Sujeito à disponibilidade de estoque.",
                  "O desconto será aplicado no valor total da compra.",
                ]
              ).map((term, index) => (
                <li key={index} className="flex items-start">
                  <Info className="h-3 w-3 mr-2 mt-1 flex-shrink-0" />
                  <span>{term}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          <div>
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium">Custo em pontos</h4>
              <span className="font-bold text-lg text-[#9A3B72]">{benefit.pointsCost} pontos</span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Seus pontos</span>
                <span>{userPoints} pontos</span>
              </div>

              <Progress value={(userPoints / benefit.pointsCost) * 100} max={100} className="h-2" />

              {!hasEnoughPoints && (
                <div className="flex items-center text-sm text-amber-600 mt-2">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  <span>
                    Você precisa de mais {benefit.pointsCost - userPoints} pontos para resgatar este benefício.
                  </span>
                </div>
              )}

              {hasEnoughPoints && (
                <div className="flex items-center text-sm text-emerald-600 mt-2">
                  <CheckCircle2 className="h-4 w-4 mr-1" />
                  <span>Você tem pontos suficientes para resgatar este benefício!</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <DialogFooter className="flex sm:justify-between gap-3 mt-4">
          <Button variant="outline" onClick={onClose} className="sm:flex-1">
            Fechar
          </Button>
          <Button
            className={`sm:flex-1 ${hasEnoughPoints ? "bg-[#9A3B72] hover:bg-[#7A2D5A]" : "bg-gray-400 hover:bg-gray-500 cursor-not-allowed"}`}
            disabled={!hasEnoughPoints || isRedeeming}
            onClick={handleRedeem}
          >
            {isRedeeming ? (
              <>
                <Clock className="mr-2 h-4 w-4 animate-spin" />
                Processando...
              </>
            ) : (
              "Resgatar Benefício"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
