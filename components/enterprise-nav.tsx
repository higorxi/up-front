"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Home,
  Package,
  Tag,
  Users,
  Calendar,
  MessageSquare,
  BarChart,
  Settings,
  Store,
  Bell,
  Award,
  FileText,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface EnterpriseNavProps {
  collapsed: boolean;
}

export function EnterpriseNav({ collapsed }: EnterpriseNavProps) {
  const pathname = usePathname();

  // Organize navigation items by sections
  const navSections = [
    {
      items: [
        {
          title: "Início",
          href: "/enterprise/dashboard",
          icon: Home,
        },
      ],
    },
    {
      items: [
        {
          title: "Produtos",
          href: "/enterprise/dashboard/products",
          icon: Package,
        },
        {
          title: "Profissionais",
          href: "/enterprise/dashboard/professionals",
          icon: Users,
        },
      ],
    },
    {
      items: [
        {
          title: "Eventos",
          href: "/enterprise/dashboard/events",
          icon: Calendar,
        },
        {
          title: "Workshops",
          href: "/enterprise/dashboard/workshops",
          icon: Award,
        },
      ],
    },
    {
      items: [
        {
          title: "Notificações",
          href: "/enterprise/dashboard/notifications",
          icon: Bell,
        },
      ],
    },
    {
      items: [
        {
          title: "Analytics",
          href: "/enterprise/dashboard/analytics",
          icon: BarChart,
        },
        {
          title: "Relatórios",
          href: "/enterprise/dashboard/reports",
          icon: FileText,
        },
      ],
    },
    {
      items: [
        {
          title: "Perfil da Loja",
          href: "/enterprise/dashboard/profile",
          icon: Store,
        },
        {
          title: "Configurações",
          href: "/enterprise/dashboard/settings",
          icon: Settings,
        },
      ],
    },
  ];

  if (collapsed) {
    return (
      <TooltipProvider delayDuration={0}>
        <nav className="flex flex-col items-center gap-4 px-2 py-4 h-full overflow-y-auto scrollbar-hide">
          {navSections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="flex w-full flex-col items-center gap-1"
            >
              {section.items.map((item, index) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex h-9 w-9 items-center justify-center rounded-md transition-colors",
                          isActive
                            ? "bg-[#2A4D5A] text-white"
                            : "text-gray-300 hover:bg-[#2A4D5A] hover:text-white"
                        )}
                      >
                        <Icon className="h-4 w-4" />
                        <span className="sr-only">{item.title}</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">{item.title}</TooltipContent>
                  </Tooltip>
                );
              })}
              {sectionIndex < navSections.length - 1 && (
                <div className="my-1 h-px w-6 bg-[#2A4D5A]"></div>
              )}
            </div>
          ))}
        </nav>
      </TooltipProvider>
    );
  }

  return (
    <nav className="flex flex-col gap-4 px-3 py-4 h-full overflow-y-auto">
      {navSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="flex flex-col gap-1">
          {section.items.map((item, index) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                  isActive
                    ? "bg-[#2A4D5A] text-white"
                    : "text-gray-300 hover:bg-[#2A4D5A] hover:text-white"
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{item.title}</span>
              </Link>
            );
          })}
          {sectionIndex < navSections.length - 1 && (
            <div className="my-1 h-px w-full bg-[#2A4D5A]"></div>
          )}
        </div>
      ))}
    </nav>
  );
}
