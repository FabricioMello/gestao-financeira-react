import { Button } from "./components/ui/button"

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="space-y-4 text-center">
        <h1 className="text-2xl font-semibold">Sistema de Gestão Financeira 💸</h1>
        <Button variant="default">Começar</Button>
        <Button variant="outline">Ver Dashboard</Button>
      </div>
    </div>
  )
}

export default App
