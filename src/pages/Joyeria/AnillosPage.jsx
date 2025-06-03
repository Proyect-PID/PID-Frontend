import { useState } from 'react';
import { ArrowUpward, Diamond, ExpandMore, Filter, Star } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Badge, Breadcrumbs, Button, Card, CardContent, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { NavLink } from 'react-router-dom'
import { JoyeriaAppLayout } from '../../layout/JoyeriaAppLayout';


export const AnillosPage = () => {
    const [sortValue, setSortValue] = useState('featured');

    const handleChange = (event) => {
        setSortValue(event.target.value);
    };

    const ringCategories = [
        { id: "compromiso", name: "Anillos de Compromiso" },
        { id: "boda", name: "Alianzas de Boda" },
        { id: "diamantes", name: "Anillos con Diamantes" },
        { id: "piedras", name: "Anillos con Piedras Preciosas" },
        { id: "oro", name: "Anillos de Oro" },
        { id: "plata", name: "Anillos de Plata" },
        { id: "vintage", name: "Anillos Vintage" },
    ]

    const featuredCollections = [
        {
            id: 1,
            name: "Colección Eternidad",
            description: "Anillos que simbolizan un amor eterno",
            image: "/anillo.jpg",
        },
        {
            id: 2,
            name: "Colección Diamantes",
            description: "La brillantez perfecta en cada pieza",
            image: "/anillo.jpg",
        },
        {
            id: 3,
            name: "Colección Vintage",
            description: "Diseños clásicos con un toque contemporáneo",
            image: "/anillo.jpg",
        },
    ]

    const priceOptions = [
        { id: 'price-1', label: 'Menos de €1,000' },
        { id: 'price-2', label: '€1,000 - €2,000' },
        { id: 'price-3', label: '€2,000 - €3,000' },
        { id: 'price-4', label: '€3,000 - €5,000' },
        { id: 'price-5', label: 'Más de €5,000' },
    ];

    const materialOptions = [
        { id: 'material-1', label: 'Oro Amarillo' },
        { id: 'material-2', label: 'Oro Blanco' },
        { id: 'material-3', label: 'Oro Rosa' },
        { id: 'material-4', label: 'Platino' },
        { id: 'material-5', label: 'Plata' },
    ];

    const gemstoneOptions = [
        { id: 'stone-1', label: 'Diamante' },
        { id: 'stone-2', label: 'Rubí' },
        { id: 'stone-3', label: 'Zafiro' },
        { id: 'stone-4', label: 'Esmeralda' },
        { id: 'stone-5', label: 'Perla' },
    ];

    const sizes = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

    const rings = [
        {
            id: 1,
            name: "Anillo Solitario Diamante",
            price: "€2,850",
            originalPrice: null,
            image: "/anillo.jpg",
            rating: 5,
            isNew: true,
            category: "Compromiso",
            material: "Oro Blanco 18k",
        },
        {
            id: 2,
            name: "Alianza Eternidad",
            price: "€1,950",
            originalPrice: "€2,200",
            image: "/anillo.jpg",
            rating: 5,
            isNew: false,
            category: "Boda",
            material: "Platino",
        },
        {
            id: 3,
            name: "Anillo Tres Diamantes",
            price: "€3,450",
            originalPrice: null,
            image: "/anillo.jpg",
            rating: 4,
            isNew: false,
            category: "Compromiso",
            material: "Oro Amarillo 18k",
        },
        {
            id: 4,
            name: "Anillo Zafiro Azul",
            price: "€2,750",
            originalPrice: null,
            image: "/anillo.jpg",
            rating: 5,
            isNew: true,
            category: "Piedras Preciosas",
            material: "Oro Blanco 18k",
        },
        {
            id: 5,
            name: "Anillo Vintage Rubí",
            price: "€1,850",
            originalPrice: null,
            image: "/anillo.jpg",
            rating: 4,
            isNew: false,
            category: "Vintage",
            material: "Oro Rosa 18k",
        },
        {
            id: 6,
            name: "Anillo Esmeralda",
            price: "€3,250",
            originalPrice: null,
            image: "/anillo.jpg",
            rating: 5,
            isNew: false,
            category: "Piedras Preciosas",
            material: "Oro Amarillo 18k",
        },
        {
            id: 7,
            name: "Alianza Diamantes",
            price: "€1,650",
            originalPrice: "€1,950",
            image: "/anillo.jpg",
            rating: 5,
            isNew: false,
            category: "Boda",
            material: "Oro Blanco 18k",
        },
        {
            id: 8,
            name: "Anillo Perla Akoya",
            price: "€1,250",
            originalPrice: null,
            image: "/anillo.jpg",
            rating: 4,
            isNew: true,
            category: "Clásicos",
            material: "Oro Blanco 14k",
        },
    ]

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
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 h-full flex items-center relative z-10">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-serif mb-4 text-gray-700">Colección de Anillos</h1>
                        <p className="text-lg text-black mb-6">
                            Descubre nuestra exquisita selección de anillos, desde deslumbrantes solitarios de compromiso hasta
                            elegantes piezas de alta joyería, cada uno creado con la máxima atención al detalle.
                        </p>
                        <div className="flex space-x-4 p-2">
                            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                                Ver Destacados
                            </Button>
                        </div>
                    </div>
                </div>
            </section>


            {/* Featured Collections */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-serif text-gray-900 mb-8 text-center">Colecciones Destacadas</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {featuredCollections.map((collection) => (
                            <div key={collection.id} className="group cursor-pointer relative overflow-hidden rounded-lg">
                                <div className="relative h-80 overflow-hidden">
                                    <img
                                        src={collection.image || "/placeholder.svg"}
                                        alt={collection.name}
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-black">
                                    <h3 className="text-xl font-semibold mb-2">{collection.name}</h3>
                                    <p className="text-black mb-4">{collection.description}</p>
                                    <Button
                                        variant="outline"
                                        className="text-black border-white hover:bg-white hover:text-gray-900 transition-colors"
                                    >
                                        Explorar Colección
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Filter and Products */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Sidebar Filters */}
                        <div className="w-full md:w-1/4">
                            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-4">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg font-medium">Filtros</h3>
                                    <Button variant="ghost" size="sm" className="text-sm text-gray-500">
                                        Limpiar
                                    </Button>
                                </div>
                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        <Typography variant="body2" fontWeight="medium">
                                            Categoría
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {ringCategories.map((category) => (
                                            <FormControlLabel
                                                key={category.id}
                                                control={<Checkbox size="small" />}
                                                label={
                                                    <Typography variant="body2" color="text.secondary">
                                                        {category.name}
                                                    </Typography>
                                                }
                                            />
                                        ))}
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        <Typography variant="body2" fontWeight="medium">
                                            Precio
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {priceOptions.map((option) => (
                                            <FormControlLabel
                                                key={option.id}
                                                control={<Checkbox size="small" />}
                                                label={
                                                    <Typography variant="body2" color="text.secondary">
                                                        {option.label}
                                                    </Typography>
                                                }
                                            />
                                        ))}
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        <Typography variant="body2" fontWeight="medium">
                                            Material
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {materialOptions.map((option) => (
                                            <FormControlLabel
                                                key={option.id}
                                                control={<Checkbox size="small" />}
                                                label={
                                                    <Typography variant="body2" color="text.secondary">
                                                        {option.label}
                                                    </Typography>
                                                }
                                            />
                                        ))}
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        <Typography variant="body2" fontWeight="medium">
                                            Piedra
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {gemstoneOptions.map((option) => (
                                            <FormControlLabel
                                                key={option.id}
                                                control={<Checkbox size="small" />}
                                                label={
                                                    <Typography variant="body2" color="text.secondary">
                                                        {option.label}
                                                    </Typography>
                                                }
                                            />
                                        ))}
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        <Typography variant="body2" fontWeight="medium">
                                            Talla
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Grid container spacing={1}>
                                            {sizes.map((size) => (
                                                <Grid key={size}>
                                                    <Button
                                                        key={size} variant="outline" size="sm" className="h-8 w-8 p-0 text-xs"
                                                    >
                                                        {size}
                                                    </Button>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                                <div className="mt-6">
                                    <Button className="w-full bg-gray-900 hover:bg-gray-800">Aplicar Filtros</Button>
                                </div>
                            </div>
                        </div>

                        {/* Products Grid */}
                        <div className="w-full md:w-3/4">
                            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                    <div>
                                        <h2 className="text-xl font-medium text-gray-900">Anillos</h2>
                                        <p className="text-sm text-gray-500">Mostrando {rings.length} productos</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center">
                                            <label htmlFor="sort" className="text-sm text-gray-600 mr-2">
                                                Ordenar por:
                                            </label>
                                            <FormControl sx={{ width: 180, height: 36 }} size="small">
                                                <InputLabel id="sort-label">Ordenar por</InputLabel>
                                                <Select
                                                    labelId="sort-label"
                                                    value={sortValue}
                                                    onChange={handleChange}
                                                    label="Ordenar por"
                                                    sx={{ fontSize: '0.875rem' }} // text-sm equivalente
                                                >
                                                    <MenuItem value="featured">Destacados</MenuItem>
                                                    <MenuItem value="price-asc">Precio: Menor a Mayor</MenuItem>
                                                    <MenuItem value="price-desc">Precio: Mayor a Menor</MenuItem>
                                                    <MenuItem value="newest">Más Recientes</MenuItem>
                                                    <MenuItem value="rating">Mejor Valorados</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <div className="flex border rounded-md">
                                            <Button variant="ghost" size="sm" className="h-9 px-2.5">
                                                <Filter className="h-4 w-4" />
                                            </Button>
                                            <Button variant="ghost" size="sm" className="h-9 px-2.5">
                                                <ArrowUpward className="h-4 w-4" />
                                            </Button>
                                        </div>
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
                                                    className="w-64 h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                                {ring.isNew && <Badge className="absolute top-3 left-3 ">Nuevo</Badge>}
                                                {ring.originalPrice && <Badge className="absolute top-3 left-3">Oferta</Badge>}
                                                <Button
                                                    size="sm"
                                                    variant="secondary"
                                                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                                                >
                                                    <FavoriteBorderIcon className="h-4 w-4" />
                                                </Button>
                                            </div>
                                            <div className="p-4">
                                                <div className="flex items-center mb-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`h-4 w-4 ${i < ring.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="font-medium text-gray-900">{ring.name}</h3>
                                                    <div className="text-right">
                                                        {ring.originalPrice && (
                                                            <span className="text-sm text-gray-500 line-through block">{ring.originalPrice}</span>
                                                        )}
                                                        <span className="text-lg font-semibold text-gray-900">{ring.price}</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col space-y-2">
                                                    <div className="flex justify-between text-sm text-gray-500">
                                                        <span>{ring.category}</span>
                                                        <span>{ring.material}</span>
                                                    </div>
                                                    <Button size="sm" className="w-full bg-gray-900 hover:bg-gray-800">
                                                        Ver Detalles
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            <div className="mt-8 flex justify-center">
                                <div className="flex space-x-1">
                                    <Button variant="outline" size="sm" className="w-9 h-9 p-0">
                                        1
                                    </Button>
                                    <Button variant="outline" size="sm" className="w-9 h-9 p-0">
                                        2
                                    </Button>
                                    <Button variant="outline" size="sm" className="w-9 h-9 p-0">
                                        3
                                    </Button>
                                    <Button variant="outline" size="sm" className="w-9 h-9 p-0">
                                        ...
                                    </Button>
                                    <Button variant="outline" size="sm" className="w-9 h-9 p-0">
                                        8
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ring Care Guide */}
            <section className="py-16 bg-white">
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
