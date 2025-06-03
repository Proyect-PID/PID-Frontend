import { useState, useEffect } from "react"
import { Breadcrumbs, Button, Input, Card, CardContent } from "@mui/material"
import { NavLink, Link } from "react-router-dom"
import { ShoppingBag, Plus, Minus, Trash2, ArrowLeft, Truck, Shield, Gift, ChevronRight } from "lucide-react"
import { JoyeriaAppLayout } from "../../layout/JoyeriaAppLayout";



export const CartPage = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [couponCode, setCouponCode] = useState("")
    const [couponApplied, setCouponApplied] = useState(false)
    const [shippingMethod, setShippingMethod] = useState("standard")

    // Simular datos de carrito para demostración
    useEffect(() => {
        // En una implementación real, estos datos vendrían de localStorage, contexto o API
        setCartItems([
            {
                id: 1,
                name: "Anillo Solitario Diamante",
                price: "€2,850",
                priceNumber: 2850,
                image: "/anillo.jpg",
                quantity: 1,
                category: "Anillos",
            },
            {
                id: 2,
                name: "Collar Perlas Cultivadas",
                price: "€1,200",
                priceNumber: 1200,
                image: "/collar.png",
                quantity: 2,
                category: "Collares",
            },
        ])
    }, [])


    // Productos recomendados
    const recommendedProducts = [
        {
            id: 3,
            name: "Pendientes Oro Blanco",
            price: "€890",
            priceNumber: 890,
            image: "/pendiente.jpeg",
            category: "Pendientes",
        },
        {
            id: 4,
            name: "Pulsera Tennis Diamantes",
            price: "€3,200",
            priceNumber: 3200,
            image: "/pulcera.webp",
            category: "Pulseras",
        },
        {
            id: 5,
            name: "Reloj Clásico Oro",
            price: "€4,500",
            priceNumber: 4500,
            image: "/reloje.webp",
            category: "Relojes",
        },
    ]

    // Funciones del carrito
    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity === 0) {
            removeFromCart(productId)
        } else {
            setCartItems(cartItems.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item)))
        }
    }

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter((item) => item.id !== productId))
    }

    const addToCart = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id)

        if (existingItem) {
            setCartItems(cartItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)))
        } else {
            setCartItems([
                ...cartItems,
                {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    priceNumber: product.priceNumber,
                    image: product.image,
                    quantity: 1,
                    category: product.category,
                },
            ])
        }
    }

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.priceNumber * item.quantity, 0)
    }

    const getSubtotal = () => {
        return getTotalPrice()
    }

    const getShippingCost = () => {
        const subtotal = getSubtotal()
        if (subtotal >= 200) return 0
        return shippingMethod === "express" ? 15 : 8
    }

    const getDiscount = () => {
        return couponApplied ? Math.round(getSubtotal() * 0.1) : 0
    }

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0)
    }

    const handleApplyCoupon = () => {
        if (couponCode.toLowerCase() === "elegance10") {
            setCouponApplied(true)
        } else {
            alert("Código de cupón inválido")
        }
    }

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
                                <NavLink to="/auth/login">
                                    <Button variant="outline">Iniciar Sesión</Button>
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
                                                        src='/pulcera.webp'
                                                        alt={item.name}

                                                        className="object-cover rounded-md h-24"
                                                    />
                                                </div>
                                                <div className="flex-1 flex flex-col sm:flex-row justify-between">
                                                    <div className="space-y-1">
                                                        <h3 className="font-medium text-gray-900">{item.name}</h3>
                                                        <p className="text-sm text-gray-500">{item.category}</p>
                                                        <p className="text-lg font-semibold text-gray-900">{item.price}</p>
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
                                                            onClick={() => removeFromCart(item.id)}
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


                                {/* Opciones de envío */}
                                <div className="bg-white rounded-lg shadow-sm p-6">
                                    <h2 className="text-xl font-medium text-gray-900 mb-4">Opciones de Envío</h2>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                                            <div className="flex items-center">
                                                <input
                                                    type="radio"
                                                    id="shipping-standard"
                                                    name="shipping"
                                                    className="h-4 w-4 text-gray-900 focus:ring-gray-500"
                                                    checked={shippingMethod === "standard"}
                                                    onChange={() => setShippingMethod("standard")}
                                                />
                                                <label htmlFor="shipping-standard" className="ml-3 block">
                                                    <span className="text-sm font-medium text-gray-900">Envío Estándar</span>
                                                    <span className="block text-xs text-gray-500">Entrega en 3-5 días laborables</span>
                                                </label>
                                            </div>
                                            <span className="text-sm font-medium">{getSubtotal() >= 200 ? "Gratis" : "€8,00"}</span>
                                        </div>
                                        <div className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                                            <div className="flex items-center">
                                                <input
                                                    type="radio"
                                                    id="shipping-express"
                                                    name="shipping"
                                                    className="h-4 w-4 text-gray-900 focus:ring-gray-500"
                                                    checked={shippingMethod === "express"}
                                                    onChange={() => setShippingMethod("express")}
                                                />
                                                <label htmlFor="shipping-express" className="ml-3 block">
                                                    <span className="text-sm font-medium text-gray-900">Envío Express</span>
                                                    <span className="block text-xs text-gray-500">Entrega en 24-48 horas</span>
                                                </label>
                                            </div>
                                            <span className="text-sm font-medium">{getSubtotal() >= 200 ? "Gratis" : "€15,00"}</span>
                                        </div>
                                    </div>
                                    <div className="mt-4 text-xs text-gray-500">
                                        <p>* Envío gratuito en compras superiores a €200</p>
                                    </div>
                                </div>

                                {/* Código de cupón */}
                                <div className="bg-white rounded-lg shadow-sm p-6">
                                    <h2 className="text-xl font-medium text-gray-900 mb-4">Código Promocional</h2>
                                    <div className="flex gap-2">
                                        <div className="flex-1">
                                            <Input
                                                type="text"
                                                placeholder="Introduce tu código"
                                                value={couponCode}
                                                onChange={(e) => setCouponCode(e.target.value)}
                                                disabled={couponApplied}
                                            />
                                        </div>
                                        <Button
                                            onClick={handleApplyCoupon}
                                            disabled={couponApplied || !couponCode}
                                            className={couponApplied ? "bg-green-600 hover:bg-green-700" : "bg-gray-900 hover:bg-gray-800"}
                                        >
                                            {couponApplied ? "Aplicado" : "Aplicar"}
                                        </Button>
                                    </div>
                                    {couponApplied && (
                                        <p className="mt-2 text-sm text-green-600">¡Código ELEGANCE10 aplicado! 10% de descuento</p>
                                    )}
                                    <div className="mt-2 text-xs text-gray-500">
                                        <p>* Prueba el código "ELEGANCE10" para obtener un 10% de descuento</p>
                                    </div>
                                </div>


                            </div>

                            {/* Resumen del pedido */}
                            <div className="lg:col-span-1 space-y-6">
                                <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
                                    <h2 className="text-xl font-medium text-gray-900 mb-6">Resumen del Pedido</h2>
                                    <div className="space-y-4">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Subtotal</span>
                                            <span className="font-medium">€{getSubtotal().toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Envío</span>
                                            <span className="font-medium">
                                                {getShippingCost() === 0 ? "Gratis" : `€${getShippingCost().toLocaleString()}`}
                                            </span>
                                        </div>
                                        {couponApplied && (
                                            <div className="flex justify-between text-green-600">
                                                <span>Descuento (10%)</span>
                                                <span>-€{getDiscount().toLocaleString()}</span>
                                            </div>
                                        )}

                                        <div className="flex justify-between text-lg font-semibold">
                                            <span>Total</span>
                                            <span>€{(getSubtotal() + getShippingCost() - getDiscount()).toLocaleString()}</span>
                                        </div>
                                    </div>
                                    <Button className="w-full mt-6 bg-gray-900 hover:bg-gray-800">Proceder al Pago</Button>
                                    <div className="mt-6 space-y-4">
                                        <div className="flex items-center text-sm text-gray-600">
                                            <Truck className="h-4 w-4 mr-2 text-gray-400" />
                                            <span>Envío gratuito en compras superiores a €200</span>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600">
                                            <Shield className="h-4 w-4 mr-2 text-gray-400" />
                                            <span>Garantía de autenticidad en todos los productos</span>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600">
                                            <Gift className="h-4 w-4 mr-2 text-gray-400" />
                                            <span>Empaque de regalo disponible</span>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <h3 className="text-sm font-medium text-gray-900 mb-2">Aceptamos</h3>
                                        <div className="flex space-x-2">
                                            <div className="h-8 w-12 bg-gray-100 rounded flex items-center justify-center text-xs">VISA</div>
                                            <div className="h-8 w-12 bg-gray-100 rounded flex items-center justify-center text-xs">MC</div>
                                            <div className="h-8 w-12 bg-gray-100 rounded flex items-center justify-center text-xs">AMEX</div>
                                            <div className="h-8 w-12 bg-gray-100 rounded flex items-center justify-center text-xs">
                                                PayPal
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Productos recomendados */}
                    {cartItems.length > 0 && (
                        <div className="mt-16">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-serif text-gray-900">También te puede interesar</h2>
                                <Link href="/" className="text-sm text-gray-600 flex items-center hover:text-gray-900">
                                    Ver más
                                    <ChevronRight className="h-4 w-4 ml-1" />
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {recommendedProducts.map((product) => (
                                    <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                                        <CardContent className="p-0">
                                            <div className="relative h-48">
                                                <img
                                                    src={product.image || "/placeholder.svg"}
                                                    alt={product.name}

                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="p-4">
                                                <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
                                                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-lg font-semibold text-gray-900">{product.price}</span>
                                                    <Button
                                                        size="sm"
                                                        className="bg-gray-900 hover:bg-gray-800"
                                                        onClick={() => addToCart(product)}
                                                    >
                                                        Añadir al Carrito
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </JoyeriaAppLayout>
    )
}
