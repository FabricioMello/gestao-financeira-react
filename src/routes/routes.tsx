import { Route, Routes } from "react-router-dom";
import SidebarLayout from "@components/layout/SidebarLayout.tsx";
import {appRoutes} from "@/routes/routesConfig";

export function AppRoutes() {
    return (
        <Routes>
            <Route element={<SidebarLayout />}>
                {appRoutes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.element />}
                    />
                ))}
            </Route>
        </Routes>
    );
}