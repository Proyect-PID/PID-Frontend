import { useEffect, useState } from "react";
import { Product } from "../../helpers";
import { Button, Card, CardContent, Dialog, DialogActions, DialogContent } from "@mui/material"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { ShoppingCartIcon } from "lucide-react";
import { JoyeriaAppLayout } from "../../layout/JoyeriaAppLayout";
import { addProductToCart } from "../../services/cartServices";
import { NavLink } from "react-router-dom";

export const HomePage = () => {
    const [topProduct, setTopProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const token = localStorage.getItem('accessToken');

    //modal
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [open, setOpen] = useState(false);

    const handleClickOpen = (product) => {
        setSelectedProduct(product)
        setOpen(true);
    };

    const handleClose = (product) => {
        setOpen(false);
        setSelectedProduct(null)
    };

    //top productos
    useEffect(() => {
        async function fetchTop() {
            const data = await Product.getTopJoyas();
            if (data) {
                const allProducts = Object.values(data)
                    .flat()
                    .filter((item) => item)//elimina los nulos
                setTopProducts(allProducts)
            }
        }
        fetchTop()
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

            {/* Hero Section */}
            <section className="relative h-[70vh] bg-gradient-to-r from-gray-50 to-gray-100">
                <div className="container mx-auto px-4 h-full flex items-center">
                    <div className="grid md:grid-cols-1 gap-12 items-center w-full">
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-6xl font-serif text-gray-900 leading-tight text-center">
                                Brilla con elegencia, vive con estilo
                            </h1>
                            <p className="text-lg text-gray-600 text-center focus:">
                                Descubre la elegancia de la belleza y el lujo en cada pieza de nuestra joyería exclusiva.
                                Desde anillos que cuentan historias hasta collares que iluminan momentos,
                                cada joya está diseñada para realzar tu personalidad y acompañarte en tus momentos más especiales.
                                Explora nuestra colección cuidadosamente seleccionada y déjate enamorar por los productos más vendidos que han conquistado corazones.
                            </p>
                            {/* <div className="flex space-x-2">
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif text-gray-900 mb-4">Nuestros Favoritos del Momento</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Estos son los tesoros que más brillan en nuestra colección.
                            Cada uno ha sido elegido por su diseño único y la preferencia de nuestros clientes.
                            Encuentra tu próxima joya favorita y deja que cada detalle hable por ti.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {topProduct.map((product) => (
                            <Card
                                key={product.id}
                                className="group cursor-pointer border-0 shadow-sm hover:shadow-lg transition-shadow"
                            >
                                <CardContent className="p-0">
                                    <div className="relative overflow-hidden rounded-t-lg">
                                        <img
                                            src={`http://192.168.43.233:8000${product.image}`}
                                            alt={product.name}
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
                                        <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
                                        <span className="text-lg font-semibold text-gray-900 mb-4 block">{product.price}$</span>
                                        {/* Contenedor vertical para botones con ancho completo */}
                                        <div className="flex flex-col space-y-2">
                                            <Button
                                                variant="contained"
                                                onClick={() => handleClickOpen(product)}
                                                fullWidth
                                            >
                                                Ver Detalles
                                            </Button>

                                            <Button
                                                variant="outlined"
                                                startIcon={token ? <ShoppingCartIcon /> : null} // Icono condicional
                                                fullWidth
                                                onClick={token ? () => handleAddToCart(product) : null} // Click condicional
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
                                        src={`http://192.168.43.233:8000${selectedProduct.image}`}
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
            </section>
        </JoyeriaAppLayout>



    )
}
