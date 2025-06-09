import { useEffect, useState } from 'react';
import { Product } from '../helpers';
import { AccessTimeOutlined, Diamond, MilitaryTech, Person } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { NavLink } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext';
import { MenuIcon } from 'lucide-react';

export const JoyeriaAppLayout = ({ children }) => {

    const [categorys, setCategorys] = useState([])
    const [menuOpen, setMenuOpen] = useState(false);
    const [loading, setLoading] = useState(true)
    const { token, setToken } = useAuthContext();



    useEffect(() => {
        async function fetchData() {
            const data = await Product.getCategorys();

            // Como el backend devuelve un array directamente:
            if (Array.isArray(data)) {
                setCategorys(data);
            } else {
                console.error('Los datos recibidos no son un array:', data);
            }

            setLoading(false)
        }

        fetchData();
    }, []);

    useEffect(() => {
        const savedToken = localStorage.getItem('accessToken');
        if (savedToken) {
            setToken(savedToken)
        }
    }, []);


    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        setToken(null);
        window.location.reload();
    };


    if (loading) {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                }}
            >
                <p>Cargando...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b border-gray-100 bg-gray-800 sticky top-0 z-50">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Botón hamburguesa visible en sm */}
                        <div className="flex items-center space-x-4 md:space-x-8">
                            {/* Botón hamburguesa visible solo en móviles */}
                            <button
                                className="md:hidden text-white"
                                onClick={() => setMenuOpen(!menuOpen)}
                                aria-label="Abrir menú"
                            >
                                <MenuIcon />
                            </button>

                            {/* Logo */}
                            <a href="#" className="text-2xl font-serif text-yellow-500">
                                TamohJoya
                            </a>
                        </div>


                        <div className="flex items-center space-x-8">
                            {/* Categorías visibles en md+ */}
                            <nav className="hidden md:flex space-x-6">
                                {categorys.map((categoria, index) => (
                                    <NavLink key={index} to={`/${categoria.name}`} className="text-sm text-white hover:text-gray-900">
                                        {categoria.name}
                                    </NavLink>
                                ))}
                            </nav>
                        </div>


                        {/* Bloque derecho: usuario o login */}
                        <div>
                            {token ? (
                                <Box display="flex" alignItems="center" gap={2}>
                                    <button style={{ marginLeft: 12, color: "white" }} onClick={handleLogout}>
                                        Cerrar Sesión
                                    </button>
                                    <div className="flex items-center space-x-4">
                                        <NavLink to="/cart" variant="ghost" size="sm">
                                            <LocalGroceryStoreIcon className="h-4 w-4 text-white" />
                                        </NavLink>
                                    </div>
                                </Box>
                            ) : (
                                <>
                                    <NavLink to="/auth/login" className="text-sm text-white hover:text-gray-900">
                                        Iniciar Sesión
                                    </NavLink>
                                    <NavLink to="/auth/register" className="text-sm text-white hover:text-gray-900 ml-4">
                                        Registrar
                                    </NavLink>
                                </>
                            )}
                        </div>

                    </div>
                </div>

                {/* Menú desplegable para móviles */}
                {menuOpen && (
                    <nav className="md:hidden bg-gray-700 px-4 py-2 space-y-2">
                        {categorys.map((categoria, index) => (
                            <NavLink
                                key={index}
                                to={`/${categoria.name}`}
                                className="block text-white hover:text-yellow-400"
                                onClick={() => setMenuOpen(false)} // cerrar menú al seleccionar
                            >
                                {categoria.name}
                            </NavLink>
                        ))}
                    </nav>
                )}
            </header>


            {children}

            {/* Special Promotions Banner */}
            <section className="py-16 bg-gray-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <div className="flex justify-center items-center space-x-3 mb-6">
                            <Diamond className="h-8 w-8 text-yellow-400" />
                            <h2 className="text-3xl font-serif">Servicios</h2>
                            <Diamond className="h-8 w-8 text-yellow-400" />
                        </div>
                        <p className="text-2xl mb-8 max-w-3xl mx-auto">
                            Al comprar con nosotros, recibirás un comprobante que podrás presentar para recoger tu joya en la sucursal más cercana.
                        </p>
                        <div className="flex justify-center space-x-10 text-lg">
                            <div className="flex items-center">
                                <MilitaryTech className="h-6 w-6 mr-3 text-yellow-400" />
                                Certificado de Autenticidad
                            </div>
                            <div className="flex items-center">
                                <Diamond className="h-6 w-6 mr-3 text-yellow-400" />
                                Materiales Premium
                            </div>
                            <div className="flex items-center">
                                <AccessTimeOutlined className="h-6 w-6 mr-3 text-yellow-400" />
                                Recoge en 24-48h en sucursal
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
                                Creando joyas excepcionales desde el 2025. Cada pieza es una obra de arte única.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-4">Productos</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>
                                    <a href="/Anillos">Anillos</a>
                                </li>
                                <li>
                                    <a href="/Collares">Collares</a>
                                </li>
                                <li>
                                    <a href="/Pendientes">Pendientes</a>
                                </li>
                                <li>
                                    <a href="/Relojes">Relojes</a>
                                </li>
                                <li>
                                    <a href="/Pulseras">Pulseras</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 mb-4">Contacto</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>+53 55149077</li>
                                <li>tamohjoya@.com</li>
                                <li>10 entre 1ra y 3ra, Miramar, Playa, Habana/Cuba</li>
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
