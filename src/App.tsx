import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Dashboard from "@/pages/Dashboard"
import NovaTransacao from "@/pages/NovaTransacao"
import SidebarLayout from "@/components/layout/SidebarLayout"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<SidebarLayout />}>
                    <Route index element={<Navigate to="/dashboard" replace />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/nova-transacao" element={<NovaTransacao />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
