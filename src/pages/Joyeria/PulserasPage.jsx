import { useEffect, useState } from 'react';
import { Diamond } from '@mui/icons-material'
import { Breadcrumbs, Button, Card, CardContent, Dialog, DialogActions, DialogContent } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { NavLink } from 'react-router-dom'
import { Ruler, ShoppingCartIcon } from 'lucide-react';
import { JoyeriaAppLayout } from '../../layout/JoyeriaAppLayout';
import { Product } from '../../helpers';
import { addProductToCart } from '../../services/cartServices';


const braceletSizes = [
    { size: "15cm", name: "XS", description: "Muñeca muy pequeña" },
    { size: "16cm", name: "S", description: "Muñeca pequeña" },
    { size: "17cm", name: "M", description: "Muñeca mediana" },
    { size: "18cm", name: "L", description: "Muñeca grande" },
    { size: "19cm", name: "XL", description: "Muñeca muy grande" },
    { size: "20cm+", name: "XXL", description: "Muñeca extra grande" },
]

const braceletTypes = [
    {
        type: "Tennis",
        name: "Pulseras Tennis",
        description: "Línea continua de diamantes o piedras preciosas",
        icon: "◊",
    },
    {
        type: "Charm",
        name: "Pulseras de Charms",
        description: "Personalizables con dijes y colgantes",
        icon: "♡",
    },
    {
        type: "Bangle",
        name: "Brazaletes",
        description: "Pulseras rígidas que se deslizan sobre la mano",
        icon: "○",
    },
    {
        type: "Chain",
        name: "Pulseras de Cadena",
        description: "Eslabones entrelazados en diversos estilos",
        icon: "⧨",
    },
    {
        type: "Cuff",
        name: "Pulseras Rígidas",
        description: "Abiertas, se ajustan a la muñeca",
        icon: "⌒",
    },
    {
        type: "Beaded",
        name: "Pulseras de Cuentas",
        description: "Perlas o cuentas ensartadas",
        icon: "●●●",
    },
]


