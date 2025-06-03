import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Mail, Lock } from "lucide-react"
import { Box, Breadcrumbs, Button, Card, CardContent, CardHeader, Checkbox, FormControlLabel, Grid, IconButton, InputAdornment, TextField, Typography } from "@mui/material"
import { Person, Visibility, VisibilityOff } from "@mui/icons-material"
import { JoyeriaAppLayout } from "../../layout/JoyeriaAppLayout"


export const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


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
                            to="/auth/register"
                            className="font-medium"
                        >
                            Registro
                        </NavLink>
                    </Breadcrumbs>
                </div>
            </div>

            {/* Register Section */}
            <section className="py-16 bg-gray-50 min-h-[calc(100vh-200px)]">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            {/* Left Side - Form */}
                            <Box maxWidth={500} mx="auto">
                                <Card elevation={6}>
                                    <CardHeader
                                        title={
                                            <Typography
                                                variant="h5"
                                                align="center"
                                                sx={{ fontFamily: 'serif', color: '#1f2937' }}
                                            >
                                                Crear Cuenta
                                            </Typography>
                                        }
                                        subheader={
                                            <Typography
                                                variant="body2"
                                                align="center"
                                                sx={{ color: '#4b5563', pt: 1 }}
                                            >
                                                Únete a nuestra exclusiva comunidad de amantes de la joyería de lujo
                                            </Typography>
                                        }
                                        sx={{ pb: 3 }}
                                    />
                                    <CardContent>
                                        <Grid container spacing={2}>
                                            {/* Social Buttons */}
                                            <div className="space-y-3">
                                                <Button variant="outline" className="w-full h-11" type="button">
                                                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                                        <path
                                                            fill="currentColor"
                                                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                                        />
                                                        <path
                                                            fill="currentColor"
                                                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                                        />
                                                        <path
                                                            fill="currentColor"
                                                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                                        />
                                                        <path
                                                            fill="currentColor"
                                                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                                        />
                                                    </svg>
                                                    Registrar con Google
                                                </Button>
                                                <Button variant="outline" className="w-full h-11" type="button">
                                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                                    </svg>
                                                    Registrar con Facebook
                                                </Button>
                                            </div>

                                            {/* Personal Info */}
                                            <TextField
                                                fullWidth
                                                label="username"
                                                type="text"
                                                variant="outlined"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <Person fontSize="small" sx={{ color: 'gray' }} />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                            <TextField
                                                fullWidth
                                                label="Correo Electrónico"
                                                type="email"
                                                variant="outlined"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <Mail fontSize="small" sx={{ color: 'gray' }} />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                            {/* Passwords */}
                                            <TextField
                                                fullWidth
                                                label="Contraseña"
                                                type={showPassword ? 'text' : 'password'}
                                                variant="outlined"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <Lock fontSize="small" sx={{ color: 'gray' }} />
                                                        </InputAdornment>
                                                    ),
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                                                {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />

                                            <TextField
                                                fullWidth
                                                label="Confirmar Contraseña"
                                                type={showPassword ? 'text' : 'password'}
                                                variant="outlined"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <Lock fontSize="small" sx={{ color: 'gray' }} />
                                                        </InputAdornment>
                                                    ),
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                                                {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />


                                            {/* Preferences */}
                                            <Grid xs={12}>
                                                <FormControlLabel
                                                    control={<Checkbox />}
                                                    label="Quiero recibir ofertas exclusivas, noticias sobre nuevas colecciones y eventos especiales"
                                                />
                                            </Grid>
                                            <Grid xs={12}>
                                                <FormControlLabel
                                                    required
                                                    control={<Checkbox />}
                                                    label={
                                                        <Typography variant="body2">
                                                            Acepto los{' '}
                                                            <NavLink to="/terminos" underline="always" target="_blank">
                                                                Términos y Condiciones
                                                            </NavLink>
                                                        </Typography>
                                                    }
                                                />
                                            </Grid>

                                            <Grid xs={12}>
                                                <Button fullWidth variant="contained" color="primary">
                                                    Crear Cuenta
                                                </Button>
                                            </Grid>
                                            <div className="text-center">
                                                <p className="text-sm text-gray-600">
                                                    ¿Ya tienes una cuenta?{" "}
                                                    <NavLink to="/auth/login" className="text-gray-900 font-medium hover:underline">
                                                        Inicia sesión aquí
                                                    </NavLink>
                                                </p>
                                            </div>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Box>

                            {/* Right Side - Benefits */}
                            <div className="hidden md:block">
                                <div className="sticky top-8">
                                    <div className="relative mb-8">
                                        <img
                                            src="/logo.jpg"
                                            alt="Beneficios de ser miembro"
                                            width={500}
                                            height={400}
                                            className="rounded-lg shadow-2xl"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent rounded-lg" />
                                    </div>

                                    <div className="space-y-6">
                                        <div className="bg-white p-6 rounded-lg shadow-sm">
                                            <h3 className="font-semibold text-gray-900 mb-4">Beneficios Exclusivos</h3>
                                            <div className="space-y-3">
                                                <div className="flex items-center">
                                                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                                                    <span className="text-sm text-gray-600">Acceso anticipado a nuevas colecciones</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                                                    <span className="text-sm text-gray-600">Descuentos especiales en tu cumpleaños</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                                                    <span className="text-sm text-gray-600">Invitaciones a eventos exclusivos</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                                                    <span className="text-sm text-gray-600">Asesoramiento personalizado gratuito</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                                                    <span className="text-sm text-gray-600">Programa de puntos y recompensas</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                                                    <span className="text-sm text-gray-600">Servicio de limpieza gratuito</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gray-50 p-6 rounded-lg">
                                            <h3 className="font-semibold text-gray-900 mb-4">Seguridad y Privacidad</h3>
                                            <div className="space-y-2 text-sm text-gray-600">
                                                <div className="flex items-center">
                                                    <span className="mr-2">🔒</span>
                                                    <span>Datos encriptados con SSL</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <span className="mr-2">🛡️</span>
                                                    <span>Información protegida</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <span className="mr-2">✉️</span>
                                                    <span>Sin spam, solo contenido valioso</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </JoyeriaAppLayout>

    )
}
