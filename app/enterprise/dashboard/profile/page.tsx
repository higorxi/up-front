"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Camera } from "lucide-react"

export default function ProfilePage() {
  const [name, setName] = useState("Móveis Elegance")
  const [email, setEmail] = useState("contato@moveiselegance.com.br")
  const [phone, setPhone] = useState("(11) 3456-7890")
  const [website, setWebsite] = useState("www.moveiselegance.com.br")
  const [address, setAddress] = useState("Av. Paulista, 1000 - São Paulo, SP")
  const [description, setDescription] = useState(
    "Móveis de alta qualidade para sua casa ou escritório. Trabalhamos com as melhores madeiras e acabamentos premium para garantir durabilidade e beleza em cada peça.",
  )
  const [hours, setHours] = useState("Segunda a Sábado: 10h às 20h | Domingo: 12h às 18h")
  const [category, setCategory] = useState("moveis")

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Perfil da Loja</h1>
        <p className="text-muted-foreground">Gerencie as informações da sua loja visíveis para os profissionais.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <Card className="w-full md:w-1/3">
          <CardHeader>
            <CardTitle>Sua Loja</CardTitle>
            <CardDescription>Informações visíveis para profissionais</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <div className="relative">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Logo da Loja" />
                <AvatarFallback className="bg-[#1F3D4A] text-white">ME</AvatarFallback>
              </Avatar>
              <Button variant="outline" size="icon" className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-white">
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium">Móveis Elegance</h3>
              <p className="text-sm text-muted-foreground">Móveis</p>
              <div className="flex items-center justify-center gap-1 mt-1">
                <span className="text-[#F9B000]">★</span>
                <span className="text-sm">Parceiro Premium</span>
              </div>
            </div>
            <div className="w-full space-y-2">
              <Button variant="outline" className="w-full">
                <Upload className="mr-2 h-4 w-4" />
                Alterar logo
              </Button>
              <Button variant="outline" className="w-full">
                <Upload className="mr-2 h-4 w-4" />
                Alterar capa
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="w-full md:w-2/3">
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="basic">Informações Básicas</TabsTrigger>
              <TabsTrigger value="details">Detalhes da Loja</TabsTrigger>
              <TabsTrigger value="gallery">Galeria</TabsTrigger>
            </TabsList>
            <TabsContent value="basic" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Informações Básicas</CardTitle>
                  <CardDescription>Atualize as informações principais da sua loja</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome da Loja</Label>
                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" value={website} onChange={(e) => setWebsite(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Categoria</Label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="moveis">Móveis</SelectItem>
                        <SelectItem value="iluminacao">Iluminação</SelectItem>
                        <SelectItem value="decoracao">Decoração</SelectItem>
                        <SelectItem value="revestimentos">Revestimentos</SelectItem>
                        <SelectItem value="tintas">Tintas</SelectItem>
                        <SelectItem value="tecidos">Tecidos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-[#1F3D4A] hover:bg-[#2A4D5A]">Salvar Alterações</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="details" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Detalhes da Loja</CardTitle>
                  <CardDescription>Informações adicionais sobre sua loja</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Endereço</Label>
                    <Input id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hours">Horário de Funcionamento</Label>
                    <Input id="hours" value={hours} onChange={(e) => setHours(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Descrição da Loja</Label>
                    <Textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={4}
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="featured">Destacar na Busca</Label>
                      <Switch id="featured" defaultChecked />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Sua loja aparecerá com destaque nos resultados de busca dos profissionais.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-[#1F3D4A] hover:bg-[#2A4D5A]">Salvar Alterações</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="gallery" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Galeria de Fotos</CardTitle>
                  <CardDescription>Adicione fotos da sua loja e produtos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <div
                        key={index}
                        className="relative aspect-square rounded-md bg-muted flex items-center justify-center border border-dashed"
                      >
                        {index < 4 ? (
                          <div className="relative w-full h-full">
                            <img
                              src={`/placeholder.svg?height=150&width=150&text=Foto ${index + 1}`}
                              alt={`Foto ${index + 1}`}
                              className="object-cover w-full h-full rounded-md"
                            />
                            <Button
                              variant="destructive"
                              size="icon"
                              className="absolute top-2 right-2 h-6 w-6 rounded-full"
                            >
                              <span className="sr-only">Remover</span>
                              <span aria-hidden="true">×</span>
                            </Button>
                          </div>
                        ) : (
                          <Button variant="ghost" className="h-full w-full rounded-md flex flex-col gap-2">
                            <Upload className="h-6 w-6" />
                            <span className="text-xs">Adicionar foto</span>
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-[#1F3D4A] hover:bg-[#2A4D5A]">Salvar Galeria</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