export const PulserasPage = () => {
    const [bracelets, setBracelets] = useState([])
    const [loading, setLoading] = useState(true)

    const token = localStorage.getItem('accessToken');


    //modal
    const [open, setOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleClickOpen = (bracelets) => {
        setSelectedProduct(bracelets)
        setOpen(true);
    };

    const handleClose = (bracelets) => {
        setOpen(false);
        setSelectedProduct(null)
    };

    //pulceras
    useEffect(() => {
        async function fetchBracelets() {
            const data = await Product.geteBracelets();
            if (data) {
                const allBracelts = Object.values(data)
                    .flat()
                    .filter((item) => item)//elimina los nulos
                setBracelets(allBracelts)
            }
            setLoading(false)

        }
        fetchBracelets()
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
                            to="/pulceras"
                            className="font-medium"
                        >
                            Pulseras
                        </NavLink>
                    </Breadcrumbs>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[50vh] bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                <div className="absolute inset-0 opacity-30">
                    <img
                        src="/pulcera.webp?height=800&width=1600"
                        alt="Colección de anillos"
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 h-full flex items-center relative z-10">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-serif mb-4 text-gray-700">Colección de Pulseras</h1>
                        <p className="text-lg text-black mb-6">
                            Desde elegantes pulseras tennis hasta versátiles pulseras de charms, cada pieza está diseñada para
                            acompañarte en cada momento del día, añadiendo un toque de sofisticación a tu estilo personal.
                        </p>
                    </div>
                </div>
            </section>

            {/* Bracelet Types Guide */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif text-gray-900 mb-4">Tipos de Pulseras</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Explora los diferentes estilos de pulseras y encuentra el que mejor se adapte a tu personalidad y estilo
                            de vida.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {braceletTypes.map((item, index) => (
                            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-2xl text-gray-600">{item.icon}</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                                    <p className="text-sm text-gray-500 mb-2">{item.type}</p>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Size Guide */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif text-gray-900 mb-4">Guía de Tallas</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Encuentra la talla perfecta para tu pulsera. Una pulsera bien ajustada debe ser cómoda y permitir un
                            movimiento natural.
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-6">Tallas Disponibles</h3>
                                <div className="space-y-4">
                                    {braceletSizes.map((item, index) => (
                                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                            <div className="flex items-center">
                                                <div className="bg-gray-900 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4">
                                                    <span className="text-sm font-medium">{item.name}</span>
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900">{item.size}</p>
                                                    <p className="text-sm text-gray-600">{item.description}</p>
                                                </div>
                                            </div>
                                            <Ruler className="h-5 w-5 text-gray-400" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <img
                                    src="/cuidado.webp"
                                    alt="Guía de medición de muñeca"
                                    width={400}
                                    height={400}
                                    className="rounded-lg shadow-lg"
                                />
                                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-xl">
                                    <p className="text-sm text-gray-600 mb-2">
                                        <strong>Consejo:</strong> Mide tu muñeca con una cinta métrica flexible
                                    </p>
                                    {/* <Button size="sm" variant="outline">
                                        Descargar Guía
                                    </Button> */}
                                </div>
                            </div>
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
                                {bracelets.map((bracelt) => (
                                    <Card
                                        key={bracelt.id}
                                        className="group cursor-pointer border-0 shadow-sm hover:shadow-lg transition-shadow"
                                    >
                                        <CardContent className="p-0">
                                            <div className="relative overflow-hidden rounded-t-lg">
                                                <img
                                                    src={bracelt.image || "/placeholder.svg"}
                                                    alt={bracelt.name}
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
                                                <h3 className="font-medium text-gray-900 mb-2">{bracelt.name}</h3>
                                                <span className="text-lg font-semibold text-gray-900 mb-4 block">{bracelt.price}$</span>

                                                {/* Contenedor vertical para botones con ancho completo */}
                                                <div className="flex flex-col space-y-2">
                                                    <Button
                                                        variant="contained"
                                                        onClick={() => handleClickOpen(bracelt)}
                                                        fullWidth
                                                    >
                                                        Ver Detalles
                                                    </Button>

                                                    <Button
                                                        variant="outlined"
                                                        startIcon={token ? <ShoppingCartIcon /> : null} // Icono condicional
                                                        fullWidth
                                                        onClick={token ? () => handleAddToCart(bracelt) : null} // Click condicional
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

            {/* Bracelt Care Guide */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-serif text-gray-900 mb-6">Cuidado de Pulceras</h2>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-gray-100 p-2 rounded-full mr-4">
                                        <Diamond className="h-5 w-5 text-gray-900" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 mb-1">Uso Diario</h3>
                                        <p className="text-gray-600">
                                            Evite el contacto con perfumes, lociones y productos químicos. Póngase la pulsera después de
                                            aplicar cosméticos.  Evite el contacto con perfumes, lociones y productos químicos. Póngase la pulsera después de
                                            aplicar cosméticos.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-gray-100 p-2 rounded-full mr-4">
                                        <Diamond className="h-5 w-5 text-gray-900" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 mb-1">Limpieza Regular</h3>
                                        <p className="text-gray-600">
                                            Limpie suavemente con un paño húmedo después del uso. Para pulseras con piedras, use un cepillo
                                            suave para eliminar residuos.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-gray-100 p-2 rounded-full mr-4">
                                        <Diamond className="h-5 w-5 text-gray-900" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 mb-1">Almacenamiento</h3>
                                        <p className="text-gray-600">
                                            Guarde cada pulsera por separado en bolsas de tela suave para evitar arañazos. Mantenga alejado de
                                            la humedad.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <Button className="mt-6 bg-gray-900 hover:bg-gray-800 p-2">Descargar Guía Completa</Button>
                        </div>
                        <div className="relative">
                            <img
                                src="/pulcera.webp"
                                alt="Cuidado de collares"
                                width={500}
                                height={500}
                                className="rounded-lg shadow-lg"
                            />
                            {/* <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl max-w-xs">
                                            <p className="text-sm text-gray-600 mb-2">
                                                "Nuestros anillos están diseñados para durar toda la vida con el cuidado adecuado."
                                            </p>
                                            <p className="text-sm font-medium text-gray-900">— Maestro Joyero de ÉLÉGANCE</p>
                                        </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </JoyeriaAppLayout>
    )
}
