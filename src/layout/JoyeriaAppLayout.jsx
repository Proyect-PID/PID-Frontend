import { AccessTimeOutlined, Diamond, MilitaryTech } from '@mui/icons-material'
import { Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { NavLink } from 'react-router-dom'

export const JoyeriaAppLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b border-gray-100 bg-gray-800">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-8">
                            <a href="#" className="text-2xl font-serif text-yellow-500">
                                TamohJoya
                            </a>
                            <nav className="hidden md:flex space-x-6">
                                <NavLink to="/anillos" className="text-sm text-white hover:text-gray-900">
                                    Anillos
                                </NavLink>
                                <NavLink to="/collares" className="text-sm text-white hover:text-gray-900">
                                    Collares
                                </NavLink>
                                <NavLink to="/pendientes" className="text-sm  text-white hover:text-gray-900">
                                    Pendientes
                                </NavLink>
                                <NavLink to="/pulseras" className="text-sm  text-white hover:text-gray-900">
                                    Pulseras
                                </NavLink>
                                <NavLink to="/relojes" className="text-sm  text-white hover:text-gray-900">
                                    Relojes
                                </NavLink>
                            </nav>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Button variant="ghost" size="sm">
                                <SearchIcon className="h-4 w-4 text-white" />
                            </Button>

                            <NavLink to="/cart" variant="ghost" size="sm">
                                <LocalGroceryStoreIcon className="h-4 w-4 text-white" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </header>

            {children}

            {/* Special Promotions Banner */}
            <section className="py-12 bg-gray-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <div className="flex justify-center items-center space-x-2 mb-4">
                            <Diamond className="h-6 w-6 text-yellow-400" />
                            <h2 className="text-2xl font-serif">Promoción Especial</h2>
                            <Diamond className="h-6 w-6 text-yellow-400" />
                        </div>
                        <p className="text-xl mb-6">
                            Envío gratuito en compras superiores a €200 | Garantía de por vida en todas nuestras piezas
                        </p>
                        <div className="flex justify-center space-x-6 text-sm">
                            <div className="flex items-center">
                                <MilitaryTech className="h-5 w-5 mr-2 text-yellow-400" />
                                Certificado de Autenticidad
                            </div>
                            <div className="flex items-center">
                                <Diamond className="h-5 w-5 mr-2 text-yellow-400" />
                                Materiales Premium
                            </div>
                            <div className="flex items-center">
                                <AccessTimeOutlined className="h-5 w-5 mr-2 text-yellow-400" />
                                Entrega en 24-48h
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-50 py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-serif text-yellow-400 mb-4">tamoh'Joya</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Creando joyas excepcionales desde 1985. Cada pieza es una obra de arte única.
                            </p>
                            <div className="flex space-x-4">
                                <Button variant="ghost" size="sm">
                                    Facebook
                                </Button>
                                <Button variant="ghost" size="sm">
                                    Instagram
                                </Button>
                                <Button variant="ghost" size="sm">
                                    Pinterest
                                </Button>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-4">Productos</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>
                                    <a href="#">Anillos</a>
                                </li>
                                <li>
                                    <a href="#">Collares</a>
                                </li>
                                <li>
                                    <a href="#">Pendientes</a>
                                </li>
                                <li>
                                    <a href="#">Pulseras</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-4">Servicios</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>
                                    <a href="#">Personalización</a>
                                </li>
                                <li>
                                    <a href="#">Reparaciones</a>
                                </li>
                                <li>
                                    <a href="#">Tasaciones</a>
                                </li>
                                <li>
                                    <a href="#">Garantía</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-4">Contacto</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>+34 900 123 456</li>
                                <li>info@elegance.com</li>
                                <li>Calle Serrano 45, Madrid</li>
                                <li>Lun-Sáb: 10:00-20:00</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
                        <p>&copy; 2025 Élégance. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>

    )
}
