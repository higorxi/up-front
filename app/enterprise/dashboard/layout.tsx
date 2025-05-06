"use client"

import type { ReactNode } from "react"
import { useState } from "react"
import { EnterpriseNav } from "@/components/enterprise-nav"
import { EnterpriseUserNav } from "@/components/enterprise-user-nav"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Menu } from "lucide-react"
import { cn } from "@/lib/utils"

interface EnterpriseDashboardLayoutProps {
  children: ReactNode
}

export default function EnterpriseDashboardLayout({ children }: EnterpriseDashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex min-h-screen">
      {/* Sidebar - Fixed position */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-16 flex-col bg-[#1F3D4A] transition-all duration-300 md:w-64",
          !sidebarOpen && "md:w-16",
        )}
      >
        {/* Logo area */}
        <div className="flex h-16 items-center justify-center border-b border-[#2A4D5A]">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#F9B000] font-bold text-[#1F3D4A]">
            UP
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-4">
          <EnterpriseNav collapsed={!sidebarOpen} />
        </div>

        {/* Toggle button for desktop */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute -right-3 top-20 hidden h-6 w-6 rounded-full border border-[#2A4D5A] bg-[#1F3D4A] text-white md:flex"
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
              <span className="text-[#F9B000]">UP</span> Parceiros
            </div>
          </div>
          <EnterpriseUserNav />
        </header>
        <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
