"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfilePage() {
  const [name, setName] = useState("Ana Silva")
  const [email, setEmail] = useState("ana.silva@exemplo.com")
  const [profession, setProfession] = useState("designer")
  const [bio, setBio] = useState(
    "Designer de interiores com 5 anos de experiência em projetos residenciais e comerciais.",
  )

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Perfil</h1>
        <p className="text-muted-foreground">Gerencie suas informações pessoais e preferências.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <Card className="w-full md:w-1/3">
          <CardHeader>
            <CardTitle>Seu Perfil</CardTitle>
            <CardDescription>Informações visíveis para lojas parceiras</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Avatar" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h3 className="text-lg font-medium">Ana Silva</h3>
              <p className="text-sm text-muted-foreground">Designer de Interiores</p>
            </div>
            <Button variant="outline" className="w-full">
              Alterar foto
            </Button>
          </CardContent>
        </Card>

        <div className="w-full md:w-2/3">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="personal">Informações Pessoais</TabsTrigger>
              <TabsTrigger value="preferences">Preferências</TabsTrigger>
              <TabsTrigger value="security">Segurança</TabsTrigger>
            </TabsList>
            <TabsContent value="personal" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Informações Pessoais</CardTitle>
                  <CardDescription>Atualize suas informações pessoais</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="profession">Profissão</Label>
                    <Select value={profession} onValueChange={setProfession}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione sua profissão" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="arquiteto">Arquiteto</SelectItem>
                        <SelectItem value="designer">Designer de Interiores</SelectItem>
                        <SelectItem value="engenheiro">Engenheiro</SelectItem>
                        <SelectItem value="decorador">Decorador</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Biografia</Label>
                    <Textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} rows={4} />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Salvar Alterações</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="preferences" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Preferências</CardTitle>
                  <CardDescription>Personalize suas preferências de notificação e recomendações</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Categorias de Interesse</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" className="justify-start">
                        Móveis
                      </Button>
                      <Button variant="outline" className="justify-start">
                        Iluminação
                      </Button>
                      <Button variant="outline" className="justify-start">
                        Decoração
                      </Button>
                      <Button variant="outline" className="justify-start">
                        Revestimentos
                      </Button>
                      <Button variant="outline" className="justify-start">
                        Tintas
                      </Button>
                      <Button variant="outline" className="justify-start">
                        Tecidos
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Notificações</Label>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Novas recomendações</span>
                        <Button variant="outline" size="sm">
                          Ativado
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Promoções de lojas</span>
                        <Button variant="outline" size="sm">
                          Ativado
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Novidades do clube</span>
                        <Button variant="outline" size="sm">
                          Ativado
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Salvar Preferências</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="security" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Segurança</CardTitle>
                  <CardDescription>Gerencie sua senha e configurações de segurança</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Senha Atual</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">Nova Senha</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Atualizar Senha</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
