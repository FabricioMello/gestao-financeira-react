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
                        <SidebarGroupLabel className={"text-2xl underline p-4"}>Sistema Financeiro</SidebarGroupLabel>
                        <SidebarMenu className={"pt-8"}>
                            <SidebarMenuItem className={"p-2"}>
                                <SidebarMenuButton onClick={() => navigate("/categories")}>
                                    <LayoutDashboard className="mr-2 h-4 w-4" />
                                    Categorias
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem className={"p-2"}>
                                <SidebarMenuButton onClick={() => navigate("/transactions")}>
                                    <LayoutDashboard className="mr-2 h-4 w-4" />
                                    Balanço Geral
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem className={"p-2"}>
                                <SidebarMenuButton onClick={() => navigate("/new-transaction")}>
                                    <PlusCircle className="mr-2 h-4 w-4" />
                                    Nova Transação
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
            <SidebarInset className={"bg-muted"}>
                <Outlet />
            </SidebarInset>
        </SidebarProvider>
    )
}
