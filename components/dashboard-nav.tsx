"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, Store, Calendar, User, Settings, BookOpen, Gift, Users, ChevronRight } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface DashboardNavProps {
  collapsed: boolean
  userName?: string
  userImage?: string
}

export function DashboardNav({ collapsed, userName = "João Silva", userImage }: DashboardNavProps) {
  const pathname = usePathname()

  // Organize navigation items by sections
  const navSections = [
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
          title: "Profissionais",
          href: "/dashboard/professionals",
          icon: Users,
        },
        {
          title: "Lojas Parceiras",
          href: "/dashboard/stores",
          icon: Store,
        },
        {
          title: "Eventos",
          href: "/dashboard/events",
          icon: Calendar,
        },
        {
          title: "Workshops",
          href: "/dashboard/workshops",
          icon: BookOpen,
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
                <AvatarImage src={userImage || "/placeholder.svg"} alt={userName} />
                <AvatarFallback className="bg-[#4A1F3D] text-white">{userName.charAt(0)}</AvatarFallback>
              </Avatar>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">{userName}</TooltipContent>
        </Tooltip>
      )
    }

    return (
      <Link
        href="/dashboard/profile"
        className="flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-[#4A1F3D] hover:text-white text-gray-300"
      >
        <Avatar className="h-8 w-8 border-2 border-[#4A1F3D]">
          <AvatarImage src={userImage || "/placeholder.svg"} alt={userName} />
          <AvatarFallback className="bg-[#4A1F3D] text-white">{userName.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium">{userName}</span>
          <span className="text-xs text-gray-400">Ver perfil</span>
        </div>
        <ChevronRight className="ml-auto h-4 w-4" />
      </Link>
    )
  }

  if (collapsed) {
    return (
      <TooltipProvider delayDuration={0}>
        <nav className="flex flex-col items-center gap-6 px-2 py-4 h-full">
          <div className="flex flex-col items-center gap-6 flex-1">
            {navSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="flex w-full flex-col items-center gap-2">
                {section.items.map((item, index) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href

                  return (
                    <Tooltip key={index}>
                      <TooltipTrigger asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            "flex h-10 w-10 items-center justify-center rounded-md transition-colors",
                            isActive ? "bg-[#4A1F3D] text-white" : "text-gray-300 hover:bg-[#4A1F3D] hover:text-white",
                          )}
                        >
                          <Icon className="h-5 w-5" />
                          <span className="sr-only">{item.title}</span>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side="right">{item.title}</TooltipContent>
                    </Tooltip>
                  )
                })}
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
    <nav className="flex flex-col gap-6 px-3 py-4 h-full">
      <div className="flex flex-col gap-6 flex-1">
        {navSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="flex flex-col gap-1">
            {section.items.map((item, index) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              return (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                    isActive ? "bg-primary text-white" : "text-gray-300 hover:bg-[#4A1F3D] hover:text-white",
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              )
            })}
            {sectionIndex < navSections.length - 1 && <div className="my-2 h-px w-full bg-[#4A1F3D]"></div>}
          </div>
        ))}
      </div>

      {/* User profile at the bottom */}
      <div className="mt-auto pt-4 border-t border-[#4A1F3D] w-full">{renderUserProfile()}</div>
    </nav>
  )
}
