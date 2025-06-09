import { useEffect, useState } from 'react';
import { Breadcrumbs, Button, Card, CardContent, Dialog, DialogActions, DialogContent } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { NavLink } from 'react-router-dom'
import { Award, Clock, Droplets, Gem, Settings, ShoppingCartIcon, Watch } from 'lucide-react';
import { JoyeriaAppLayout } from '../../layout/JoyeriaAppLayout';
import { Product } from '../../helpers';
import { addProductToCart } from '../../services/cartServices';

const watchFeatures = [
    {
        feature: "Movimiento",
        name: "Tipos de Movimiento",
        description: "Automático, cuarzo y cuerda manual",
        icon: <Settings className="h-6 w-6" />,
    },
    {
        feature: "Resistencia",
        name: "Resistencia al Agua",
        description: "Desde 30m hasta 300m de profundidad",
        icon: <Droplets className="h-6 w-6" />,
    },
    {
        feature: "Materiales",
        name: "Materiales Premium",
        description: "Oro, platino, acero, titanio y cerámica",
        icon: <Gem className="h-6 w-6" />,
    },
    {
        feature: "Precisión",
        name: "Precisión Suiza",
        description: "Certificados cronómetros de alta precisión",
        icon: <Award className="h-6 w-6" />,
    },
    {
        feature: "Diseño",
        name: "Diseño Atemporal",
        description: "Desde clásicos hasta modernos deportivos",
        icon: <Watch className="h-6 w-6" />,
    },
    {
        feature: "Garantía",
        name: "Garantía Internacional",
        description: "Servicio y garantía mundial",
        icon: <Clock className="h-6 w-6" />,
    },
]


const caseSizes = [
    { size: "32-36mm", name: "Pequeño", description: "Ideal para muñecas delicadas" },
    { size: "37-40mm", name: "Mediano", description: "Tamaño versátil y clásico" },
    { size: "41-44mm", name: "Grande", description: "Presencia deportiva y moderna" },
    { size: "45mm+", name: "Extra Grande", description: "Máximo impacto visual" },
]


export const RelojesPage = () => {

    const [watches, setwatches] = useState([])
    const [loading, setLoading] = useState(true)

    const token = localStorage.getItem('accessToken');

    //modal
    const [open, setOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleClickOpen = (watch) => {
        setSelectedProduct(watch)
        setOpen(true);
    };

    const handleClose = (watch) => {
        setOpen(false);
        setSelectedProduct(null)
    };

    //relojes
    useEffect(() => {
        async function fetchWatches() {
            const data = await Product.geteWatches();
            if (data) {
                const allWatches = Object.values(data)
                    .flat()
                    .filter((item) => item)//elimina los nulos
                setwatches(allWatches)
            }
            setLoading(false)

        }
        fetchWatches()
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
                            to="/relojes"
                            className="font-medium"
                        >
                            Relojes
                        </NavLink>
                    </Breadcrumbs>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[50vh] bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                <div className="absolute inset-0 opacity-30">
                    <img
                        src="/reloje.webp?height=800&width=1600"
                        alt="Colección de anillos"
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 h-full flex items-center relative z-10">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-serif mb-4 text-gray-700">Colección de Relojes</h1>
                        <p className="text-lg text-black mb-6">
                            Desde elegantes relojes de vestir hasta robustos cronógrafos deportivos, cada timepiece representa la
                            perfecta fusión entre artesanía tradicional suiza y innovación contemporánea.
                        </p>

                    </div>
                </div>
            </section>


            {/* Watch Features */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif text-gray-900 mb-4">Características de Nuestros Relojes</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Cada reloj en nuestra colección está cuidadosamente seleccionado por su calidad excepcional, precisión y
                            diseño atemporal.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {watchFeatures.map((item, index) => (
                            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <div className="text-gray-600">{item.icon}</div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                                    <p className="text-sm text-gray-500 mb-2">{item.feature}</p>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Size Guide */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif text-gray-900 mb-4">Guía de Tamaños de Caja</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            El tamaño de la caja del reloj es crucial para el confort y la estética. Encuentra el tamaño perfecto para
                            tu muñeca.
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {caseSizes.map((item, index) => (
                                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                                    <CardContent className="p-6">
                                        <div className="bg-gray-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Watch className="h-8 w-8" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                                        <p className="text-sm text-gray-500 mb-2">{item.size}</p>
                                        <p className="text-sm text-gray-600">{item.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* Filter and Products */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-8">

                        {/* Products Grid */}
                        <div className="w-full md:w-4/4">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {watches.map((watch) => (
                                    <Card
                                        key={watch.id}
                                        className="group cursor-pointer border-0 shadow-sm hover:shadow-lg transition-shadow"
                                    >
                                        <CardContent className="p-0">
                                            <div className="relative overflow-hidden rounded-t-lg">
                                                <img
                                                    src={watch.image || "/placeholder.svg"}
                                                    alt={watch.name}
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
                                                <h3 className="font-medium text-gray-900 mb-2">{watch.name}</h3>
                                                <span className="text-lg font-semibold text-gray-900 mb-4 block">{watch.price}$</span>

                                                {/* Contenedor vertical para botones con ancho completo */}
                                                <div className="flex flex-col space-y-2">
                                                    <Button
                                                        variant="contained"
                                                        onClick={() => handleClickOpen(watch)}
                                                        fullWidth
                                                    >
                                                        Ver Detalles
                                                    </Button>

                                                    <Button
                                                        variant="outlined"
                                                        startIcon={token ? <ShoppingCartIcon /> : null} // Icono condicional
                                                        fullWidth
                                                        onClick={token ? () => handleAddToCart(watch) : null} // Click condicional
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


            {/* Watch Care Guide */}
            <section className="py-16 bg-white" >
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-serif text-gray-900 mb-6">Cuidado de Relojes</h2>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-gray-100 p-2 rounded-full mr-4">
                                        <Settings className="h-5 w-5 text-gray-900" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 mb-1">Mantenimiento Regular</h3>
                                        <p className="text-gray-600">
                                            Los relojes automáticos requieren servicio cada 3-5 años. Los de cuarzo necesitan cambio de
                                            batería cada 2-3 años.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-gray-100 p-2 rounded-full mr-4">
                                        <Droplets className="h-5 w-5 text-gray-900" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 mb-1">Resistencia al Agua</h3>
                                        <p className="text-gray-600">
                                            Respete siempre los límites de resistencia al agua. Evite botones y corona bajo el agua, incluso
                                            en relojes de buceo.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-gray-100 p-2 rounded-full mr-4">
                                        <Watch className="h-5 w-5 text-gray-900" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 mb-1">Almacenamiento</h3>
                                        <p className="text-gray-600">
                                            Guarde en lugar seco, alejado de campos magnéticos. Use cajas con almohadillas para relojes
                                            automáticos considere un remontoir.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <Button className="mt-6 bg-gray-900 hover:bg-gray-800">Manual de Cuidados</Button>
                        </div>
                        <div className="relative">
                            <img
                                src="/reloje.webp"
                                alt="Cuidado de relojes"
                                width={500}
                                height={500}
                                className="rounded-lg shadow-lg"
                            />

                        </div>
                    </div>
                </div>
            </section >
        </JoyeriaAppLayout>














    )
}
