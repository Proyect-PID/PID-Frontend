import { useState } from 'react';
import { ArrowUpward, Diamond, ExpandMore, Filter, Star } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Badge, Breadcrumbs, Button, Card, CardContent, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { NavLink } from 'react-router-dom'
import { Ruler } from 'lucide-react';
import { JoyeriaAppLayout } from '../../layout/JoyeriaAppLayout';

export const PulserasPage = () => {
    const [sortValue, setSortValue] = useState('featured');

    const handleChange = (event) => {
        setSortValue(event.target.value);
    };

    const braceletCategories = [
        { id: "tennis", name: "Pulseras Tennis" },
        { id: "charm", name: "Pulseras de Charms" },
        { id: "bangles", name: "Brazaletes" },
        { id: "chain", name: "Pulseras de Cadena" },
        { id: "cuff", name: "Pulseras Rígidas" },
        { id: "beaded", name: "Pulseras de Cuentas" },
        { id: "leather", name: "Pulseras de Cuero" },
        { id: "vintage", name: "Pulseras Vintage" },
    ]

    const featuredCollections = [
        {
            id: 1,
            name: "Colección Tennis",
            description: "Elegancia clásica con diamantes en línea continua",
            image: "/pulcera.webp",
        },
        {
            id: 2,
            name: "Colección Charms",
            description: "Cuenta tu historia con charms personalizados",
            image: "/pulcera.webp",
        },
        {
            id: 3,
            name: "Colección Moderna",
            description: "Diseños contemporáneos para el estilo actual",
            image: "/pulcera.webp",
        },
    ]

    const bracelets = [
        {
            id: 1,
            name: "Pulsera Tennis Diamantes",
            price: "€3,450",
            originalPrice: null,
            image: "/pulcera.webp",
            rating: 5,
            isNew: true,
            category: "Tennis",
            material: "Oro Blanco 18k",
            closure: "Cierre Seguridad",
            size: "17cm",
        },
        {
            id: 2,
            name: "Brazalete Oro Rosa",
            price: "€1,850",
            originalPrice: "€2,100",
            image: "/pulcera.webp",
            rating: 5,
            isNew: false,
            category: "Brazaletes",
            material: "Oro Rosa 18k",
            closure: "Rígido",
            size: "Ajustable",
        },
        {
            id: 3,
            name: "Pulsera Charms Plata",
            price: "€650",
            originalPrice: null,
            image: "/pulcera.webp",
            rating: 4,
            isNew: false,
            category: "Charms",
            material: "Plata Sterling",
            closure: "Mosquetón",
            size: "19cm",
        },
        {
            id: 4,
            name: "Pulsera Cadena Oro",
            price: "€1,250",
            originalPrice: null,
            image: "/pulcera.webp",
            rating: 5,
            isNew: true,
            category: "Cadena",
            material: "Oro Amarillo 18k",
            closure: "Mosquetón",
            size: "18cm",
        },
        {
            id: 5,
            name: "Pulsera Perlas Cultivadas",
            price: "€950",
            originalPrice: null,
            image: "/pulcera.webp",
            rating: 4,
            isNew: false,
            category: "Cuentas",
            material: "Oro Blanco 14k",
            closure: "Elástico",
            size: "16cm",
        },
        {
            id: 6,
            name: "Brazalete Zafiros",
            price: "€2,750",
            originalPrice: null,
            image: "/pulcera.webp",
            rating: 5,
            isNew: false,
            category: "Brazaletes",
            material: "Platino",
            closure: "Rígido",
            size: "Ajustable",
        },
        {
            id: 7,
            name: "Pulsera Cuero Premium",
            price: "€450",
            originalPrice: "€550",
            image: "/pulcera.webp",
            rating: 4,
            isNew: false,
            category: "Cuero",
            material: "Cuero Italiano",
            closure: "Hebilla",
            size: "20cm",
        },
        {
            id: 8,
            name: "Pulsera Vintage Rubíes",
            price: "€2,950",
            originalPrice: null,
            image: "/pulcera.webp",
            rating: 5,
            isNew: true,
            category: "Vintage",
            material: "Oro Amarillo 18k",
            closure: "Cierre Seguridad",
            size: "17cm",
        },
    ]

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
                            Pulceras
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
                        <h1 className="text-4xl md:text-5xl font-serif mb-4 text-gray-700">Colección de Pulceras</h1>
                        <p className="text-lg text-black mb-6">
                            Desde elegantes pulseras tennis hasta versátiles pulseras de charms, cada pieza está diseñada para
                            acompañarte en cada momento del día, añadiendo un toque de sofisticación a tu estilo personal.
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
                                <div className="relative h-100 overflow-hidden">
                                    <img
                                        src={collection.image || "/placeholder.svg"}
                                        alt={collection.name}
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-black">
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
                                            Tipo de Pulceras
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {braceletCategories.map((category) => (
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
                                        <Typography fontSize="0.875rem" fontWeight={500}>Talla</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FormGroup>
                                            {braceletSizes.map((size, index) => (
                                                <FormControlLabel
                                                    key={index}
                                                    control={<Checkbox size="small" />}
                                                    label={
                                                        <Typography fontSize="0.875rem" color="text.secondary">
                                                            {size.name} - {size.size}
                                                        </Typography>
                                                    }
                                                />
                                            ))}
                                        </FormGroup>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        <Typography fontSize="0.875rem" fontWeight={500}>Tipo de Cierre</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Mosqueton</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Cierre de Seguridad</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Magnetico</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Elastico</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary"></Typography>}
                                            />
                                        </FormGroup>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        <Typography fontSize="0.875rem" fontWeight={500}>Precio</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary"> Menos de €500</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">€500 - €1,000</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">€1,000 - €2,000</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">€2,000 - €3,000</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Mas de  €3,000</Typography>}
                                            />
                                        </FormGroup>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        <Typography fontSize="0.875rem" fontWeight={500}>Material</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Oro Amarillo</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Oro Blanco</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Oro Rosa</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Platino</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Plata Sterling</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Cuero</Typography>}
                                            />
                                        </FormGroup>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        <Typography fontSize="0.875rem" fontWeight={500}>Piedras y Detalles</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Diamantes</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Perlas</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Piedras Preciosas</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Sin piedras</Typography>}
                                            />

                                        </FormGroup>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        <Typography fontSize="0.875rem" fontWeight={500}>Estilos</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Clasico</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Moderno</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Vintage</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Deportivo</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Bohemio</Typography>}
                                            />
                                        </FormGroup>
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
                                        <h2 className="text-xl font-medium text-gray-900">Pulcera</h2>
                                        <p className="text-sm text-gray-500">Mostrando {bracelets.length} productos</p>
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
                                                {bracelt.isNew && <Badge className="absolute top-3 left-3 ">Nuevo</Badge>}
                                                {bracelt.originalPrice && <Badge className="absolute top-3 left-3">Oferta</Badge>}
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
                                                            className={`h-4 w-4 ${i < bracelt.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="font-medium text-gray-900">{bracelt.name}</h3>
                                                    <div className="text-right">
                                                        {bracelt.originalPrice && (
                                                            <span className="text-sm text-gray-500 line-through block">{bracelt.originalPrice}</span>
                                                        )}
                                                        <span className="text-lg font-semibold text-gray-900">{bracelt.price}</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col space-y-2">
                                                    <div className="flex justify-between text-sm text-gray-500">
                                                        <span>{bracelt.category}</span>
                                                        <span>{bracelt.material}</span>
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
