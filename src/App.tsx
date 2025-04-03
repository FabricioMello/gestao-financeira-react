import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Categories from "@/pages/Categories"
import NewTransaction from "@/pages/NewTransaction.tsx"
import SidebarLayout from "@/components/layout/SidebarLayout"
import Transactions from "@/pages/Transactions"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<SidebarLayout />}>
                    <Route index element={<Navigate to="/categories" replace />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/transactions" element={<Transactions />} />
                    <Route path="/new-transaction" element={<NewTransaction />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
