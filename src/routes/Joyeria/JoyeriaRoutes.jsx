import { Routes, Route } from "react-router-dom"
import { AnillosPage, CartPage, CollaresPage, HomePage, PendientesPage, PulserasPage, RelojesPage } from "../../pages/Joyeria"


export const JoyeriaRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/anillos" element={<AnillosPage />} />
            <Route path="/collares" element={<CollaresPage />} />
            <Route path="/pendientes" element={<PendientesPage />} />
            <Route path="/pulseras" element={<PulserasPage />} />
            <Route path="/relojes" element={<RelojesPage />} />
            <Route path="/cart" element={<CartPage />} />
        </Routes>
    )
}
