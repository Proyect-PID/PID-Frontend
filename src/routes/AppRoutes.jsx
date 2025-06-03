import { Routes, Route } from "react-router-dom"
import { JoyeriaRoutes } from "./Joyeria/JoyeriaRoutes"
import { AuthRoutes } from "./auth/AuthRoutes"

export const AppRoutes = () => {
    return (
        <Routes>
            {/* Joyeria */}
            <Route path="/*" element={<JoyeriaRoutes />} />

            {/* Auth */}
            <Route path="/auth/*" element={<AuthRoutes />} />
        </Routes>
    )
}
