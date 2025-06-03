import { useState } from 'react';
import { ArrowUpward, ExpandMore, Filter, Star } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Badge, Breadcrumbs, Button, Card, CardContent, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { NavLink } from 'react-router-dom'
import { Award, Clock, Droplets, Gem, Settings, Watch } from 'lucide-react';
import { JoyeriaAppLayout } from '../../layout/JoyeriaAppLayout';

export const RelojesPage = () => {

    const [sortValue, setSortValue] = useState('featured');

    const handleChange = (event) => {
        setSortValue(event.target.value);
    };

    const watchCategories = [
        { id: "dress", name: "Relojes de Vestir" },
        { id: "sport", name: "Relojes Deportivos" },
        { id: "casual", name: "Relojes Casuales" },
        { id: "luxury", name: "Relojes de Lujo" },
        { id: "chronograph", name: "Cronógrafos" },
        { id: "diving", name: "Relojes de Buceo" },
        { id: "vintage", name: "Relojes Vintage" },
        { id: "smartwatch", name: "Relojes Inteligentes" },
    ]

    const featuredCollections = [
        {
            id: 1,
            name: "Colección Clásica",
            description: "Elegancia atemporal para ocasiones especiales",
            image: "/reloje.webp",
        },
        {
            id: 2,
            name: "Colección Deportiva",
            description: "Precisión y resistencia para el estilo de vida activo",
            image: "/reloje.webp",
        },
        {
            id: 3,
            name: "Colección Luxury",
            description: "Obras maestras de la alta relojería suiza",
            image: "/reloje.webp",
        },
    ]

    const watches = [
        {
            id: 1,
            name: "Reloj Clásico Oro",
            price: "€8,950",
            originalPrice: null,
            image: "/reloje.webp",
            rating: 5,
            isNew: true,
            category: "Vestir",
            material: "Oro Amarillo 18k",
            movement: "Automático",
            caseSize: "40mm",
            waterResistance: "30m",
        },
        {
            id: 2,
            name: "Cronógrafo Deportivo",
            price: "€3,450",
            originalPrice: "€3,850",
            image: "/reloje.webp",
            rating: 5,
            isNew: false,
            category: "Deportivo",
            material: "Acero Inoxidable",
            movement: "Cuarzo",
            caseSize: "42mm",
            waterResistance: "100m",
        },
        {
            id: 3,
            name: "Reloj Vintage Cuero",
            price: "€2,150",
            originalPrice: null,
            image: "/reloje.webp",
            rating: 4,
            isNew: false,
            category: "Vintage",
            material: "Acero/Cuero",
            movement: "Manual",
            caseSize: "38mm",
            waterResistance: "50m",
        },
        {
            id: 4,
            name: "Reloj Buceo Profesional",
            price: "€4,750",
            originalPrice: null,
            image: "/reloje.webp",
            rating: 5,
            isNew: true,
            category: "Buceo",
            material: "Titanio",
            movement: "Automático",
            caseSize: "44mm",
            waterResistance: "300m",
        },
        {
            id: 5,
            name: "Reloj Dress Platino",
            price: "€12,500",
            originalPrice: null,
            image: "/reloje.webp",
            rating: 5,
            isNew: false,
            category: "Lujo",
            material: "Platino",
            movement: "Automático",
            caseSize: "39mm",
            waterResistance: "30m",
        },
        {
            id: 6,
            name: "Smartwatch Premium",
            price: "€1,250",
            originalPrice: null,
            image: "/reloje.webp",
            rating: 4,
            isNew: true,
            category: "Inteligente",
            material: "Acero/Cerámica",
            movement: "Digital",
            caseSize: "45mm",
            waterResistance: "50m",
        },
        {
            id: 7,
            name: "Reloj Casual Oro Rosa",
            price: "€2,950",
            originalPrice: "€3,200",
            image: "/reloje.webp",
            rating: 4,
            isNew: false,
            category: "Casual",
            material: "Oro Rosa 18k",
            movement: "Cuarzo",
            caseSize: "36mm",
            waterResistance: "100m",
        },
        {
            id: 8,
            name: "Cronógrafo Vintage",
            price: "€5,850",
            originalPrice: null,
            image: "/reloje.webp",
            rating: 5,
            isNew: false,
            category: "Cronógrafo",
            material: "Acero Inoxidable",
            movement: "Automático",
            caseSize: "41mm",
            waterResistance: "200m",
        },
    ]

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
                                <div className="relative h-64 overflow-hidden">
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
                                </div>
                            </div>
                        ))}
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
                                            Tipo de Reloj
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {watchCategories.map((category) => (
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
                                        <Typography fontSize="0.875rem" fontWeight={500}>Movimiento</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Automatico</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Cuarzo</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Manual</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Digital</Typography>}
                                            />
                                        </FormGroup>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        <Typography fontSize="0.875rem" fontWeight={500}>Tamaño de Caja</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FormGroup>
                                            {caseSizes.map((size, index) => (
                                                <div key={index} className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        id={`size-${index}`}
                                                        className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-500"
                                                    />
                                                    <label htmlFor={`size-${index}`} className="ml-2 text-sm text-gray-600">
                                                        {size.size} - {size.name}
                                                    </label>
                                                </div>
                                            ))}
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
                                                label={<Typography fontSize="0.875rem" color="text.secondary"> Menos de €2,000</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">€2,000 - €5,000</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">    €5,000 - €10,000</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">  €10,000 - €20,000</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">      Más de €20,000</Typography>}
                                            />
                                        </FormGroup>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        <Typography fontSize="0.875rem" fontWeight={500}>Material de Caja</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Acero Inoxidable</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Oro Amarillo</Typography>}
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
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Titanio</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Ceramica</Typography>}
                                            />

                                        </FormGroup>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        <Typography fontSize="0.875rem" fontWeight={500}>Resistencia al Agua</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">30m - Salpicaduras</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary"> 50m - Natación</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">100m - Snorkel</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">200m+ - Buceo</Typography>}
                                            />

                                        </FormGroup>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        <Typography fontSize="0.875rem" fontWeight={500}>Caracteristicas</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Cronógrafo</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Fecha</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">GMT</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Fase Lunar</Typography>}
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
                                        <h2 className="text-xl font-medium text-gray-900">Relojes</h2>
                                        <p className="text-sm text-gray-500">Mostrando {watches.length} productos</p>
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
                                                {watch.isNew && <Badge className="absolute top-3 left-3 ">Nuevo</Badge>}
                                                {watch.originalPrice && <Badge className="absolute top-3 left-3">Oferta</Badge>}
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
                                                            className={`h-4 w-4 ${i < watch.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="font-medium text-gray-900">{watch.name}</h3>
                                                    <div className="text-right">
                                                        {watch.originalPrice && (
                                                            <span className="text-sm text-gray-500 line-through block">{watch.originalPrice}</span>
                                                        )}
                                                        <span className="text-lg font-semibold text-gray-900">{watch.price}</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col space-y-2">
                                                    <div className="flex justify-between text-sm text-gray-500">
                                                        <span>{watch.category}</span>
                                                        <span>{watch.material}</span>
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
                            {/* <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl max-w-xs">
                                <p className="text-sm text-gray-600 mb-2">
                                    "Un reloj bien cuidado puede funcionar perfectamente durante generaciones y convertirse en una
                                    herencia familiar."
                                </p> 
                                 <p className="text-sm font-medium text-gray-900">— Maestro Relojero ÉLÉGANCE</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section >
        </JoyeriaAppLayout>














    )
}
