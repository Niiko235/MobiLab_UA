import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { getSesion } from "@/features/auth/actions/get-sesion";
import { cookies } from "next/headers";
import { ReactNode } from "react";

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true';


  const response = await getSesion();

  
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar name={response?.sesion?.first_name ?? ''}/>
      <SidebarTrigger />
      <Toaster />
      <main className="min-h-screen w-full">{children}</main>
    </SidebarProvider>
  )
}