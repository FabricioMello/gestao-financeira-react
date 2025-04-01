import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { LayoutDashboard, PlusCircle } from "lucide-react"
import { Outlet, useNavigate } from "react-router-dom"

export default function SidebarLayout() {
    const navigate = useNavigate()

    return (
        <SidebarProvider>
            <Sidebar>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Sistema</SidebarGroupLabel>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton onClick={() => navigate("/dashboard")}>
                                    <LayoutDashboard className="mr-2 h-4 w-4" />
                                    Dashboard
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton onClick={() => navigate("/nova-transacao")}>
                                    <PlusCircle className="mr-2 h-4 w-4" />
                                    Nova Transação
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
            <SidebarInset>
                {/* Esse botão é para mobile */}
                <div className="p-2 md:hidden">
                    <SidebarTrigger />
                </div>

                {/* Aqui vai o conteúdo das rotas */}
                <Outlet />
            </SidebarInset>
        </SidebarProvider>
    )
}
