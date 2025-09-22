import { essentials, topycs } from "@/components/sidebar/routes"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { LogOut } from "lucide-react"



export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
              <SidebarMenuItem className="flex items-center ">
                <div className="size-10 flex items-center justify-center bg-purple-600 rounded-full mr-3">
                  <span className="text-2xl">🎓</span>
                </div>
                <div><h1 className="text-xl font-bold">MobiLab UA</h1><span>Nombre del user</span></div>
              </SidebarMenuItem>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>OPCIONES PRINCIPALES</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {essentials.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                     <span>{item.icon}</span>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>JUEGOS INTERACTIVOS</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {topycs.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <span>{item.icon}</span>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuButton>
          <LogOut /> Cerrar Sesión
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  )
}