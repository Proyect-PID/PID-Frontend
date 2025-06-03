import { useState } from 'react';
import { ArrowUpward, Diamond, ExpandMore, Filter, Star } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Badge, Breadcrumbs, Button, Card, CardContent, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { NavLink } from 'react-router-dom'
import { Ruler } from 'lucide-react';
import { JoyeriaAppLayout } from '../../layout/JoyeriaAppLayout';

export const CollaresPage = () => {
    const [sortValue, setSortValue] = useState('featured');

    const handleChange = (event) => {
        setSortValue(event.target.value);
    };


    const necklaceCategories = [
        { id: "chokers", name: "Chokers" },
        { id: "gargantillas", name: "Gargantillas" },
        { id: "perlas", name: "Collares de Perlas" },
        { id: "diamantes", name: "Collares con Diamantes" },
        { id: "cadenas", name: "Cadenas" },
        { id: "pendientes", name: "Collares con Colgante" },
        { id: "largos", name: "Collares Largos" },
        { id: "vintage", name: "Collares Vintage" },
    ]

    const featuredCollections = [
        {
            id: 1,
            name: "Colección Perlas Akoya",
            description: "Elegancia clásica con perlas cultivadas japonesas",
            image: "/collar.png",
        },
        {
            id: 2,
            name: "Colección Diamantes",
            description: "Brillantez excepcional en cada eslabón",
            image: "/collar.png",
        },
        {
            id: 3,
            name: "Colección Vintage",
            description: "Diseños atemporales con un toque contemporáneo",
            image: "/collar.png",
        },
    ]

    const necklaceLengths = [
        { length: "35cm", name: "Choker", description: "Se ajusta al cuello" },
        { length: "40cm", name: "Gargantilla", description: "Descansa en la base del cuello" },
        { length: "45cm", name: "Princesa", description: "Longitud clásica más popular" },
        { length: "50cm", name: "Matinée", description: "Cae sobre el escote" },
        { length: "60cm", name: "Ópera", description: "Llega hasta el busto" },
        { length: "80cm+", name: "Sautoir", description: "Collar largo, versátil" },
    ]

    const necklaces = [
        {
            id: 1,
            name: "Collar Perlas Akoya",
            price: "€1,850",
            originalPrice: null,
            image: "/collar.png",
            rating: 5,
            isNew: true,
            category: "Perlas",
            material: "Oro Blanco 18k",
            length: "45cm",
        },
        {
            id: 2,
            name: "Gargantilla Diamantes",
            price: "€2,950",
            originalPrice: "€3,200",
            image: "/collar.png",
            rating: 5,
            isNew: false,
            category: "Diamantes",
            material: "Oro Blanco 18k",
            length: "40cm",
        },
        {
            id: 3,
            name: "Collar Rivière Diamantes",
            price: "€4,850",
            originalPrice: null,
            image: "/collar.png",
            rating: 5,
            isNew: false,
            category: "Diamantes",
            material: "Platino",
            length: "42cm",
        },
        {
            id: 4,
            name: "Choker Oro Rosa",
            price: "€1,250",
            originalPrice: null,
            image: "/collar.png",
            rating: 4,
            isNew: true,
            category: "Chokers",
            material: "Oro Rosa 18k",
            length: "35cm",
        },
        {
            id: 5,
            name: "Collar Vintage Esmeralda",
            price: "€3,450",
            originalPrice: null,
            image: "/collar.png",
            rating: 5,
            isNew: false,
            category: "Vintage",
            material: "Oro Amarillo 18k",
            length: "50cm",
        },
        {
            id: 6,
            name: "Cadena Serpiente",
            price: "€890",
            originalPrice: null,
            image: "/collar.png",
            rating: 4,
            isNew: false,
            category: "Cadenas",
            material: "Oro Amarillo 14k",
            length: "60cm",
        },
        {
            id: 7,
            name: "Collar Perlas Tahití",
            price: "€2,650",
            originalPrice: "€2,950",
            image: "/collar.png",
            rating: 5,
            isNew: false,
            category: "Perlas",
            material: "Oro Blanco 18k",
            length: "48cm",
        },
        {
            id: 8,
            name: "Collar Colgante Zafiro",
            price: "€1,950",
            originalPrice: null,
            image: "/collar.png",
            rating: 4,
            isNew: true,
            category: "Colgantes",
            material: "Oro Blanco 18k",
            length: "45cm",
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
                            to="/collares"
                            className="font-medium"
                        >
                            Collares
                        </NavLink>
                    </Breadcrumbs>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative h-[50vh] bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                <div className="absolute inset-0 opacity-30">
                    <img
                        src="/collar.png?height=800&width=1600"
                        alt="Colección de anillos"
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 h-full flex items-center relative z-10">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-serif mb-4 text-gray-700">Colección de Collares</h1>
                        <p className="text-lg text-black mb-6">
                            Desde elegantes gargantillas hasta sofisticados collares de perlas, cada pieza está diseñada para realzar
                            tu belleza natural y expresar tu estilo único con la máxima elegancia.
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

            {/* Necklace Length Guide */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif text-gray-900 mb-4">Guía de Longitudes</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Encuentra la longitud perfecta para cada ocasión. Cada estilo de collar tiene su propia personalidad y
                            forma de realzar tu belleza.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {necklaceLengths.map((item, index) => (
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
                                        {necklaceCategories.map((category) => (
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
                                        <Typography fontSize="0.875rem" fontWeight={500}>Longitud</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">35cm - Choker</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">40cm - Gargantilla</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">45cm - Princesa</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">50cm - Matinée</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">60cm+ - Ópera/Sautoir</Typography>}
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
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Menos de €1,000</Typography>}
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
                                                label={<Typography fontSize="0.875rem" color="text.secondary">€3,000 - €5,000</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Más de €5,000</Typography>}
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
                                        </FormGroup>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        <Typography fontSize="0.875rem" fontWeight={500}>Piedras y Perlas</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Diamantes</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Perlas Akoya</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Perlas Tahití</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Piedras Preciosas</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Sin Piedras</Typography>}
                                            />
                                        </FormGroup>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        <Typography fontSize="0.875rem" fontWeight={500}>Estilo</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Clásico</Typography>}
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
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Minimalista</Typography>}
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
                                        <h2 className="text-xl font-medium text-gray-900">Collares</h2>
                                        <p className="text-sm text-gray-500">Mostrando {necklaces.length} productos</p>
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
                                {necklaces.map((necklace) => (
                                    <Card
                                        key={necklace.id}
                                        className="group cursor-pointer border-0 shadow-sm hover:shadow-lg transition-shadow"
                                    >
                                        <CardContent className="p-0">
                                            <div className="relative overflow-hidden rounded-t-lg">
                                                <img
                                                    src={necklace.image || "/placeholder.svg"}
                                                    alt={necklace.name}
                                                    width={300}
                                                    height={300}
                                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                                {necklace.isNew && <Badge className="absolute top-3 left-3 ">Nuevo</Badge>}
                                                {necklace.originalPrice && <Badge className="absolute top-3 left-3">Oferta</Badge>}
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
                                                            className={`h-4 w-4 ${i < necklace.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="font-medium text-gray-900">{necklace.name}</h3>
                                                    <div className="text-right">
                                                        {necklace.originalPrice && (
                                                            <span className="text-sm text-gray-500 line-through block">{necklace.originalPrice}</span>
                                                        )}
                                                        <span className="text-lg font-semibold text-gray-900">{necklace.price}</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col space-y-2">
                                                    <div className="flex justify-between text-sm text-gray-500">
                                                        <span>{necklace.category}</span>
                                                        <span>{necklace.material}</span>
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

            {/* Necklace Care Guide */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-serif text-gray-900 mb-6">Cuidado de Collares</h2>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-gray-100 p-2 rounded-full mr-4">
                                        <Diamond className="h-5 w-5 text-gray-900" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 mb-1">Almacenamiento Colgado</h3>
                                        <p className="text-gray-600">
                                            Cuelgue sus collares individualmente para evitar enredos y mantener su forma original. Use ganchos
                                            forrados de tela.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-gray-100 p-2 rounded-full mr-4">
                                        <Diamond className="h-5 w-5 text-gray-900" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 mb-1">Limpieza de Perlas</h3>
                                        <p className="text-gray-600">
                                            Las perlas requieren cuidado especial. Límpielas con un paño húmedo suave después de cada uso y
                                            evite productos químicos.
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
                                src="/collar.png"
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
