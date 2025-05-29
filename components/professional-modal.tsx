import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { 
  X, CheckCircle, MessageSquare, MapPin, Star, 
  Linkedin, Instagram, Globe, GraduationCap, 
  Briefcase, Phone, Mail, Calendar 
} from "lucide-react";
import { useState } from "react";
import { DialogHeader } from "./ui/dialog";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

interface ProfessionalData {
  id: string;
  name: string;
  profession: string;
  description: string;
  phone: string;
  email?: string;
  state: string;
  city: string;
  district: string;
  street?: string;
  number?: string;
  complement?: string;
  zipCode: string;
  socialMediaId?: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  availableDays: Array<{
    id: string;
    dayOfWeek: string;
    listedProfessionalId: string;
  }>;
  socialMedia?: {
    id: string;
    linkedin?: string;
    instagram?: string;
    whatsapp?: string;
  };
}

interface ProfessionalModalProps {  
  professional: ProfessionalData;
  imageUrl?: string;
  featured?: boolean;
  verified?: boolean;
}

export default function ProfessionalModal({ 
  professional,
  imageUrl,
  featured = false,
  verified = false 
}: ProfessionalModalProps) {
  const [open, setOpen] = useState(false);
  
  const location = `${professional.district}, ${professional.city} - ${professional.state}`;
  const fullAddress = [
    professional.street,
    professional.number,
    professional.complement,
    professional.district,
    professional.city,
    professional.state,
    professional.zipCode
  ].filter(Boolean).join(', ');
  
  const dayTranslations = {
    'MONDAY': 'Segunda-feira',
    'TUESDAY': 'Terça-feira', 
    'WEDNESDAY': 'Quarta-feira',
    'THURSDAY': 'Quinta-feira',
    'FRIDAY': 'Sexta-feira',
    'SATURDAY': 'Sábado',
    'SUNDAY': 'Domingo'
  };
  
  const availableDaysFormatted = professional.availableDays
    .map(day => dayTranslations[day.dayOfWeek as keyof typeof dayTranslations])
    .join(', ');
  
  const yearsOfExperience = Math.max(1, new Date().getFullYear() - new Date(professional.createdAt).getFullYear());
  
  const professionalData = {
    bio: `${professional.name} é um profissional experiente e qualificado em ${professional.profession}. Com anos de experiência no mercado, oferece serviços de alta qualidade e atendimento personalizado. ${professional.description}`,
    reviewCount: Math.floor(Math.random() * 200) + 50,
    availability: `Disponível: ${availableDaysFormatted}`,
    experience: `${yearsOfExperience} anos de experiência`,
    education: `Formação completa em ${professional.profession}`,
    socialMedia: {
      linkedin: professional.socialMedia?.linkedin || null,
      instagram: professional.socialMedia?.instagram || null,
      website: null
    },
    contact: {
      phone: professional.phone,
      email: professional.email || `contato@${professional.name.toLowerCase().replace(/\s+/g, '')}.com`,
      whatsapp: professional.socialMedia?.whatsapp || professional.phone
    },
    address: fullAddress
  };

  return (
    <Dialog open={open} onOpenChange={setOpen} modal={true}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
          className="bg-magenta/10 hover:bg-magenta/20 text-magenta-dark border-magenta/30 
                    hover:border-magenta transition-all duration-300 font-medium"
        >
          Ver Perfil
        </Button>
      </DialogTrigger>
      
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" 
        style={{ display: open ? 'block' : 'none' }} 
      />
      
      <DialogContent className="fixed inset-0 w-full h-full md:inset-auto md:left-1/2 md:top-1/2 
                               md:-translate-x-1/2 md:-translate-y-1/2 md:h-[90vh] md:w-[90vw] 
                               md:max-w-5xl bg-white/95 shadow-xl z-50 overflow-hidden p-0 
                               border-none rounded-none md:rounded-2xl">
        <DialogTitle className="sr-only">Perfil de {professional.name}</DialogTitle>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute right-4 top-4 z-10 shadow-md bg-white/90 hover:bg-white 
                    rounded-full transition-all duration-300 transform hover:rotate-90"
          onClick={() => setOpen(false)}
        >
          <X className="h-5 w-5 text-magenta-dark" />
        </Button>
        
        <div className="h-full flex flex-col">
          <DialogHeader className="flex-shrink-0 p-6 sm:p-8 bg-gradient-to-r from-magenta to-magenta-light 
                                backdrop-blur-sm border-b border-magenta-dark/20">
            <div className="flex flex-col md:flex-row gap-6 mb-4">
              <div className="relative h-40 w-40 rounded-full overflow-hidden border-4 border-gold 
                           flex-shrink-0 mx-auto md:mx-0 shadow-lg transform transition-all 
                           duration-500 hover:scale-105">
                <img 
                  src={imageUrl} 
                  alt={professional.name} 
                  className="object-cover h-full w-full" 
                />
                {featured && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gold text-magenta-dark text-xs 
                              font-bold text-center py-1 shadow-md">
                    DESTAQUE
                  </div>
                )}
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h2 className="text-3xl font-bold flex flex-wrap justify-center md:justify-start 
                                items-center gap-2 text-white">
                      {professional.name}
                      <div className="flex gap-2 mt-2 md:mt-0">
                        {featured && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm 
                                       font-medium bg-gold text-magenta-dark transform transition-all 
                                       duration-300 hover:scale-105">
                            <Star className="h-3 w-3 mr-1" />
                            Destaque
                          </span>
                        )}
                        {verified && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm 
                                       font-medium bg-green-100 text-green-800 transform transition-all 
                                       duration-300 hover:scale-105">
                            <CheckCircle className="h-3 w-3 mr-1" /> 
                            Verificado
                          </span>
                        )}
                      </div>
                    </h2>
                    <p className="text-xl mt-1 text-gold-light font-medium">{professional.profession}</p>
                  </div>
                  
                  <div className="flex gap-2 justify-center md:justify-end pr-0 md:pr-8 mt-3 md:mt-0">
                    <Button 
                      size="sm" 
                      className="gap-1 bg-gold hover:bg-gold-dark transition-all duration-300 transform 
                             hover:scale-105 shadow-md hover:shadow-lg text-magenta-dark font-semibold"
                    >
                      <MessageSquare className="h-4 w-4" />
                      Contatar
                    </Button>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 mt-4 justify-center md:justify-start">
                  <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full 
                               transition-all duration-300 hover:bg-white/30">
                    <MapPin className="h-4 w-4 text-gold" />
                    <span className="text-sm text-white">{location}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full 
                               transition-all duration-300 hover:bg-white/30">
                    <Calendar className="h-4 w-4 text-gold" />
                    <span className="text-sm text-white">
                      {availableDaysFormatted.split(', ').slice(0, 2).join(', ')}
                      {professional.availableDays.length > 2 && '...'}
                    </span>
                  </div>
                </div>
                
                <div className="flex gap-3 mt-4 justify-center md:justify-start">
                  {professionalData.socialMedia.linkedin && (
                    <a 
                      href={professionalData.socialMedia.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="LinkedIn profile"
                    >
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-10 w-10 rounded-full bg-white/20 hover:bg-white/30 
                               transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                      >
                        <Linkedin className="h-5 w-5 text-white" />
                      </Button>
                    </a>
                  )}
                  {professionalData.socialMedia.instagram && (
                    <a 
                      href={`https://instagram.com/${professionalData.socialMedia.instagram.replace('@', '')}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Instagram profile"
                    >
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-10 w-10 rounded-full bg-white/20 hover:bg-white/30 
                               transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                      >
                        <Instagram className="h-5 w-5 text-white" />
                      </Button>
                    </a>
                  )}
                  {professionalData.socialMedia.website && (
                    <a 
                      href={professionalData.socialMedia.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Website"
                    >
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-10 w-10 rounded-full bg-white/20 hover:bg-white/30 
                               transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                      >
                        <Globe className="h-5 w-5 text-white" />
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </DialogHeader>
          
          <div className="flex-1 overflow-y-auto">
            <div className="px-6 sm:px-8 py-6">
              {verified && (
                <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-300 
                          rounded-lg p-4 mb-6 flex items-center gap-3 shadow-sm transform 
                          transition-all duration-300 hover:shadow-md">
                  <div className="bg-green-200 p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-green-700" />
                  </div>
                  <p className="text-sm text-green-800">
                    <strong>Profissional verificado:</strong> Já contratamos este profissional e 
                    garantimos sua qualidade de serviço.
                  </p>
                </div>
              )}
              
              <Tabs defaultValue="about" className="w-full">
                <TabsList className="w-full flex p-1 bg-gradient-to-r from-magenta/5 to-magenta/10 
                               rounded-lg mb-6 border border-magenta/20">
                  <TabsTrigger 
                    value="about" 
                    className="flex-1 py-3 data-[state=active]:bg-gradient-to-r 
                         data-[state=active]:from-magenta data-[state=active]:to-magenta-light 
                         data-[state=active]:text-white data-[state=active]:shadow-md rounded-md 
                         transition-all duration-300 text-magenta-dark font-medium"
                  >
                    Sobre
                  </TabsTrigger>
                  <TabsTrigger 
                    value="availability" 
                    className="flex-1 py-3 data-[state=active]:bg-gradient-to-r 
                         data-[state=active]:from-magenta data-[state=active]:to-magenta-light 
                         data-[state=active]:text-white data-[state=active]:shadow-md rounded-md 
                         transition-all duration-300 text-magenta-dark font-medium"
                  >
                    Disponibilidade
                  </TabsTrigger>
                  <TabsTrigger 
                    value="contact" 
                    className="flex-1 py-3 data-[state=active]:bg-gradient-to-r 
                         data-[state=active]:from-magenta data-[state=active]:to-magenta-light 
                         data-[state=active]:text-white data-[state=active]:shadow-md rounded-md 
                         transition-all duration-300 text-magenta-dark font-medium"
                  >
                    Contato
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="about" className="space-y-4 animate-in fade-in-50 duration-300">
                  <div className="bg-gradient-to-br from-white to-gold/5 backdrop-blur-sm p-5 
                            rounded-lg shadow-sm border border-gold/20 transform transition-all 
                            duration-300 hover:shadow-md">
                    <h3 className="text-lg font-medium mb-2 text-magenta flex items-center gap-2">
                      <span className="h-6 w-1 bg-magenta rounded-full"></span>
                      Biografia
                    </h3>
                    <p className="text-sm text-magenta-dark/90 leading-relaxed">{professionalData.bio}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 bg-gradient-to-br from-white to-terracota/5 
                              backdrop-blur-sm p-5 rounded-lg shadow-sm border border-terracota/20 
                              transform transition-all duration-300 hover:shadow-md group">
                      <div className="bg-terracota/10 p-2 rounded-full group-hover:bg-terracota/20 
                                transition-all duration-300">
                        <GraduationCap className="h-5 w-5 text-terracota" />
                      </div>
                      <div>
                        <h4 className="font-medium text-terracota-dark">Educação</h4>
                        <p className="text-sm text-magenta-dark/80 mt-1">{professionalData.education}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-gradient-to-br from-white to-ruby/5 
                              backdrop-blur-sm p-5 rounded-lg shadow-sm border border-ruby/20 
                              transform transition-all duration-300 hover:shadow-md group">
                      <div className="bg-ruby/10 p-2 rounded-full group-hover:bg-ruby/20 
                                transition-all duration-300">
                        <Briefcase className="h-5 w-5 text-ruby" />
                      </div>
                      <div>
                        <h4 className="font-medium text-ruby-dark">Experiência</h4>
                        <p className="text-sm text-magenta-dark/80 mt-1">{professionalData.experience}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-white to-magenta/5 backdrop-blur-sm p-5 
                            rounded-lg shadow-sm border border-magenta/20 transform transition-all 
                            duration-300 hover:shadow-md">
                    <h3 className="text-lg font-medium mb-2 text-magenta flex items-center gap-2">
                      <span className="h-6 w-1 bg-magenta rounded-full"></span>
                      Endereço
                    </h3>
                    <p className="text-sm text-magenta-dark/80 leading-relaxed">{professionalData.address}</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="availability" className="space-y-4 animate-in fade-in-50 duration-300">
                  <div className="bg-gradient-to-br from-white to-gold/5 backdrop-blur-sm p-5 
                            rounded-lg shadow-sm border border-gold/20 transform transition-all 
                            duration-300 hover:shadow-md">
                    <h3 className="text-lg font-medium mb-3 text-magenta flex items-center gap-2">
                      <span className="h-6 w-1 bg-magenta rounded-full"></span>
                      Dias Disponíveis
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {professional.availableDays.map((day) => (
                        <div 
                          key={day.id} 
                          className="flex items-center gap-2 p-3 bg-gradient-to-r from-white to-magenta/5 
                                rounded-lg border border-magenta/20 transform transition-all 
                                duration-300 hover:shadow-md hover:bg-magenta/10 group"
                        >
                          <div className="bg-magenta/10 p-1.5 rounded-full group-hover:bg-magenta/20 
                                    transition-all duration-300">
                            <Calendar className="h-4 w-4 text-magenta" />
                          </div>
                          <span className="text-sm font-medium text-magenta-dark">
                            {dayTranslations[day.dayOfWeek as keyof typeof dayTranslations]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-white to-terracota/5 border border-terracota/20 
                            rounded-lg p-5 shadow-sm transform transition-all duration-300 
                            hover:shadow-md">
                    <h4 className="font-medium text-terracota-dark mb-2 flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-terracota" />
                      Informações de Agendamento
                    </h4>
                    <p className="text-sm text-terracota-dark/90 leading-relaxed">
                      Este profissional está disponível nos dias indicados acima. 
                      Entre em contato para verificar horários específicos e agendar seu serviço.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="contact" className="space-y-4 animate-in fade-in-50 duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 bg-gradient-to-br from-white to-ruby/5 
                              backdrop-blur-sm p-5 rounded-lg shadow-sm border border-ruby/20 
                              transform transition-all duration-300 hover:shadow-md group">
                      <div className="bg-ruby/10 p-2 rounded-full group-hover:bg-ruby/20 
                                transition-all duration-300">
                        <Phone className="h-5 w-5 text-ruby" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-ruby-dark">Telefone</h4>
                        <p className="text-sm text-magenta-dark/80 mt-1">{professionalData.contact.phone}</p>
                      </div>
                      <Button 
                        size="sm" 
                        className="bg-ruby/10 hover:bg-ruby/20 text-ruby-dark border-ruby/20 
                             hover:border-ruby/40 transform transition-all duration-300"
                      >
                        Ligar
                      </Button>
                    </div>
                    
                    {professional.email && (
                      <div className="flex items-center gap-3 bg-gradient-to-br from-white to-terracota/5 
                                backdrop-blur-sm p-5 rounded-lg shadow-sm border border-terracota/20 
                                transform transition-all duration-300 hover:shadow-md group">
                        <div className="bg-terracota/10 p-2 rounded-full group-hover:bg-terracota/20 
                                  transition-all duration-300">
                          <Mail className="h-5 w-5 text-terracota" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-terracota-dark">Email</h4>
                          <p className="text-sm text-magenta-dark/80 mt-1 truncate">{professional.email}</p>
                        </div>
                        <Button 
                          size="sm" 
                          className="bg-terracota/10 hover:bg-terracota/20 text-terracota-dark 
                               border-terracota/20 hover:border-terracota/40 transform 
                               transition-all duration-300"
                        >
                          Enviar
                        </Button>
                      </div>
                    )}
                  </div>
                  
                  <div className="pt-6">
                    <Button 
                      className="w-full bg-gradient-to-r from-magenta to-magenta-light hover:from-magenta-dark 
                           hover:to-magenta gap-2 py-6 text-lg font-medium shadow-md hover:shadow-lg 
                           transform transition-all duration-300 hover:translate-y-[-2px] text-white 
                           rounded-xl"
                    >
                      <MessageSquare className="h-5 w-5" />
                      Enviar mensagem agora
                    </Button>
                    
                    <p className="text-xs text-center text-magenta-dark/60 mt-3">
                      Resposta garantida em até 24 horas nos dias úteis
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}