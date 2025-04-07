import { BrowserRouter } from "react-router-dom"
import {AppRoutes} from "@/routes/routes.tsx";
import {useUserStore} from "@/features/transactions/store/userStore.ts";
import {useEffect} from "react";
import {api} from "@/services/api.ts";
import {User} from "@/interfaces";

function App() {
    const setUser = useUserStore((state) => state.setUser);

    useEffect(() => {
        //TODO: Corrigir usuário logado
        api.get<User>("/users/1")
            .then((res) => setUser(res.data))
            .catch((err) => console.error("Error fetching user:", err));
    }, [setUser]);

    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    )
}

export default App
