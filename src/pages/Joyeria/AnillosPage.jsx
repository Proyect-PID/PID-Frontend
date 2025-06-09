import { useEffect, useState } from 'react';
import { Product } from '../../helpers';
import { Diamond } from '@mui/icons-material'
import { addProductToCart } from '../../services/cartServices';
import { Breadcrumbs, Button, Card, CardContent, Dialog, DialogActions, DialogContent } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { NavLink } from 'react-router-dom'
import { JoyeriaAppLayout } from '../../layout/JoyeriaAppLayout';
import { ShoppingCartIcon } from 'lucide-react';


export const AnillosPage = () => {
    const [rings, setRings] = useState([])
    const [loading, setLoading] = useState(false)

    const token = localStorage.getItem('accessToken');


    //modal
    const [open, setOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleClickOpen = (ring) => {
        setSelectedProduct(ring)
        setOpen(true);
    };

    const handleClose = (ring) => {
        setOpen(false);
        setSelectedProduct(null)
    };

    //anillos
    useEffect(() => {
        async function fetchRings() {
            const data = await Product.getAnillos();
            if (data) {
                const allRings = Object.values(data)
                    .flat()
                    .filter((item) => item)//elimina los nulos
                setRings(allRings)
            }
        }
        fetchRings()
    }, []);

    //agregar al carrito
    const handleAddToCart = async (product) => {
        if (!product || !product.id) {
            console.error("El producto no tiene un id definido.");
            return;
        }
        setLoading(true); // Activar el estado de carga al inicio
        try {
            const token = localStorage.getItem('accessToken');
            if (!token) {
                console.error("No hay token de autenticación, por favor inicia sesión.");
                return;
            }
            await addProductToCart(product, token);
            // Opcional: mostrar mensaje de éxito o actualizar estado global del carrito
        } catch (error) {
            // Manejar error (mostrar alerta, etc.)
            console.error("Error al agregar al carrito:", error);
        } finally {
            setLoading(false); // Desactivar el estado de carga al final (éxito o error)
        }
    };

    return (
        <JoyeriaAppLayout>
            {/* Breadcrumb */}
            <div className="bg-gray-50 py-3">
                <div className="container mx-auto px-4">
                    <Breadcrumbs>
                        <NavLink underline="hover" color="inherit" to="/">
                            Inicio
                        </NavLink>
                        <NavLink
                            to="/anillos"
                            className="font-medium"
                        >
                            Anillos
                        </NavLink>
                    </Breadcrumbs>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[50vh] bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                <div className="absolute inset-0 opacity-30">
                    <img
                        src="/anillo.jpg?height=800&width=1600"
                        alt="Colección de anillos"
                        className="absolute top-0 left-0 w-full h-full object-cover "
                    />
                </div>
                <div className="container mx-auto px-4 h-full flex items-center relative z-10">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-serif mb-4 text-gray-700">Colección de Anillos</h1>
                        <p className="text-lg text-black mb-6">
                            Descubre nuestra exquisita selección de anillos, desde deslumbrantes solitarios de compromiso hasta
                            elegantes piezas de alta joyería, cada uno creado con la máxima atención al detalle.
                        </p>
                    </div>
                </div>
            </section>


            {/* Filter and Products */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-2">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Products Grid */}
                        <div className="w-full md:w-4/4 ">
                            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                    <div>
                                        <h2 className="text-xl font-medium text-gray-900">Anillos</h2>
                                        <p className="text-sm text-gray-500">Mostrando {rings.length} productos</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {rings.map((ring) => (
                                    <Card
                                        key={ring.id}
                                        className="group cursor-pointer border-0 shadow-sm hover:shadow-lg transition-shadow"
                                    >
                                        <CardContent className="p-0">
                                            <div className="relative overflow-hidden rounded-t-lg">
                                                <img
                                                    src={ring.image || "/placeholder.svg"}
                                                    alt={ring.name}
                                                    width={300}
                                                    height={300}
                                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                                <Button
                                                    size="sm"
                                                    variant="secondary"
                                                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                                                >
                                                    <FavoriteBorderIcon className="h-4 w-4" />
                                                </Button>
                                            </div>
                                            <div className="p-4">
                                                <h3 className="font-medium text-gray-900 mb-2">{ring.name}</h3>
                                                <span className="text-lg font-semibold text-gray-900 mb-4 block">{ring.price}$</span>

                                                {/* Contenedor vertical para botones con ancho completo */}
                                                <div className="flex flex-col space-y-2">
                                                    <Button
                                                        variant="contained"
                                                        onClick={() => handleClickOpen(ring)}
                                                        fullWidth
                                                    >
                                                        Ver Detalles
                                                    </Button>

                                                    <Button
                                                        variant="outlined"
                                                        startIcon={token ? <ShoppingCartIcon /> : null} // Icono condicional
                                                        fullWidth
                                                        onClick={token ? () => handleAddToCart(ring) : null} // Click condicional
                                                        disabled={loading || !token} // Deshabilitar si carga o no hay token
                                                    >
                                                        {loading ? "Agregando..." : (token ? "Agregar" : <NavLink to="/auth/login">Inicia Sesión para Comprar</NavLink>)}
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                            <Dialog open={open} onClose={handleClose}>
                                <DialogContent className="max-w-lg w-full">
                                    {selectedProduct && (
                                        <>
                                            <img
                                                src={selectedProduct.image}
                                                alt={selectedProduct.name}
                                                className="w-full h-64 object-cover rounded"
                                            />
                                            <h3 className="mt-4 text-xl font-semibold">{selectedProduct.name}</h3>
                                            <p className="mt-2 text-gray-700">{selectedProduct.description}</p>
                                        </>
                                    )}
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cerrar</Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                    </div>
                </div>
            </section >

            {/* Ring Care Guide */}
            <section className="py-16 bg-white" >
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-serif text-gray-900 mb-6">Guía de Cuidado de Anillos</h2>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-gray-100 p-2 rounded-full mr-4">
                                        <Diamond className="h-5 w-5 text-gray-900" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 mb-1">Limpieza Regular</h3>
                                        <p className="text-gray-600">
                                            Limpie sus anillos regularmente con un paño suave y una solución de agua tibia con jabón suave
                                            para mantener su brillo.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-gray-100 p-2 rounded-full mr-4">
                                        <Diamond className="h-5 w-5 text-gray-900" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 mb-1">Almacenamiento Adecuado</h3>
                                        <p className="text-gray-600">
                                            Guarde sus anillos en compartimentos separados para evitar arañazos y daños. Utilice estuches
                                            forrados de tela suave.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-gray-100 p-2 rounded-full mr-4">
                                        <Diamond className="h-5 w-5 text-gray-900" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 mb-1">Revisión Profesional</h3>
                                        <p className="text-gray-600">
                                            Recomendamos una revisión profesional cada 6-12 meses para verificar el engaste de las piedras y
                                            el estado general de la pieza.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <Button className="mt-6 bg-gray-900 hover:bg-gray-800 p-2">Descargar Guía Completa</Button>
                        </div>
                        <div className="relative">
                            <img
                                src="/anillo.jpg"
                                alt="Cuidado de anillos"
                                width={500}
                                height={500}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section >
        </JoyeriaAppLayout >
    )
}
