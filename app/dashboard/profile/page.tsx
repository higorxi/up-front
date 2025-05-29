"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { profissionaisService } from "@/services/profissionais-service"
import Cookies from 'js-cookie';

export default function ProfilePage() {
  const [userCookie, setUserCookie] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  // Estados para os formulários
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    profession: '',
    description: '',
    experience: '',
    officeName: '',
    phone: '',
    document: '',
    generalRegister: '',
    registrationAgency: ''
  });

  const [addressData, setAddressData] = useState({
    street: '',
    number: '',
    complement: '',
    district: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [originalFormData, setOriginalFormData] = useState({});
  const [originalAddressData, setOriginalAddressData] = useState({});

  // Função para atualizar o cookie com os novos dados
  const updateUserCookie = (updatedData: any) => {
    try {
      const currentCookie = Cookies.get('user');
      if (currentCookie) {
        const parsedCookie = JSON.parse(currentCookie);
        
        // Atualizar os dados do profissional no cookie
        const updatedCookie = {
          ...parsedCookie,
          professional: {
            ...parsedCookie.professional,
            ...updatedData,
            // Se houver dados de endereço, mesclar com o endereço existente
            ...(updatedData.address && {
              address: {
                ...parsedCookie.professional.address,
                ...updatedData.address
              }
            }),
            // Se houver dados de usuário, mesclar com o usuário existente
            ...(updatedData.user && {
              user: {
                ...parsedCookie.professional.user,
                ...updatedData.user
              }
            })
          }
        };
        
        // Salvar o cookie atualizado
        Cookies.set('user', JSON.stringify(updatedCookie), { expires: 7 });
        
        // Atualizar o estado local
        setUserCookie(updatedCookie);
        
        // Atualizar também o estado do usuário
        setUser(prev => ({
          ...prev,
          ...updatedData,
          // Mesclar endereço se existir
          ...(updatedData.address && {
            address: {
              ...prev.address,
              ...updatedData.address
            }
          }),
          // Mesclar dados do usuário se existir
          ...(updatedData.user && {
            user: {
              ...prev.user,
              ...updatedData.user
            }
          })
        }));

        window.location.href = 'http://localhost:3001/dashboard/profile'
      }
    } catch (error) {
      console.error('Erro ao atualizar cookie:', error);
    }
  };

  useEffect(() => {
    const fetchUserLogged = () => {
      try {
        const userCookie = Cookies.get('user');
        if (userCookie) {
          setUserCookie(JSON.parse(userCookie));
        }
      } catch (error) {
        console.error('Erro ao buscar cookie do usuário:', error);
      }
    };
  
    fetchUserLogged();
  }, []);

  useEffect(() => {
    const fetchProfessional = async () => {
      if (!userCookie) return;
      
      try {
        setLoading(true);
        const data = await profissionaisService.obterProfissionalPorId(userCookie.professional.id);
        
        if (data) {
          const professional = data;
          setUser(professional);

          const currentFormData = {
            name: professional.name || '',
            email: professional.user?.email || '',
            profession: professional.profession || '',
            description: professional.description || '',
            experience: professional.experience || '',
            officeName: professional.officeName || '',
            phone: professional.phone || '',
            document: professional.document || '',
            generalRegister: professional.generalRegister || '',
            registrationAgency: professional.registrationAgency || ''
          };
          
          setFormData(currentFormData);
          setOriginalFormData(currentFormData);

          const currentAddressData = {
            street: professional.address?.street || '',
            number: professional.address?.number || '',
            complement: professional.address?.complement || '',
            district: professional.address?.district || '',
            city: professional.address?.city || '',
            state: professional.address?.state || '',
            zipCode: professional.address?.zipCode || ''
          };
          
          setAddressData(currentAddressData);
          setOriginalAddressData(currentAddressData);
        }
        
        console.log('dados do usuario', data)
      } catch (error) {
        console.error('Erro ao buscar profissional:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfessional();
  }, [userCookie]);

  const handleFormChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddressChange = (field: string, value: string) => {
    setAddressData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePasswordChange = (field: string, value: string) => {
    setPasswordData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Função para obter apenas os campos alterados
  const getChangedFields = (original: any, current: any) => {
    const changes: any = {};
    Object.keys(current).forEach(key => {
      if (original[key] !== current[key]) {
        changes[key] = current[key];
      }
    });
    return changes;
  };

  const handleSavePersonalInfo = async () => {
    try {
      const personalFields = {
        name: formData.name,
        phone: formData.phone,
        document: formData.document,
        email: formData.email
      };
      
      const originalPersonalFields = {
        name: originalFormData.name,
        phone: originalFormData.phone,
        document: originalFormData.document,
        email: originalFormData.email
      };
      
      const changedFields = getChangedFields(originalPersonalFields, personalFields);
      
      if (Object.keys(changedFields).length === 0) {
        alert('Nenhuma alteração foi feita');
        return;
      }
      
      const updateData: any = {};
      
      if (changedFields.name) updateData.name = changedFields.name;
      if (changedFields.phone) updateData.phone = changedFields.phone;
      if (changedFields.document) updateData.document = changedFields.document;
      if (changedFields.email) updateData.user = { email: changedFields.email };
      
      await profissionaisService.atualizarProfissional(userCookie.professional.id, updateData);

      // Atualizar cookie após salvar com sucesso
      updateUserCookie(updateData);

      setOriginalFormData(prev => ({ ...prev, ...personalFields }));
      
      alert('Informações pessoais atualizadas com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar informações:', error);
      alert('Erro ao salvar informações pessoais');
    }
  };

  const handleSaveProfessionalInfo = async () => {
    try {
      const professionalFields = {
        profession: formData.profession,
        officeName: formData.officeName,
        generalRegister: formData.generalRegister,
        registrationAgency: formData.registrationAgency,
        description: formData.description,
        experience: formData.experience
      };
      
      const originalProfessionalFields = {
        profession: originalFormData.profession,
        officeName: originalFormData.officeName,
        generalRegister: originalFormData.generalRegister,
        registrationAgency: originalFormData.registrationAgency,
        description: originalFormData.description,
        experience: originalFormData.experience
      };
      
      const changedFields = getChangedFields(originalProfessionalFields, professionalFields);
      
      if (Object.keys(changedFields).length === 0) {
        alert('Nenhuma alteração foi feita');
        return;
      }
      
      console.log('Salvando informações profissionais:', changedFields);
      
      await profissionaisService.atualizarProfissional(userCookie.professional.id, changedFields);
      
      // Atualizar cookie após salvar com sucesso
      updateUserCookie(changedFields);
      
      // Atualizar dados originais
      setOriginalFormData(prev => ({ ...prev, ...professionalFields }));
      
      alert('Informações profissionais atualizadas com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar informações profissionais:', error);
      alert('Erro ao salvar informações profissionais');
    }
  };

  const handleSaveAddress = async () => {
    try {
      const changedFields = getChangedFields(originalAddressData, addressData);
      
      if (Object.keys(changedFields).length === 0) {
        alert('Nenhuma alteração foi feita');
        return;
      }
      
      console.log('Salvando endereço:', changedFields);
      
      const updateData = {
        address: changedFields
      };
      
      await profissionaisService.atualizarProfissional(userCookie.professional.id, updateData);
      
      // Atualizar cookie após salvar com sucesso
      updateUserCookie(updateData);
      
      // Atualizar dados originais
      setOriginalAddressData(addressData);
      
      alert('Endereço atualizado com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar endereço:', error);
      alert('Erro ao salvar endereço');
    }
  };

  const handleChangePassword = async () => {
    try {
      if (passwordData.newPassword !== passwordData.confirmPassword) {
        alert('As senhas não coincidem');
        return;
      }
      // Implementar lógica de alteração de senha
      console.log('Alterando senha');
    } catch (error) {
      console.error('Erro ao alterar senha:', error);
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'GOLD': return 'bg-yellow-500';
      case 'SILVER': return 'bg-gray-400';
      case 'BRONZE': return 'bg-amber-600';
      default: return 'bg-gray-300';
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg">Carregando...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg text-red-500">Erro ao carregar dados do perfil</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Perfil</h1>
          <p className="text-muted-foreground">Gerencie suas informações pessoais e preferências.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center gap-4">
                  <Avatar className="h-32 w-32">
                    <AvatarImage src={user.profileImage} alt="Avatar" />
                    <AvatarFallback className="text-2xl">{getInitials(user.name)}</AvatarFallback>
                  </Avatar>
                  
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-semibold">{user.name}</h3>
                    <p className="text-muted-foreground">{user.profession}</p>
                    {user.officeName && (
                      <p className="text-sm text-muted-foreground font-medium">{user.officeName}</p>
                    )}
                  </div>
                  
                  <div className="flex gap-2 flex-wrap justify-center">
                    <Badge className={`${getLevelColor(user.level)} text-white`}>
                      {user.level}
                    </Badge>
                    {user.verified && (
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Verificado
                      </Badge>
                    )}
                    {user.featured && (
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        Destaque
                      </Badge>
                    )}
                  </div>

                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{user.points}</div>
                    <div className="text-sm text-muted-foreground">pontos</div>
                  </div>

                  <Button variant="outline" className="w-full">
                    Alterar foto
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="personal">Pessoais</TabsTrigger>
                <TabsTrigger value="professional">Profissional</TabsTrigger>
                <TabsTrigger value="address">Endereço</TabsTrigger>
                <TabsTrigger value="security" disabled>Segurança</TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Informações Pessoais</CardTitle>
                    <CardDescription>Gerencie suas informações pessoais básicas</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome Completo *</Label>
                        <Input 
                          id="name" 
                          value={formData.name} 
                          onChange={(e) => handleFormChange('name', e.target.value)} 
                          placeholder="Digite seu nome completo"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          value={formData.email} 
                          onChange={(e) => handleFormChange('email', e.target.value)} 
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <Input 
                          id="phone" 
                          value={formData.phone} 
                          onChange={(e) => handleFormChange('phone', e.target.value)} 
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="document">Documento (CPF/CNPJ)</Label>
                        <Input 
                          id="document" 
                          value={formData.document} 
                          onChange={(e) => handleFormChange('document', e.target.value)} 
                          placeholder="000.000.000-00"
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end border-t pt-6">
                    <Button onClick={handleSavePersonalInfo} className="min-w-[140px]">
                      Salvar Alterações
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="professional" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Informações Profissionais</CardTitle>
                    <CardDescription>Gerencie suas credenciais e experiências profissionais</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="profession">Profissão *</Label>
                        <Input 
                          id="profession" 
                          value={formData.profession} 
                          onChange={(e) => handleFormChange('profession', e.target.value)} 
                          placeholder="Ex: Mecânico, Arquiteto..."
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="officeName">Nome do Estabelecimento</Label>
                        <Input 
                          id="officeName" 
                          value={formData.officeName} 
                          onChange={(e) => handleFormChange('officeName', e.target.value)} 
                          placeholder="Nome da sua empresa/oficina"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="generalRegister">Registro Profissional</Label>
                        <Input 
                          id="generalRegister" 
                          value={formData.generalRegister} 
                          onChange={(e) => handleFormChange('generalRegister', e.target.value)} 
                          placeholder="Número do registro"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="registrationAgency">Órgão de Registro</Label>
                        <Input 
                          id="registrationAgency" 
                          value={formData.registrationAgency} 
                          onChange={(e) => handleFormChange('registrationAgency', e.target.value)} 
                          placeholder="Ex: CREA, CRM, OAB..."
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="description">Descrição Profissional</Label>
                      <Textarea 
                        id="description" 
                        value={formData.description} 
                        onChange={(e) => handleFormChange('description', e.target.value)} 
                        rows={3} 
                        placeholder="Descreva brevemente seu trabalho e especialidades..."
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="experience">Experiência e Qualificações</Label>
                      <Textarea 
                        id="experience" 
                        value={formData.experience} 
                        onChange={(e) => handleFormChange('experience', e.target.value)} 
                        rows={3} 
                        placeholder="Detalhe sua experiência, cursos e certificações..."
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end border-t pt-6">
                    <Button onClick={handleSaveProfessionalInfo} className="min-w-[140px]">
                      Salvar Informações
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="address" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Endereço Profissional</CardTitle>
                    <CardDescription>Atualize o endereço do seu estabelecimento</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="zipCode">CEP *</Label>
                        <Input 
                          id="zipCode" 
                          value={addressData.zipCode} 
                          onChange={(e) => handleAddressChange('zipCode', e.target.value)} 
                          placeholder="00000-000"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">Estado *</Label>
                        <Input 
                          id="state" 
                          value={addressData.state} 
                          onChange={(e) => handleAddressChange('state', e.target.value)} 
                          placeholder="SP"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">Cidade *</Label>
                        <Input 
                          id="city" 
                          value={addressData.city} 
                          onChange={(e) => handleAddressChange('city', e.target.value)} 
                          placeholder="Nome da cidade"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="district">Bairro *</Label>
                      <Input 
                        id="district" 
                        value={addressData.district} 
                        onChange={(e) => handleAddressChange('district', e.target.value)} 
                        placeholder="Nome do bairro"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="space-y-2 md:col-span-3">
                        <Label htmlFor="street">Logradouro *</Label>
                        <Input 
                          id="street" 
                          value={addressData.street} 
                          onChange={(e) => handleAddressChange('street', e.target.value)} 
                          placeholder="Nome da rua, avenida..."
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="number">Número</Label>
                        <Input 
                          id="number" 
                          value={addressData.number} 
                          onChange={(e) => handleAddressChange('number', e.target.value)} 
                          placeholder="123"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="complement">Complemento</Label>
                      <Input 
                        id="complement" 
                        value={addressData.complement} 
                        onChange={(e) => handleAddressChange('complement', e.target.value)} 
                        placeholder="Apartamento, sala, bloco..."
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end border-t pt-6">
                    <Button onClick={handleSaveAddress} className="min-w-[140px]">
                      Salvar Endereço
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              {/*<TabsContent value="security" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Segurança da Conta</CardTitle>
                    <CardDescription>Altere sua senha para manter sua conta segura</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Senha Atual *</Label>
                      <Input 
                        id="current-password" 
                        type="password" 
                        value={passwordData.currentPassword}
                        onChange={(e) => handlePasswordChange('currentPassword', e.target.value)}
                        placeholder="Digite sua senha atual"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="new-password">Nova Senha *</Label>
                        <Input 
                          id="new-password" 
                          type="password" 
                          value={passwordData.newPassword}
                          onChange={(e) => handlePasswordChange('newPassword', e.target.value)}
                          placeholder="Mínimo 8 caracteres"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirmar Nova Senha *</Label>
                        <Input 
                          id="confirm-password" 
                          type="password" 
                          value={passwordData.confirmPassword}
                          onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)}
                          placeholder="Repita a nova senha"
                        />
                      </div>
                    </div>
                    
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="text-amber-600 mt-0.5">⚠️</div>
                        <div className="text-sm text-amber-800">
                          <p className="font-medium mb-2">Dicas para uma senha segura:</p>
                          <ul className="space-y-1 list-disc list-inside">
                            <li>Use pelo menos 8 caracteres</li>
                            <li>Combine letras maiúsculas, minúsculas e números</li>
                            <li>Inclua símbolos especiais (!@#$%)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end border-t pt-6">
                    <Button onClick={handleChangePassword} className="min-w-[140px]">
                      Atualizar Senha
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              */}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}