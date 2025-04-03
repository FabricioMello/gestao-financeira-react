import { Navigate, Route, Routes } from "react-router-dom";
import Categories from "@/pages/Categories";
import NewTransaction from "@/pages/NewTransaction";
import SidebarLayout from "@/components/layout/SidebarLayout";
import Transactions from "@/pages/Transactions";

export function AppRoutes() {
    return (
        <Routes>
            <Route element={<SidebarLayout />}>
                <Route index element={<Navigate to="/categories" replace />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/new-transaction" element={<NewTransaction />} />
            </Route>
        </Routes>
    );
}