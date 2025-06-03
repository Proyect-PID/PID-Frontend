import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Mail, Lock } from "lucide-react"
import { Box, Breadcrumbs, Button, Card, CardContent, CardHeader, Checkbox, Divider, IconButton, InputAdornment, InputLabel, TextField, Typography } from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { JoyeriaAppLayout } from '../../layout/JoyeriaAppLayout';

export const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false)
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
                            to="/auth/login"
                            className="font-medium"
                        >
                            Inisiar sesion
                        </NavLink>
                    </Breadcrumbs>
                </div>
            </div>

            <section className="py-16 bg-gray-50 min-h-[calc(100vh-200px)]">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Left Side - Image and Info */}
                            <div className="hidden md:block">
                                <div className="relative">
                                    <img
                                        src="/logo.jpg"
                                        alt="Joyería elegante"
                                        width={500}
                                        height={600}
                                        className="rounded-lg shadow-2xl"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent rounded-lg" />
                                </div>
                            </div>

                            {/* Right Side - Login Form */}
                            <Box sx={{ width: '100%', maxWidth: 420, mx: 'auto' }}>
                                <Card elevation={6}>
                                    <CardHeader
                                        title={
                                            <Typography
                                                variant="h5"
                                                align="center"
                                                sx={{ fontFamily: 'serif', color: '#1f2937' }}
                                            >
                                                Iniciar Sesión
                                            </Typography>
                                        }
                                        subheader={
                                            <Typography
                                                variant="body2"
                                                align="center"
                                                sx={{ color: '#4b5563', pt: 1 }}
                                            >
                                                Ingresa a tu cuenta para continuar con tu experiencia de lujo
                                            </Typography>
                                        }
                                        sx={{ pb: 3 }}
                                    />
                                    <CardContent>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
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
                                                    Continuar con Google
                                                </Button>
                                                <Button variant="outline" className="w-full h-11" type="button">
                                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                                    </svg>
                                                    Continuar con Facebook
                                                </Button>
                                            </div>

                                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, mb: 1 }}>
                                                <Divider sx={{ flexGrow: 1 }} />
                                                <Typography variant="caption" sx={{ px: 2, color: 'gray' }}>
                                                    O continúa con email
                                                </Typography>
                                                <Divider sx={{ flexGrow: 1 }} />
                                            </Box>

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

                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                    <Checkbox size="small" id="remember" />
                                                    <InputLabel htmlFor="remember" sx={{ fontSize: '0.875rem', color: 'gray' }}>
                                                        Recordar sesión
                                                    </InputLabel>
                                                </Box>
                                                <Link href="/forgot-password" underline="hover" sx={{ fontSize: '0.875rem' }}>
                                                    ¿Olvidaste tu contraseña?
                                                </Link>
                                            </Box>

                                            <Button fullWidth variant="contained" sx={{ bgcolor: '#1f2937', height: 45, '&:hover': { bgcolor: '#374151' } }}>
                                                Iniciar Sesión
                                            </Button>

                                            <Typography variant="body2" align="center" sx={{ color: 'gray.600' }}>
                                                ¿No tienes una cuenta?{' '}
                                                <NavLink to="/auth/register" underline="hover" sx={{ color: '#1f2937', fontWeight: 500 }}>
                                                    Regístrate aquí
                                                </NavLink>
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </Card>

                                <Box sx={{ mt: 4, textAlign: 'center' }}>
                                    <Typography variant="caption" color="text.secondary">
                                        Al iniciar sesión, aceptas nuestros{' '}
                                        <Link href="/terminos" underline="hover">
                                            Términos de Servicio
                                        </Link>{' '}
                                        y{' '}
                                        <Link href="/privacidad" underline="hover">
                                            Política de Privacidad
                                        </Link>
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 2, color: 'gray' }}>
                                        <Typography variant="caption">🔒 Conexión segura SSL</Typography>
                                        <Typography variant="caption">🛡️ Datos protegidos</Typography>
                                    </Box>
                                </Box>
                            </Box>

                        </div>
                    </div>
                </div>
            </section>

        </JoyeriaAppLayout>



    )
}
