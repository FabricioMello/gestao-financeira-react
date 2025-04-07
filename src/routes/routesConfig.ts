import { LayoutDashboard, PlusCircle, Wallet, LeafyGreen } from "lucide-react";
import { lazy } from "react";

export const appRoutes = [
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
    },
    {
        path: "/new-transaction",
        label: "Nova Transação",
        icon: PlusCircle,
        element: lazy(() => import("@/pages/NewTransaction.tsx")),
    },
];
