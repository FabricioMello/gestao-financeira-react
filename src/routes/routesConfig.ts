import { LayoutDashboard, Wallet, LeafyGreen } from "lucide-react";
import { lazy } from "react";

export const routesConfig = [
    {
        path: "/",
        label: "Dashboards",
        icon: LayoutDashboard,
        element: lazy(() => import("@/pages/Dashboard.tsx")),
    },
    {
        path: "/categories",
        label: "Categorias",
        icon: LeafyGreen,
        element: lazy(() => import("@/pages/Categories.tsx")),
    },
    {
        path: "/transactions",
        label: "Balanço Geral",
        icon: Wallet,
        element: lazy(() => import("@/pages/Transactions.tsx")),
    }
];
