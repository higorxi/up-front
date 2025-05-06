"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  ArrowLeft, 
  LayoutDashboard, 
  Building2, 
  Home as HomeIcon 
} from "lucide-react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Home() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 bg-background">
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
      </div>

      {/* Header */}
      <header className="container py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Voltar para o site</span>
          </Link>
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">UP</span>
            <span className="text-foreground">Connection</span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 container flex items-center justify-center py-8">
        <div className="flex flex-col w-full max-w-xl rounded-xl overflow-hidden shadow-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Navegação</h1>
            <p className="text-muted-foreground">Selecione onde deseja navegar</p>
          </div>

          <div className="space-y-4">
            <Button
              onClick={() => router.push("/")}
              className="w-full p-6 h-auto flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
            >
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-foreground/20">
                <HomeIcon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="text-left">
                <p className="font-medium text-lg">Página Inicial</p>
                <p className="text-xs text-primary-foreground/80">Voltar para a home</p>
              </div>
            </Button>
            
            <Button
              onClick={() => router.push("/dashboard")}
              className="w-full p-6 h-auto flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
            >
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-foreground/20">
                <LayoutDashboard className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="text-left">
                <p className="font-medium text-lg">Dashboard</p>
                <p className="text-xs text-primary-foreground/80">Acesse o painel de visão do profissional</p>
              </div>
            </Button>
            
            <Button
              onClick={() => router.push("/enterprise/dashboard")}
              className="w-full p-6 h-auto flex items-center gap-4 bg-primary/90 hover:bg-primary transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
            >
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-foreground/20">
                <Building2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="text-left">
                <p className="font-medium text-lg">Enterprise Dashboard</p>
                <p className="text-xs text-primary-foreground/80">Acesse o painel empresarial</p>
              </div>
            </Button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} UP Connection. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}