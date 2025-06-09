import { useState, useEffect } from "react"
import { Breadcrumbs, Button, Typography } from "@mui/material"
import { NavLink, Link, useNavigate } from "react-router-dom"
import { ShoppingBag, Plus, Minus, Trash2, ArrowLeft } from "lucide-react"
import { JoyeriaAppLayout } from "../../layout/JoyeriaAppLayout";
import { Cart } from "../../helpers/getCartItems";
import { processPayment } from "../../services/cartServices";


export const CartPage = () => {
    const [cartItems, setCartItems] = useState([])
    const [loading, setLoading] = useState(true);
    const [loadingCheckout, setLoadingCheckout] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const token = localStorage.getItem('accessToken');

    //items del carrito
    useEffect(() => {
        const fetchCart = async () => {
            try {
                if (!token) {
                    setError('Debes iniciar sesión para ver el carrito.');
                    setLoading(false);
                    return;
                }
                const items = await Cart.getCartProducts(token);
                setCartItems(items);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCart();
    }, [token]);

    // console.log(cartItems)

    // Funciones del carrito
    const handleRemove = async (productId) => {
        try {
            await Cart.removeCartProduct(productId, token);
            // Actualizar estado local filtrando el producto eliminado
            setCartItems(cartItems.filter((item) => item.id !== productId))
        } catch (err) {
            console.error(err);
            // Opcional: mostrar mensaje de error al usuario
        }
    }

    //check de compra
    const handleCheckout = async () => {
        setLoadingCheckout(true);
        try {
            const token = localStorage.getItem('accessToken');
            if (!token) {
                alert('Debes iniciar sesión para proceder al pago.');
                setLoadingCheckout(false);
                return;
            }

            // Llamar a la función para hacer el POST
            const response = await processPayment(cartItems, token);

            // Manejar la respuesta exitosa
            alert('Pago procesado con éxito. Redirigiendo...');
            navigate('/')
            setCartItems([])

        } catch (error) {
            // Manejar el error
            alert(`Error al procesar el pago: ${error.message}`);
            if (onPaymentError) {
                onPaymentError(error); // Notificar al componente padre
            }
        } finally {
            setLoadingCheckout(false);
        }
    };

    //Actulaizar cantidad de compra
    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity === 0) {
            Cart.removeCartProduct(productId, token)
            setCartItems(cartItems.filter((item) => item.id !== productId))
        } else {
            setCartItems(cartItems.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item)))
        }
    }

    //precio tota
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    };

    //items totales
    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0)
    }



    if (loading) return <Typography>Cargando carrito...</Typography>;
    if (error) return <Typography color="error">{error}</Typography>;

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
                            to="/cart"
                            className="font-medium"
                        >
                            Carrito
                        </NavLink>
                    </Breadcrumbs>
                </div>
            </div>

            {/* Cart Page Content */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-serif text-gray-900 mb-8">Carrito de Compras</h2>
                    {cartItems.length === 0 ? (
                        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                            <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                            <h2 className="text-2xl font-medium text-gray-900 mb-2">Tu carrito está vacío</h2>
                            <p className="text-gray-600 mb-6">
                                Parece que aún no has añadido ningún producto a tu carrito de compras.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <NavLink to="/">
                                    <Button className="bg-gray-900 hover:bg-gray-800">Continuar Comprando</Button>
                                </NavLink>
                            </div>
                        </div>
                    ) : (
                        <div className="grid lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 space-y-6">
                                <div className="bg-white rounded-lg shadow-sm p-6">
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="text-xl font-medium text-gray-900">Productos ({getTotalItems()})</h2>
                                        <Link href="/" className="text-sm text-gray-600 flex items-center hover:text-gray-900">
                                            <ArrowLeft className="h-4 w-4 mr-1" />
                                            Continuar Comprando
                                        </Link>
                                    </div>


                                    <div className="space-y-6">
                                        {cartItems.map((item) => (
                                            <div key={item.id} className="flex flex-col sm:flex-row gap-4 pb-6 border-b">
                                                <div className="w-full sm:w-24 h-24 relative">
                                                    <img
                                                        src={item.product.image}
                                                        alt={item.product.name}

                                                        className="object-cover rounded-md h-24"
                                                    />
                                                </div>
                                                <div className="flex-1 flex flex-col sm:flex-row justify-between">
                                                    <div className="space-y-1">
                                                        <h3 className="font-medium text-gray-900">{item.product.name}</h3>
                                                        {/* <p className="text-sm text-gray-500">Disponibles: {item.product.stock}</p> */}
                                                        <p className="text-lg font-semibold text-gray-900">{item.product.price}$</p>
                                                    </div>
                                                    <div className="flex items-center justify-between sm:flex-col sm:items-end mt-4 sm:mt-0">
                                                        <div className="flex items-center border rounded-md">
                                                            <Button
                                                                variant="ghost"
                                                                size="sm"
                                                                className="h-8 px-2"
                                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            >
                                                                <Minus className="h-3 w-3" />
                                                            </Button>
                                                            <span className="w-8 text-center">{item.quantity}</span>
                                                            <Button
                                                                variant="ghost"
                                                                size="sm"
                                                                className="h-8 px-2"
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            >
                                                                <Plus className="h-3 w-3" />
                                                            </Button>
                                                        </div>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            className="text-red-500 hover:text-red-700 hover:bg-red-50 mt-2"
                                                            onClick={() => handleRemove(item.id)}
                                                        >
                                                            <Trash2 className="h-4 w-4 mr-1" />
                                                            <span className="text-xs">Eliminar</span>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>

                            {/* Resumen del pedido */}
                            <div className="lg:col-span-1 space-y-6">
                                <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
                                    <h2 className="text-xl font-medium text-gray-900 mb-6">Resumen del Pedido</h2>
                                    <div className="space-y-4">
                                        <div className="flex justify-between text-lg font-semibold">
                                            <span>Total</span>
                                            <span>{getTotalPrice()}$</span>
                                        </div>
                                    </div>
                                    <Button
                                        className="w-full bg-gray-900 hover:bg-gray-800"
                                        onClick={handleCheckout}
                                        disabled={loadingCheckout}
                                    >
                                        {loadingCheckout ? 'Procesando...' : 'Proceder al Pago'}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </JoyeriaAppLayout>
    )
}
