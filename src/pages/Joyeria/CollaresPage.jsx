import { useEffect, useState } from 'react';
import { Diamond } from '@mui/icons-material'
import { Breadcrumbs, Button, Card, CardContent, Dialog, DialogActions, DialogContent } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { NavLink } from 'react-router-dom'
import { Ruler, ShoppingCartIcon } from 'lucide-react';
import { JoyeriaAppLayout } from '../../layout/JoyeriaAppLayout';
import { Product } from '../../helpers';
import { addProductToCart } from '../../services/cartServices';

const necklaceLengths = [
    { length: "35cm", name: "Choker", description: "Se ajusta al cuello" },
    { length: "40cm", name: "Gargantilla", description: "Descansa en la base del cuello" },
    { length: "45cm", name: "Princesa", description: "Longitud clásica más popular" },
    { length: "50cm", name: "Matinée", description: "Cae sobre el escote" },
    { length: "60cm", name: "Ópera", description: "Llega hasta el busto" },
    { length: "80cm+", name: "Sautoir", description: "Collar largo, versátil" },
]

export const CollaresPage = () => {
    const [necklaces, setNeckclase] = useState([])
    const [loading, setLoading] = useState(true)

    const token = localStorage.getItem('accessToken');


    //modal
    const [open, setOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleClickOpen = (necklace) => {
        setSelectedProduct(necklace)
        setOpen(true);
    };

    const handleClose = (necklace) => {
        setOpen(false);
        setSelectedProduct(null)
    };

    //collares
    useEffect(() => {
        async function fetchNecklace() {
            const data = await Product.getNecklace();
            if (data) {
                const allNecklaces = Object.values(data)
                    .flat()
                    .filter((item) => item)//elimina los nulos
                setNeckclase(allNecklaces)
            }
            setLoading(false)

        }
        fetchNecklace()
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
                            to="/collares"
                            className="font-medium"
                        >
                            Collares
                        </NavLink>
                    </Breadcrumbs>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[50vh] bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                <div className="absolute inset-0 opacity-30">
                    <img
                        src="/collares.jpg?height=800&width=1600"
                        alt="Colección de anillos"
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 h-full flex items-center relative z-10">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-serif mb-4 text-gray-700">Colección de Collares</h1>
                        <p className="text-lg text-black mb-6">
                            Desde elegantes gargantillas hasta sofisticados collares de perlas, cada pieza está diseñada para realzar
                            tu belleza natural y expresar tu estilo único con la máxima elegancia.
                        </p>

                    </div>
                </div>
            </section>


            {/* Necklace Length Guide */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif text-gray-900 mb-4">Guía de Longitudes</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Encuentra la longitud perfecta para cada ocasión. Cada estilo de collar tiene su propia personalidad y
                            forma de realzar tu belleza.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {necklaceLengths.map((item, index) => (
                            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Ruler className="h-8 w-8 text-gray-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                                    <p className="text-sm text-gray-500 mb-2">{item.length}</p>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Filter and Products */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Products Grid */}
                        <div className="w-full md:w-4/4">
                            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                    <div>
                                        <h2 className="text-xl font-medium text-gray-900">Collares</h2>
                                        <p className="text-sm text-gray-500">Mostrando {necklaces.length} productos</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {necklaces.map((necklace) => (
                                    <Card
                                        key={necklace.id}
                                        className="group cursor-pointer border-0 shadow-sm hover:shadow-lg transition-shadow"
                                    >
                                        <CardContent className="p-0">
                                            <div className="relative overflow-hidden rounded-t-lg">
                                                <img
                                                    src={necklace.image || "/placeholder.svg"}
                                                    alt={necklace.name}
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
                                                <h3 className="font-medium text-gray-900 mb-2">{necklace.name}</h3>
                                                <span className="text-lg font-semibold text-gray-900 mb-4 block">{necklace.price}$</span>

                                                {/* Contenedor vertical para botones con ancho completo */}
                                                <div className="flex flex-col space-y-2">
                                                    <Button
                                                        variant="contained"
                                                        onClick={() => handleClickOpen(necklace)}
                                                        fullWidth
                                                    >
                                                        Ver Detalles
                                                    </Button>

                                                    <Button
                                                        variant="outlined"
                                                        startIcon={token ? <ShoppingCartIcon /> : null} // Icono condicional
                                                        fullWidth
                                                        onClick={token ? () => handleAddToCart(necklace) : null} // Click condicional
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
            </section>

            {/* Necklace Care Guide */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-serif text-gray-900 mb-6">Cuidado de Collares</h2>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-gray-100 p-2 rounded-full mr-4">
                                        <Diamond className="h-5 w-5 text-gray-900" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 mb-1">Almacenamiento Colgado</h3>
                                        <p className="text-gray-600">
                                            Cuelgue sus collares individualmente para evitar enredos y mantener su forma original. Use ganchos
                                            forrados de tela.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-gray-100 p-2 rounded-full mr-4">
                                        <Diamond className="h-5 w-5 text-gray-900" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 mb-1">Limpieza de Perlas</h3>
                                        <p className="text-gray-600">
                                            Las perlas requieren cuidado especial. Límpielas con un paño húmedo suave después de cada uso y
                                            evite productos químicos.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-gray-100 p-2 rounded-full mr-4">
                                        <Diamond className="h-5 w-5 text-gray-900" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 mb-1">Revisión de Cierres</h3>
                                        <p className="text-gray-600">
                                            Revise regularmente los cierres y eslabones para asegurar que estén en perfecto estado y evitar
                                            pérdidas.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <Button className="mt-6 bg-gray-900 hover:bg-gray-800 p-2">Descargar Guía Completa</Button>
                        </div>
                        <div className="relative">
                            <img
                                src="/collares.jpg"
                                alt="Cuidado de collares"
                                width={500}
                                height={500}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </JoyeriaAppLayout>
    )
}
