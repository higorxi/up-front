"use client"

import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@radix-ui/react-dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { X, CheckCircle, MessageSquare, MapPin, Star, Clock, Linkedin, Instagram, Globe, GraduationCap, Briefcase, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { DialogHeader } from "./ui/dialog";
import { Button } from "./ui/button";
import { ProfessionalCardProps } from "@/types/Professional/ProfessionalCardProps";

export default function ProfessionalModal({ 
    name, 
    profession, 
    description, 
    location, 
    imageUrl, 
    featured = false, 
    verified = false 
  }: ProfessionalCardProps ){
    const [open, setOpen] = useState(false);
    
    const professionalData = {
      bio: `${name} é um profissional experiente e qualificado em ${profession}. Com anos de experiência no mercado, oferece serviços de alta qualidade e atendimento personalizado. ${description}`,
      reviewCount: 126,
      availability: "Disponível em 1-2 dias úteis",
      experience: "8 anos de experiência",
      education: "Formação completa em ",
      socialMedia: {
        linkedin: "https://linkedin.com/in/profissional",
        instagram: "https://instagram.com/profissional",
        website: "https://profissional.com.br"
      },
      contact: {
        phone: "+55 11 99999-9999",
        email: `teste@email.com`
      },
    };
  
    return (
      <Dialog open={open} onOpenChange={setOpen} modal={true}>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm">
            Ver Perfil
          </Button>
        </DialogTrigger>
        
        {/* Overlay com fundo escuro */}
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" style={{ display: open ? 'block' : 'none' }} />
        
        {/* Conteúdo do modal em tela cheia */}
        <DialogContent className="fixed inset-0 w-full h-full md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:h-[90vh] md:w-[90vw] md:max-w-5xl bg-white shadow-xl z-50 overflow-y-auto p-0 border-none rounded-none md:rounded-lg">
          {/* Botão para fechar o modal */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-4 top-4 z-10 shadow-md hover:bg-gray-100 rounded-full transition-all duration-200"
            onClick={() => setOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
          
          <DialogHeader className="p-6 sm:p-8 ">
            <div className="flex flex-col md:flex-row gap-6 mb-4">
              <div className="relative h-40 w-40 rounded-full overflow-hidden border-4 border-[#9A3B72] flex-shrink-0 mx-auto md:mx-0">
                <img src={imageUrl || "/placeholder.svg"} alt={name} className="object-cover h-full w-full" />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <DialogTitle className="text-3xl font-bold flex flex-wrap justify-center md:justify-start items-center gap-2">
                      {name}
                      {featured && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#F9B000] text-[#3A0F2D]">
                          Destaque
                        </span>
                      )}
                      {verified && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                          <CheckCircle className="h-4 w-4 mr-1" /> Verificado
                        </span>
                      )}
                    </DialogTitle>
                    <DialogDescription className="text-xl mt-1">{profession}</DialogDescription>
                  </div>
                  
                  <div className="flex gap-2 justify-center md:justify-end pr-8">
                    <Button 
                      size="sm" 
                      className="gap-1 bg-[#9A3B72] hover:bg-[#7A2D5A] transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      <MessageSquare className="h-4 w-4" />
                      Contatar
                    </Button>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 mt-3 justify-center md:justify-start">
                  <div className="flex items-center gap-1">
                    <div className="bg-[#9A3B72]/10 p-1 rounded-full">
                      <MapPin className="h-4 w-4 text-[#9A3B72]" />
                    </div>
                    <span className="text-sm">{location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="bg-[#9A3B72]/10 p-1 rounded-full">
                      <Clock className="h-4 w-4 text-[#9A3B72]" />
                    </div>
                    <span className="text-sm">{professionalData.availability}</span>
                  </div>
                </div>
                
                <div className="flex gap-3 mt-3 justify-center md:justify-start">
                  <a href={professionalData.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-10 w-10 rounded-full bg-blue-50 hover:bg-blue-100 transition-all duration-200 transform hover:scale-110"
                    >
                      <Linkedin className="h-5 w-5 text-blue-600" />
                    </Button>
                  </a>
                  <a href={professionalData.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-10 w-10 rounded-full bg-pink-50 hover:bg-pink-100 transition-all duration-200 transform hover:scale-110"
                    >
                      <Instagram className="h-5 w-5 text-pink-600" />
                    </Button>
                  </a>
                  <a href={professionalData.socialMedia.website} target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-10 w-10 rounded-full bg-gray-50 hover:bg-gray-100 transition-all duration-200 transform hover:scale-110"
                    >
                      <Globe className="h-5 w-5 text-gray-600" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </DialogHeader>
          
          <div className="px-6 sm:px-8 pt-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <p className="text-sm text-green-800">
                <strong>Profissional verificado:</strong> Já contratamos este profissional e garantimos sua qualidade de serviço.
              </p>
            </div>
            
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="w-full flex p-1 bg-gray-100 rounded-lg mb-6">
                <TabsTrigger 
                  value="about" 
                  className="flex-1 py-3 data-[state=active]:bg-white data-[state=active]:text-[#9A3B72] data-[state=active]:shadow-md rounded-md transition-all duration-200"
                >
                  Sobre
                </TabsTrigger>
                <TabsTrigger 
                  value="qualifications" 
                  className="flex-1 py-3 data-[state=active]:bg-white data-[state=active]:text-[#9A3B72] data-[state=active]:shadow-md rounded-md transition-all duration-200"
                >
                  Qualificações
                </TabsTrigger>
                <TabsTrigger 
                  value="contact" 
                  className="flex-1 py-3 data-[state=active]:bg-white data-[state=active]:text-[#9A3B72] data-[state=active]:shadow-md rounded-md transition-all duration-200"
                >
                  Contato
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="about" className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-lg font-medium mb-2 text-[#9A3B72]">Biografia</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{professionalData.bio}</p>
                </div>
              </TabsContent>
              
              <TabsContent value="qualifications" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="bg-[#9A3B72]/10 p-2 rounded-full">
                      <GraduationCap className="h-5 w-5 text-[#9A3B72]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#9A3B72]">Educação</h4>
                      <p className="text-sm text-gray-700 mt-1">{professionalData.education}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="bg-[#9A3B72]/10 p-2 rounded-full">
                      <Briefcase className="h-5 w-5 text-[#9A3B72]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#9A3B72]">Experiência</h4>
                      <p className="text-sm text-gray-700 mt-1">{professionalData.experience}</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="contact" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="bg-[#9A3B72]/10 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-[#9A3B72]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#9A3B72]">Telefone</h4>
                      <p className="text-sm text-gray-700 mt-1">{professionalData.contact.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="bg-[#9A3B72]/10 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-[#9A3B72]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#9A3B72]">Email</h4>
                      <p className="text-sm text-gray-700 mt-1">{professionalData.contact.email}</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button className="w-full bg-[#9A3B72] hover:bg-[#7A2D5A] gap-2 py-6 text-lg font-medium shadow-md hover:shadow-lg transform transition-all duration-200 hover:translate-y-[-2px]">
                    <MessageSquare className="h-5 w-5" />
                    Enviar mensagem agora
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="h-16"></div>
        </DialogContent>
      </Dialog>
    );
  }