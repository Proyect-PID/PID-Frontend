import { Routes, Route } from "react-router-dom"
import { AnillosPage, CartPage, CollaresPage, HomePage, PendientesPage, PulserasPage, RelojesPage } from "../../pages/Joyeria"


export const JoyeriaRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Anillos" element={<AnillosPage />} />
            <Route path="/Collares" element={<CollaresPage />} />
            <Route path="/Pendientes" element={<PendientesPage />} />
            <Route path="/Pulseras" element={<PulserasPage />} />
            <Route path="/Relojes" element={<RelojesPage />} />
            <Route path="/Cart" element={<CartPage />} />
        </Routes>
    )
}
