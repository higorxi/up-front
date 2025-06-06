"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, Store, Calendar, User, Settings, BookOpen, Gift, Users, ChevronRight } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useState } from "react"
import Cookies from 'js-cookie';


interface NavItem {
  title: string
  href: string
  icon: any
  disabled?: boolean
  tooltip?: string
}

interface NavSection {
  items: NavItem[]
}

interface DashboardNavProps {
  collapsed: boolean
}

export function DashboardNav({ collapsed }: DashboardNavProps) {
  const pathname = usePathname()
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
  
  // Organize navigation items by sections
  const navSections: NavSection[] = [
    {
      items: [
        {
          title: "Início",
          href: "/dashboard",
          icon: Home,
        },
      ],
    },
    {
      items: [
        {
          title: "Profissionais Indicados",
          href: "/dashboard/professionals",
          icon: Users,
        },
        {
          title: "Fornecedores Parceiros",
          href: "/dashboard/stores",
          icon: Store,
        },
        {
          title: "Eventos",
          href: "/dashboard/events",
          icon: Calendar,
          disabled: true,
          tooltip: "Em breve! Esta funcionalidade está sendo desenvolvida."
        },
        {
          title: "Workshops",
          href: "/dashboard/workshops",
          icon: BookOpen,
          disabled: true,
          tooltip: "Em breve! Esta funcionalidade está sendo desenvolvida."
        },
      ],
    },
    {
      items: [
        {
          title: "Meu Perfil",
          href: "/dashboard/profile",
          icon: User,
        },
        {
          title: "Benefícios",
          href: "/dashboard/benefits",
          icon: Gift,
        },
      ],
    },
    {
      items: [
        {
          title: "Configurações",
          href: "/dashboard/settings",
          icon: Settings,
          disabled: true,
          tooltip: "Funcionalidade indisponivel"
        },
      ],
    },
  ]

  const renderUserProfile = () => {
    if (collapsed) {
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/dashboard/profile" className="flex items-center justify-center">
              <Avatar className="h-9 w-9 border-2 border-[#4A1F3D]">
                {/*<AvatarImage src={user?.professional?.profileImage || '/placeholder.svg?height=32&width=32'} alt="Avatar" />*/}
                <AvatarFallback className="bg-[#F9B000] text-[#3A0F2D] font-bold">{user?.professional?.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">{user?.professional?.name}</TooltipContent>
        </Tooltip>
      )
    }

    return (
      <Link
        href="/dashboard/profile"
        className="flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-[#4A1F3D] hover:text-white text-gray-300"
      >
        <Avatar className="h-8 w-8 border-2 border-[#4A1F3D]">
          {/*<AvatarImage src={user?.professional?.profileImage || '/placeholder.svg?height=32&width=32'} alt="Avatar" />*/}
          <AvatarFallback className="bg-[#F9B000] text-[#3A0F2D] font-bold">{user?.professional?.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium">{user?.professional?.name}</span>
          <span className="text-xs text-gray-400">Ver perfil</span>
        </div>
        <ChevronRight className="ml-auto h-4 w-4" />
      </Link>
    )
  }

  const renderNavItem = (item: NavItem, index: number, isCollapsed: boolean) => {
    const Icon = item.icon
    const isActive = pathname === item.href
    const tooltipText = item.tooltip || item.title

    const baseClasses = cn(
      "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
      isCollapsed ? "h-10 w-10 justify-center" : "",
      item.disabled
        ? "text-gray-500 cursor-not-allowed opacity-50"
        : isActive
        ? "bg-[#4A1F3D] text-white"
        : "text-gray-300 hover:bg-[#4A1F3D] hover:text-white"
    )

    const content = (
      <>
        <Icon className="h-5 w-5" />
        {!isCollapsed && <span>{item.title}</span>}
        {isCollapsed && <span className="sr-only">{item.title}</span>}
      </>
    )

    if (item.disabled) {
      return (
        <Tooltip key={index}>
          <TooltipTrigger asChild>
            <div className={baseClasses}>
              {content}
            </div>
          </TooltipTrigger>
          <TooltipContent side={isCollapsed ? "right" : "top"}>
            {tooltipText}
          </TooltipContent>
        </Tooltip>
      )
    }

    const linkElement = (
      <Link
        key={index}
        href={item.href}
        className={baseClasses}
      >
        {content}
      </Link>
    )

    // Se há tooltip customizado e não está disabled, mostra o tooltip
    if (item.tooltip && !item.disabled) {
      return (
        <Tooltip key={index}>
          <TooltipTrigger asChild>
            {linkElement}
          </TooltipTrigger>
          <TooltipContent side={isCollapsed ? "right" : "top"}>
            {tooltipText}
          </TooltipContent>
        </Tooltip>
      )
    }

    // Para navbar colapsada, sempre mostra tooltip com o título
    if (isCollapsed) {
      return (
        <Tooltip key={index}>
          <TooltipTrigger asChild>
            {linkElement}
          </TooltipTrigger>
          <TooltipContent side="right">
            {item.title}
          </TooltipContent>
        </Tooltip>
      )
    }

    return linkElement
  }

  if (collapsed) {
    return (
      <TooltipProvider delayDuration={0}>
        <nav className="flex flex-col items-center gap-6 px-2 py-4 h-full">
          <div className="flex flex-col items-center gap-6 flex-1">
            {navSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="flex w-full flex-col items-center gap-2">
                {section.items.map((item, index) => renderNavItem(item, index, true))}
                {sectionIndex < navSections.length - 1 && <div className="my-2 h-px w-8 bg-[#4A1F3D]"></div>}
              </div>
            ))}
          </div>

          {/* User profile at the bottom */}
          <div className="mt-auto pt-4 border-t border-[#4A1F3D] w-full flex justify-center">{renderUserProfile()}</div>
        </nav>
      </TooltipProvider>
    )
  }

  return (
    <TooltipProvider delayDuration={0}>
      <nav className="flex flex-col gap-6 px-3 py-4 h-full">
        <div className="flex flex-col gap-6 flex-1">
          {navSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="flex flex-col gap-1">
              {section.items.map((item, index) => renderNavItem(item, index, false))}
              {sectionIndex < navSections.length - 1 && <div className="my-2 h-px w-full bg-[#4A1F3D]"></div>}
            </div>
          ))}
        </div>

        {/* User profile at the bottom */}
        <div className="mt-auto pt-4 border-t border-[#4A1F3D] w-full">{renderUserProfile()}</div>
      </nav>
    </TooltipProvider>
  )
}