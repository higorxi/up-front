'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ProductCard } from '@/components/product-card';
import { ReviewCard } from '@/components/review-card';
import {
  ArrowLeft,
  Heart,
  Share2,
  MapPin,
  Phone,
  Globe,
  Clock,
  Star,
  MessageSquare,
  Calendar,
  Users,
  ShoppingBag,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function StoreDetailPage({ params }: { params: { id: string } }) {
  const [partner, setPartner] = useState<PartnerSupplier>();

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/partner-supplier/${params.id}`);
        setPartner(response.data); // Supondo que a API retorna um array de partners
      } catch (error) {
        console.error('Erro ao buscar parceiros:', error);
      }
    };

    fetchPartners();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/dashboard/stores">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Voltar
          </Link>
        </Button>
      </div>

      {/* Store Header */}
      <div className="relative h-64 w-full overflow-hidden rounded-xl">
        <Image src={partner?.profileImage || '/placeholder.svg'} alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-white p-1">
              <Image
                src={partner?.profileImage || '/placeholder.svg'}
                alt={partner?.tradeName || ''}
                width={64}
                height={64}
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">{partner?.tradeName}</h1>
              <div className="flex items-center gap-2">
                <Badge className="bg-[#F9B000] text-[#3A0F2D]">Categoria</Badge>
                <div className="flex items-center gap-1 text-white">
                  <Star className="h-4 w-4 fill-[#F9B000] text-[#F9B000]" />
                  <span>0</span>
                  <span className="text-sm">(0 avaliações)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 hover:text-white"
            >
              <Heart className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 hover:text-white"
            >
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Store Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Sobre a Loja</h2>
                  <p className="text-muted-foreground">gewgewhwh dsagsasagsa dasdsa</p>
                </div>

                <div className="flex items-center gap-2 text-[#9A3B72] font-medium">
                  <Badge variant="outline" className="bg-[#9A3B72]/10 text-[#9A3B72] border-[#9A3B72]/30">
                    10% de desconto para membros UP
                  </Badge>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-[#9A3B72] mt-0.5" />
                    <div>
                      <h3 className="font-medium">Endereço</h3>
                      <p className="text-sm text-muted-foreground">
                        {partner?.store?.address.street}, {partner?.store?.address.number} <br />{' '}
                        {partner?.store?.address.city} , {partner?.store?.address.state}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-5 w-5 text-[#9A3B72] mt-0.5" />
                    <div>
                      <h3 className="font-medium">Telefone</h3>
                      <p className="text-sm text-muted-foreground">{partner?.contact}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Globe className="h-5 w-5 text-[#9A3B72] mt-0.5" />
                    <div>
                      <h3 className="font-medium">Website</h3>
                      <p className="text-sm text-muted-foreground">teewgewg</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-[#9A3B72] mt-0.5" />
                    <div>
                      <h3 className="font-medium">Horário de Funcionamento</h3>
                      <p className="text-sm text-muted-foreground">323232</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Galeria</h2>
              <div className="grid grid-cols-2 gap-2">
                {/* {store.gallery.map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-md overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Galeria ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))} */}
              </div>
              <Button variant="outline" className="w-full mt-4">
                Ver todas as fotos
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="products" className="w-full">
        <TabsList className="bg-transparent p-0 h-10 border-b">
          <TabsTrigger
            value="products"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-[#9A3B72] data-[state=active]:bg-transparent"
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Produtos
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-[#9A3B72] data-[state=active]:bg-transparent"
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Avaliações
          </TabsTrigger>
          <TabsTrigger
            value="events"
            className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-[#9A3B72] data-[state=active]:bg-transparent"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Eventos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Produtos em Destaque</h2>
            <Button variant="outline">Ver todos</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* {store.products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                discountPrice={product.discountPrice}
                imageUrl={product.imageUrl}
                featured={product.featured}
              />
            ))} */}
          </div>
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Avaliações de Profissionais</h2>
            <Button>Avaliar</Button>
          </div>
          <div className="space-y-4">
            {/* {store.reviews.map((review) => (
              <ReviewCard
                key={review.id}
                name={review.name}
                profession={review.profession}
                rating={review.rating}
                date={review.date}
                comment={review.comment}
                imageUrl={review.imageUrl}
              />
            ))} */}
          </div>
          <div className="flex justify-center mt-6">
            <Button variant="outline">Ver todas as avaliações</Button>
          </div>
        </TabsContent>

        <TabsContent value="events" className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Próximos Eventos</h2>
          </div>
          <div className="space-y-4">
            {/* {store.events.map((event) => (
              <Card key={event.id}>
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{event.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                        <Clock className="h-4 w-4 ml-2" />
                        <span>{event.time}</span>
                      </div>
                      <p className="mt-2">{event.description}</p>
                    </div>
                    <Button className="bg-[#9A3B72] hover:bg-[#7A2D5A] md:self-center">Participar</Button>
                  </div>
                </CardContent>
              </Card>
            ))} */}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
