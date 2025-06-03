import { useState } from 'react';
import { ArrowUpward, Diamond, ExpandMore, Filter, Star } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Badge, Breadcrumbs, Button, Card, CardContent, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { NavLink } from 'react-router-dom'
import { Ruler } from 'lucide-react';
import { JoyeriaAppLayout } from '../../layout/JoyeriaAppLayout';


export const PendientesPage = () => {
    const [sortValue, setSortValue] = useState('featured');

    const handleChange = (event) => {
        setSortValue(event.target.value);
    };

    const earringCategories = [
        { id: "studs", name: "Pendientes de Botón" },
        { id: "hoops", name: "Aros" },
        { id: "drops", name: "Pendientes Colgantes" },
        { id: "chandelier", name: "Pendientes Chandelier" },
        { id: "huggie", name: "Huggie Hoops" },
        { id: "climbers", name: "Ear Climbers" },
        { id: "threader", name: "Threader Earrings" },
        { id: "vintage", name: "Pendientes Vintage" },
    ]

    const featuredCollections = [
        {
            id: 1,
            name: "Colección Diamantes",
            description: "Brillantez pura en cada movimiento",
            image: "/pendiente.jpeg",
        },
        {
            id: 2,
            name: "Colección Perlas",
            description: "Elegancia clásica y sofisticación atemporal",
            image: "/pendiente.jpeg",
        },
        {
            id: 3,
            name: "Colección Moderna",
            description: "Diseños contemporáneos para la mujer actual",
            image: "/pendiente.jpeg",
        },
    ]

    const earrings = [
        {
            id: 1,
            name: "Pendientes Solitario Diamante",
            price: "€1,450",
            originalPrice: null,
            image: "/pendiente.jpeg",
            rating: 5,
            isNew: true,
            category: "Studs",
            material: "Oro Blanco 18k",
            closure: "Presión",
            size: "Pequeño",
        },
        {
            id: 2,
            name: "Aros Diamantes Eternidad",
            price: "€2,850",
            originalPrice: "€3,100",
            image: "/pendiente.jpeg",
            rating: 5,
            isNew: false,
            category: "Aros",
            material: "Oro Blanco 18k",
            closure: "Bisagra",
            size: "Mediano",
        },
        {
            id: 3,
            name: "Pendientes Colgantes Perla",
            price: "€1,950",
            originalPrice: null,
            image: "/pendiente.jpeg",
            rating: 4,
            isNew: false,
            category: "Colgantes",
            material: "Oro Amarillo 18k",
            closure: "Gancho",
            size: "Mediano",
        },
        {
            id: 4,
            name: "Huggie Hoops Zafiro",
            price: "€1,650",
            originalPrice: null,
            image: "/pendiente.jpeg",
            rating: 5,
            isNew: true,
            category: "Huggie",
            material: "Oro Rosa 18k",
            closure: "Bisagra",
            size: "Pequeño",
        },
        {
            id: 5,
            name: "Chandelier Esmeralda",
            price: "€3,750",
            originalPrice: null,
            image: "/pendiente.jpeg",
            rating: 5,
            isNew: false,
            category: "Chandelier",
            material: "Oro Amarillo 18k",
            closure: "Gancho",
            size: "Grande",
        },
        {
            id: 6,
            name: "Ear Climbers Modernos",
            price: "€1,250",
            originalPrice: null,
            image: "/pendiente.jpeg",
            rating: 4,
            isNew: true,
            category: "Climbers",
            material: "Oro Blanco 14k",
            closure: "Presión",
            size: "Mediano",
        },
        {
            id: 7,
            name: "Aros Perlas Tahití",
            price: "€2,450",
            originalPrice: "€2,750",
            image: "/pendiente.jpeg",
            rating: 5,
            isNew: false,
            category: "Aros",
            material: "Oro Blanco 18k",
            closure: "Bisagra",
            size: "Grande",
        },
        {
            id: 8,
            name: "Studs Rubí Vintage",
            price: "€1,850",
            originalPrice: null,
            image: "/pendiente.jpeg",
            rating: 4,
            isNew: false,
            category: "Vintage",
            material: "Oro Rosa 18k",
            closure: "Rosca",
            size: "Pequeño",
        },
    ]

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
                        src="/pendiente.jpeg?height=800&width=1600"
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
                                <div className="relative h-120 overflow-hidden">
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
                                            Tipo de Pendiente
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {earringCategories.map((category) => (
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
                                        <Typography fontSize="0.875rem" fontWeight={500}>Tamaño</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Pequeño (hasta 1cm)</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Mediano (1-3cm)</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Grande (mas de 3cm)</Typography>}
                                            />
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
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Presion</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Rosca</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Gancho</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Bisagra</Typography>}
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
                                                label={<Typography fontSize="0.875rem" color="text.secondary"> Menos de €1,000</Typography>}
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
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Más de €3,000</Typography>}
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
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Perlas</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Zafiros</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Rubies</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Esmeraldas</Typography>}
                                            />
                                        </FormGroup>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMore />}>
                                        <Typography fontSize="0.875rem" fontWeight={500}>Ocasion</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Uso Diario</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Oficina</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Eventos Especiales</Typography>}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox size="small" />}
                                                label={<Typography fontSize="0.875rem" color="text.secondary">Boda</Typography>}
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
                                        <h2 className="text-xl font-medium text-gray-900">Pendientes</h2>
                                        <p className="text-sm text-gray-500">Mostrando {earrings.length} productos</p>
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
                                                {erring.isNew && <Badge className="absolute top-3 left-3 ">Nuevo</Badge>}
                                                {erring.originalPrice && <Badge className="absolute top-3 left-3">Oferta</Badge>}
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
                                                            className={`h-4 w-4 ${i < erring.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="font-medium text-gray-900">{erring.name}</h3>
                                                    <div className="text-right">
                                                        {erring.originalPrice && (
                                                            <span className="text-sm text-gray-500 line-through block">{erring.originalPrice}</span>
                                                        )}
                                                        <span className="text-lg font-semibold text-gray-900">{erring.price}</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col space-y-2">
                                                    <div className="flex justify-between text-sm text-gray-500">
                                                        <span>{erring.category}</span>
                                                        <span>{erring.material}</span>
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
                                src="/pendiente.jpeg"
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
