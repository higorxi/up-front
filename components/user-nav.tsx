'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export function UserNav() {
const router = useRouter();
const [user, setUser] = useState<any>(null);

useEffect(() => {
  const fetchUserLogged = () => {
    try {
      const userCookie = Cookies.get('user');
      if (userCookie) {
        setUser(JSON.parse(userCookie));
      }
    } catch (error) {
      console.error('Erro ao buscar cookie do usuário:', error);
    }
  };

  fetchUserLogged();
}, []);


  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    window.location.href = 'http://localhost:3000/login';
  };

  return (
    <div className="flex items-center gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-11 w-11 border-2 border-primary">
              {/*<AvatarImage src={user?.professional?.profileImage || '/placeholder.svg?height=32&width=32'} alt="Avatar" />*/}
              <AvatarFallback className="bg-[#F9B000] text-[#3A0F2D] font-bold">{user?.professional?.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user?.professional?.name}</p>
              <p className="text-xs leading-none text-muted-foreground">{user?.email}</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => router.push('/dashboard/profile')}>Meu Perfil</DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push('/dashboard/settings')}>Configurações</DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push('/dashboard/benefits')}>Meus Benefícios</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => handleLogout()}>Sair</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
