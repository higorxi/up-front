"use client"

import type { ReactNode } from "react"
import { useState } from "react"
import { DashboardNav } from "@/components/dashboard-nav"
import { UserNav } from "@/components/user-nav"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex min-h-screen">
      {/* Sidebar - Fixed position */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-16 flex-col bg-[#3A0F2D] transition-all duration-300 md:w-64",
          !sidebarOpen && "md:w-16",
        )}
      >
        {/* Logo area */}
        <div className="flex h-24 items-center  justify-center border-b border-[#4A1F3D]">
                  <div className={sidebarOpen ? 'relative w-16 h-16' : 'relative w-10 h-10'}>
              <Image src="/logo-up-completa.svg" alt="UP Club Logo" fill className="object-contain" priority />
            </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-4">
          <DashboardNav collapsed={!sidebarOpen} />
        </div>

        {/* Toggle button for desktop */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute -right-3 top-20 hidden h-6 w-6 rounded-full border border-[#4A1F3D] bg-[#3A0F2D] text-white md:flex"
        >
          <ChevronLeft className={cn("h-4 w-4 transition-transform", !sidebarOpen && "rotate-180")} />
        </Button>
      </aside>

      {/* Main content - With left padding to accommodate the sidebar */}
      <div
        className={cn(
          "flex flex-1 flex-col transition-all duration-300",
          sidebarOpen ? "md:ml-64" : "md:ml-16",
          "ml-16", // Mobile sidebar width
        )}
      >
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
          <div className="flex items-center gap-4">
            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
            <div className="font-bold md:hidden">
              <span className="text-[#F9B000]">UP</span> Clube de Negócios
            </div>
          </div>
          <UserNav />
        </header>
        <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
