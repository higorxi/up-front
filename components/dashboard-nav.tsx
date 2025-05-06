"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, Store, Heart, MessageSquare, Calendar, User, Settings, BookOpen, Gift, Users, Bell } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface DashboardNavProps {
  collapsed: boolean
}

export function DashboardNav({ collapsed }: DashboardNavProps) {
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
          title: "Favoritos",
          href: "/dashboard/favorites",
          icon: Heart,
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

  if (collapsed) {
    return (
      <TooltipProvider delayDuration={0}>
        <nav className="flex flex-col items-center gap-6 px-2 py-4">
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
        </nav>
      </TooltipProvider>
    )
  }

  return (
    <nav className="flex flex-col gap-6 px-3 py-4">
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
                  isActive ? "bg-[#4A1F3D] text-white" : "text-gray-300 hover:bg-[#4A1F3D] hover:text-white",
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
    </nav>
  )
}
