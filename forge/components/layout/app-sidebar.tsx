"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { 
  LayoutDashboard, 
  Upload, 
  FileText, 
  Settings, 
  FileEdit,
  Flame
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"

const navigationItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Upload",
    url: "/upload",
    icon: Upload,
  },
  {
    title: "Templates",
    url: "/templates",
    icon: FileText,
  },
  {
    title: "Editor",
    url: "/editor",
    icon: FileEdit,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon" className="border-r border-border">
      {/* Logo Section */}
      <SidebarHeader className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-2 font-semibold">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Flame className="size-5" />
          </div>
          <span className="group-data-[collapsible=icon]:hidden text-lg tracking-tight font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ForgeFlow
          </span>
        </div>
      </SidebarHeader>

      {/* Navigation Content */}
      <SidebarContent className="py-4">
        <SidebarGroup>
          <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden text-xs uppercase tracking-wider font-semibold text-muted-foreground">
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-2">
            <SidebarMenu>
              {navigationItems.map((item) => {
                const isActive = pathname === item.url
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.title}
                      className="w-full justify-start transition-all hover:bg-sidebar-accent"
                    >
                      <Link href={item.url} className="flex items-center gap-3 w-full">
                        <item.icon className="size-5" />
                        <span className="group-data-[collapsible=icon]:hidden font-medium">
                          {item.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Workspace Section / Footer */}
      <SidebarFooter className="p-4 border-t border-border mt-auto">
        <div className="flex items-center gap-3 group-data-[collapsible=icon]:justify-center">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">
            JD
          </div>
          <div className="group-data-[collapsible=icon]:hidden flex flex-col min-w-0">
            <span className="text-sm font-semibold truncate text-foreground">John Doe</span>
            <span className="text-xs text-muted-foreground truncate">johndoe@forgeflow.local</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
