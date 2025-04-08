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
import { Outlet, useNavigate } from "react-router-dom"
import { routesConfig } from "@/routes/routesConfig"

export default function SidebarLayout() {
    const navigate = useNavigate()

    return (
        <SidebarProvider>
            <Sidebar>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel className={"text-2xl underline p-4"}>Sistema Financeiro</SidebarGroupLabel>
                        <SidebarMenu className={"pt-8"}>
                            {routesConfig.map((route) => (
                                <SidebarMenuItem key={route.path} className={"p-2"}>
                                    <SidebarMenuButton onClick={() => navigate(route.path)}>
                                        <route.icon className="mr-2 h-4 w-4" />
                                        {route.label}
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
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
