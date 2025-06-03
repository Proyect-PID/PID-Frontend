import { NavLink } from "react-router-dom"
import { Button, Card, CardContent, Input, InputAdornment, TextField } from "@mui/material"
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { ArrowRightIcon, Search, StarIcon } from "lucide-react";
import { AccessTimeOutlined, ArrowRight, Diamond, MilitaryTech } from "@mui/icons-material";

export const HomePage = () => {
    const featuredProducts = [
        {
            id: 1,
            name: "Anillo Solitario Diamante",
            price: "€2,850",
            originalPrice: null,
            image: "/anillo.jpg",
            rating: 5,
            isNew: true,
        },
        {
            id: 2,
            name: "Collar Perlas Cultivadas",
            price: "€1,200",
            originalPrice: null,
            image: "/collar.png",
            rating: 5,
            isBestseller: true,
        },
        {
            id: 3,
            name: "Pendientes Oro Blanco",
            price: "€890",
            originalPrice: null,
            image: "/pendiente.jpeg",
            rating: 4,
        },
        {
            id: 4,
            name: "Pulsera Tennis Diamantes",
            price: "€3,200",
            originalPrice: null,
            image: "/pulcera.webp",
            rating: 5,
        },
    ]

    const offers = [
        {
            id: 1,
            title: "Rebajas de Temporada",
            discount: "Hasta 40% OFF",
            description: "En selección de anillos y pendientes",
            image: "/pulcera.webp",
            validUntil: "31 Enero",
        },
        {
            id: 2,
            title: "Colección Nupcial",
            discount: "15% OFF",
            description: "En anillos de compromiso",
            image: "/boda.jpg",
            validUntil: "14 Febrero",
        },
        {
            id: 3,
            title: "Joyas Personalizadas",
            discount: "Grabado Gratis",
            description: "En compras superiores a €500",
            image: "/cuidado.webp",
            validUntil: "28 Febrero",
        },
    ]

    const news = [
        {
            id: 1,
            title: "Tendencias en Joyería 2024",
            excerpt: "Descubre las últimas tendencias que marcarán este año en el mundo de la joyería de lujo.",
            image: "/tendencia.webp",
            date: "15 Enero 2024",
            category: "Tendencias",
        },
        {
            id: 2,
            title: "Cuidado de Diamantes",
            excerpt: "Guía completa para mantener tus diamantes brillando como el primer día.",
            image: "/cuidado.webp",
            date: "12 Enero 2024",
            category: "Cuidados",
        },
        {
            id: 3,
            title: "Nueva Colección Primavera",
            excerpt: "Presentamos nuestra nueva colección inspirada en la naturaleza y los colores primaverales.",
            image: "/primavera.jpg",
            date: "10 Enero 2024",
            category: "Novedades",
        },
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b border-gray-100 bg-gray-800">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-8">
                            <a href="#" className="text-2xl font-serif text-yellow-500">
                                Tamoh Joya
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
                                <NavLink to="/auth/login" className="text-sm  text-white hover:text-gray-900">
                                    Iniciar Sesion
                                </NavLink>
                                <NavLink to="/auth/register" className="text-sm  text-white hover:text-gray-900">
                                    Registrar
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

            {/* Hero Section */}
            <section className="relative h-[70vh] bg-gradient-to-r from-gray-50 to-gray-100">
                <div className="container mx-auto px-4 h-full flex items-center">
                    <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-6xl font-serif text-gray-900 leading-tight">
                                Elegancia
                                <br />
                                <span className="text-gray-600">Atemporal</span>
                            </h1>
                            <p className="text-lg text-gray-600 max-w-md">
                                Descubre nuestra exclusiva colección de joyas artesanales, donde cada pieza cuenta una historia única de
                                belleza y sofisticación.
                            </p>
                            <div className="flex space-x-4">
                                <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
                                    Explorar Colección
                                </Button>

                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="/anillo.jpg"
                                alt="Joya destacada"
                                width={400}
                                height={700}
                                className="rounded-lg shadow-2xl"
                            />
                            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
                                <p className="text-sm text-gray-700">Anillo Solitario</p>
                                <p className="text-lg font-semibold text-gray-900">€2,850</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif text-gray-900 mb-4">Productos Estrella</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Nuestra selección de joyas más exclusivas, elegidas por su excepcional calidad y diseño único.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredProducts.map((product) => (
                            <Card
                                key={product.id}
                                className="group cursor-pointer border-0 shadow-sm hover:shadow-lg transition-shadow"
                            >
                                <CardContent className="p-0">
                                    <div className="relative overflow-hidden rounded-t-lg">
                                        <img
                                            src={product.image || "/placeholder.svg"}
                                            alt={product.name}
                                            width={300}
                                            height={300}
                                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        {product.isNew && <Badge className="absolute top-3 left-3">Nuevo</Badge>}
                                        {product.isBestseller && <Badge className="absolute top-3 left-3 bg-amber-600">Bestseller</Badge>}
                                        <Button
                                            size="sm"
                                            variant="secondary"
                                            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <FavoriteBorderIcon className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-center mb-2">
                                            {[...Array(5)].map((_, i) => (
                                                <StarIcon
                                                    key={i}
                                                    className={`h-4 w-4 fill-current ${i < product.rating ? "text-yellow-500" : "text-gray-400"}`}
                                                />
                                            ))}
                                        </div>
                                        <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-semibold text-gray-900">{product.price}</span>
                                            <Button size="sm" variant="outline">
                                                Ver Detalles
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Search & Offers Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif text-gray-900 mb-4">Ofertas Especiales</h2>
                        <p className="text-gray-600 mb-8">
                            Encuentra las mejores ofertas y promociones en nuestra selección de joyas.
                        </p>
                        <div className="max-w-md mx-auto mb-8">
                            <div className="relative">
                                <TextField
                                    id="search-field"
                                    label="Buscar"
                                    variant="outlined"
                                    placeholder="Buscar ofertas, productos..."
                                    fullWidth
                                    sx={{
                                        width: 400,         // ajusta el tamaño aquí
                                        borderRadius: '50px',
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '50px', // esquinas redondeadas
                                            paddingRight: '8px',
                                        },
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <SearchIcon sx={{ color: 'gray' }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {offers.map((offer) => (
                            <Card key={offer.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                                <CardContent className="p-0">
                                    <div className="relative">
                                        <img
                                            src={offer.image || "/placeholder.svg"}
                                            alt={offer.title}
                                            width={300}
                                            height={200}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <Badge className=" text-black" >{offer.discount}</Badge>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{offer.title}</h3>
                                        <p className="text-gray-600 mb-4">{offer.description}</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center text-sm text-gray-500">
                                                <AccessTimeOutlined className="h-4 w-4 mr-1" />
                                                Válido hasta {offer.validUntil}
                                            </div>
                                            <Button size="sm">
                                                Ver Oferta
                                                <ArrowRight className="h-4 w-4 ml-1" />
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* News & Updates */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif text-gray-900 mb-4">Noticias y Novedades</h2>
                        <p className="text-gray-600">
                            Mantente al día con las últimas tendencias y noticias del mundo de la joyería.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {news.map((article) => (
                            <Card key={article.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
                                <CardContent className="p-0">
                                    <div className="relative overflow-hidden rounded-t-lg">
                                        <img
                                            src={article.image || "/placeholder.svg"}
                                            alt={article.title}
                                            width={300}
                                            height={200}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <Badge className="absolute top-3 left-3 bg-white text-gray-900">{article.category}</Badge>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                                        <Button variant="ghost" className="p-0 h-auto text-gray-900 hover:text-gray-700">
                                            Leer más
                                            <ArrowRightIcon className="h-4 w-4 ml-1" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

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
