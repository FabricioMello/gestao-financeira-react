import { Button } from "@components/ui/button"
import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
            <div className="space-y-4 text-center">
                <h1 className="text-2xl font-semibold">Sistema de Gestão Financeira 💸</h1>
                <div className="flex gap-5 justify-center">
                    <Button onClick={() => navigate("/nova-transacao")}>Começar</Button>
                    <Button variant="outline" onClick={() => navigate("/dashboard")}>Ver Dashboard</Button>
                </div>
            </div>
        </div>
    )
}
