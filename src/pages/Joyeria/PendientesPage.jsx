import { useEffect, useState } from 'react';
import { Diamond } from '@mui/icons-material'
import { Breadcrumbs, Button, Card, CardContent, Dialog, DialogActions, DialogContent, easing } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { NavLink } from 'react-router-dom'
import { Ruler, ShoppingCartIcon } from 'lucide-react';
import { JoyeriaAppLayout } from '../../layout/JoyeriaAppLayout';
import { Product } from '../../helpers';
import { addProductToCart } from '../../services/cartServices';


const earringTypes = [
    {
        type: "Studs",
        name: "Pendientes de Botón",
        description: "Clásicos y versátiles, perfectos para uso diario",
        icon: "●",
    },
    {
        type: "Hoops",
        name: "Aros",
        description: "Elegantes círculos que enmarcan el rostro",
        icon: "○",
    },
    {
        type: "Drops",
        name: "Colgantes",
        description: "Añaden movimiento y elegancia a cualquier look",
        icon: "◆",
    },
    {
        type: "Chandelier",
        name: "Chandelier",
        description: "Dramáticos y sofisticados para ocasiones especiales",
        icon: "❋",
    },
    {
        type: "Huggie",
        name: "Huggie Hoops",
        description: "Aros pequeños que abrazan el lóbulo",
        icon: "◐",
    },
    {
        type: "Climbers",
        name: "Ear Climbers",
        description: "Diseños modernos que siguen la curva de la oreja",
        icon: "↗",
    },
]


export const PendientesPage = () => {
    const [earrings, setEarrings] = useState([])
    const [loading, setLoading] = useState(true)

    const token = localStorage.getItem('accessToken');


    //modal
    const [open, setOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleClickOpen = (erings) => {
        setSelectedProduct(erings)
        setOpen(true);
    };

    const handleClose = (erings) => {
        setOpen(false);
        setSelectedProduct(null)
    };

    //pendientes
    useEffect(() => {
        async function fetchEarrings() {
            const data = await Product.geteEarrings();
            if (data) {
                const allEarrings = Object.values(data)
                    .flat()
                    .filter((item) => item)//elimina los nulos
                setEarrings(allEarrings)
            }
            setLoading(false)

        }
        fetchEarrings()
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
                            to="/pendientes"
                            className="font-medium"
                        >
                            Pendientes
                        </NavLink>
                    </Breadcrumbs>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[50vh] bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                <div className="absolute inset-0 opacity-30">
                    <img
                        src="/pendientes.jpg?height=800&width=1600"
                        alt="Colección de anillos"
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 h-full flex items-center relative z-10">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-serif mb-4 text-gray-700">Colección de Pendientes</h1>
                        <p className="text-lg text-black mb-6">
                            Desde delicados studs hasta dramáticos chandeliers, nuestra colección de pendientes está diseñada para
                            realzar tu belleza natural y complementar cada momento especial de tu vida.
                        </p>

                    </div>
                </div>
            </section>

            {/* Errings Types Guide */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif text-gray-900 mb-4">Guía de Estilos</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Descubre los diferentes estilos de pendientes y encuentra el perfecto para cada ocasión y personalidad.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {earringTypes.map((item, index) => (
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
                                        <h2 className="text-xl font-medium text-gray-900">Pendientes</h2>
                                        <p className="text-sm text-gray-500">Mostrando {earrings.length} productos</p>
                                    </div>

                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {earrings.map((erring) => (
                                    <Card
                                        key={erring.id}
                                        className="group cursor-pointer border-0 shadow-sm hover:shadow-lg transition-shadow"
                                    >
                                        <CardContent className="p-0">
                                            <div className="relative overflow-hidden rounded-t-lg">
                                                <img
                                                    src={erring.image || "/placeholder.svg"}
                                                    alt={erring.name}
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
                                                <h3 className="font-medium text-gray-900 mb-2">{erring.name}</h3>
                                                <span className="text-lg font-semibold text-gray-900 mb-4 block">{erring.price}$</span>

                                                {/* Contenedor vertical para botones con ancho completo */}
                                                <div className="flex flex-col space-y-2">
                                                    <Button
                                                        variant="contained"
                                                        onClick={() => handleClickOpen(erring)}
                                                        fullWidth
                                                    >
                                                        Ver Detalles
                                                    </Button>

                                                    <Button
                                                        variant="outlined"
                                                        startIcon={token ? <ShoppingCartIcon /> : null} // Icono condicional
                                                        fullWidth
                                                        onClick={token ? () => handleAddToCart(erring) : null} // Click condicional
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

            {/* Errings Care Guide */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-serif text-gray-900 mb-6">Cuidado de Pendientes</h2>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-gray-100 p-2 rounded-full mr-4">
                                        <Diamond className="h-5 w-5 text-gray-900" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 mb-1">Limpieza Regular</h3>
                                        <p className="text-gray-600">
                                            Limpie sus pendientes después de cada uso con un paño suave para eliminar aceites naturales y
                                            mantener su brillo.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-gray-100 p-2 rounded-full mr-4">
                                        <Diamond className="h-5 w-5 text-gray-900" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 mb-1">Almacenamiento Seguro</h3>
                                        <p className="text-gray-600">
                                            Guarde cada par en compartimentos separados para evitar arañazos. Use almohadillas especiales para
                                            pendientes.
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
                                src="/pendientes.jpg"
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
