'use client'

import { essentials, topycs } from '@/components/sidebar/routes'

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
} from '@/components/ui/sidebar'
import { logout } from '@/features/auth/actions/log-out'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Separator } from '../ui/separator'

type AppSidebarProps = {
  name: string
}

export function AppSidebar({ name }: AppSidebarProps) {
  
  const router = useRouter()

  const handleLogout = async () => {
    const response = await logout()
    if (!response.ok) {
      console.error(response.error)
    } else {
      router.push('/')
    }
  }
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenuItem className="flex items-center ">
              <div className="size-10 flex items-center justify-center bg-purple-600 rounded-full mr-3">
                <span className="text-2xl">🎓</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">MobiLab UA</h1>
                <span>{name}</span>
              </div>
            </SidebarMenuItem>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <Separator></Separator>
          <SidebarGroupLabel>OPCIONES PRINCIPALES</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {essentials.map((item) => (
                <SidebarMenuItem key={item.title} >
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <span className='text-md'>{item.icon}</span>
                      <span className='text-md'>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <Separator></Separator>
          <SidebarGroupLabel>JUEGOS INTERACTIVOS</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {topycs.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <span className='text-md'>{item.icon}</span>
                      <span className='text-md'>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuButton onClick={handleLogout}>
          <LogOut /> Cerrar Sesión
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  )
}
