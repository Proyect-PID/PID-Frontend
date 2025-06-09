import { useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import * as Yup from "yup"
import { Box, Breadcrumbs, Button, Card, CardContent, CardHeader, Checkbox, CircularProgress, Divider, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { JoyeriaAppLayout } from '../../layout/JoyeriaAppLayout';
import { Field, Form, Formik } from "formik"
import { login } from "../../services/authServices"
import { useAuthContext } from "../../context/AuthContext"

export const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const { setToken } = useAuthContext();
    const navigate = useNavigate()

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    //validacion con yup
    const validatioSchema = Yup.object({
        username: Yup.string()
            .required('Elnombre de usuario es requerido')
            .min(3, 'El nombre de usuario debe tener al menos 3 caracteres'),
        password: Yup.string()
            .min(6, 'La contraseña debe tener minimo 6 caracteres')
            .matches(/[a-z]/, "Debe contener al menos una letra minúscula")
            .matches(/\d/, "Debe contener al menos un número")
            .matches(
                /[!@#$%^&*(),.?":{}|<>]/,
                "Debe contener al menos un carácter especial"
            )
            .required("Requerido"),
    });

    const handleSubmit = async (values) => {
        try {
            setIsLoading(true); // Activa el spinner
            setErrorMessage(null); // Reinicia el mensaje de error

            const data = {
                username: values.username,
                password: values.password,
            };

            const response = await login(data);

            // Extraer el token de acceso
            const accessToken = response?.access;
            const refreshToken = response?.refresh;

            if (!accessToken) throw new Error("No se recibió el token de acceso.");

            // Guardar el token en el Local Storage
            setToken(accessToken)

            // Guardar token en localStorage (opcional, para persistencia)
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);


            setSuccessMessage('Bienvenido...');

            // Espera 2 segundos antes de redirigir
            setTimeout(() => {
                navigate('/');
            }, 1000);
        } catch (error) {
            // Manejo de errores adaptado a fetch
            if (error.status) {
                // Controlar respuestas específicas del servidor
                switch (error.status) {
                    case 400:
                        setErrorMessage("Credenciales incorrectas. Por favor, verifica tu usuario y contraseña.");
                        break;
                    case 404:
                        setErrorMessage("Usuario no encontrado. Por favor, regístrate primero.");
                        break;
                    case 401:
                        setErrorMessage("Tu sesión ha expirado. Inicia sesión nuevamente.");
                        break;
                    default:
                        setErrorMessage(error.detail || "Ocurrió un error inesperado. Inténtalo de nuevo más tarde.");
                        break;
                }
            } else {
                // Error de red u otro problema
                setErrorMessage("Credenciales inválidas.");
            }
        } finally {
            setIsLoading(false); // Desactiva el spinner
        }
    };


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

            {/* Form */}
            <section className="py-16 bg-gray-50 min-h-[calc(100vh-200px)]">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            {/* Left Side - Image and Info */}
                            <div className="hidden md:block mb-24">
                                <div className="relative">
                                    <img
                                        src="/logo.jpg"
                                        alt="Joyería elegante"
                                        width={500}
                                        height={100}
                                        className="rounded-lg shadow-2xl"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent rounded-lg" />
                                </div>
                            </div>

                            {/* Right Side - Login Form */}
                            <Box sx={{ width: '100%', maxWidth: 400, mx: 'auto' }}>
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
                                    />
                                    <CardContent>
                                        <Formik
                                            initialValues={{ username: '', password: '' }}
                                            validationSchema={validatioSchema}
                                            onSubmit={handleSubmit}
                                        >
                                            {({ errors, touched }) =>
                                                <Form>

                                                    <Grid>
                                                        <Field
                                                            name="username"
                                                            placeholder="Usuario o Correo"
                                                            as={TextField}
                                                            variant="outlined"
                                                            fullWidth
                                                            margin="normal"
                                                            error={touched.username && Boolean(errors.username)}
                                                            helperText={touched.username && errors.username}
                                                        />
                                                    </Grid>

                                                    <Grid>
                                                        <Field
                                                            name="password"
                                                            placeholder="Contraseña"
                                                            as={OutlinedInput}
                                                            id="password"
                                                            type={showPassword ? "text" : "password"}
                                                            fullWidth // <-- agrega esta línea
                                                            endAdornment={
                                                                <InputAdornment position="end">
                                                                    <IconButton
                                                                        edge="end"
                                                                        onClick={handleClickShowPassword}
                                                                        aria-label="toggle password visibility"
                                                                    >
                                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                                    </IconButton>
                                                                </InputAdornment>
                                                            }
                                                            error={touched.password && Boolean(errors.password)}
                                                        />
                                                    </Grid>
                                                    {/* Mensajes de error */}
                                                    {errorMessage && (
                                                        <Grid item xs={12}>
                                                            <Box
                                                                sx={{
                                                                    backgroundColor: '#fdecea',
                                                                    color: '#d32f2f',
                                                                    borderRadius: 1,
                                                                    p: 2,
                                                                    mt: 1,
                                                                    textAlign: 'center',
                                                                }}
                                                            >
                                                                {errorMessage}
                                                            </Box>
                                                        </Grid>
                                                    )}

                                                    <Button type="submit" fullWidth variant="contained" sx={{ bgcolor: '#1f2937', height: 45, marginTop: 4, '&:hover': { bgcolor: '#374151' } }}>
                                                        {isLoading ? <CircularProgress size={24} color="inherit" /> : "Iniciar Sesión"}
                                                    </Button>
                                                    {successMessage && (
                                                        <div className="bg-green-100 text-green-800 p-3 rounded mt-2">
                                                            {successMessage}
                                                        </div>
                                                    )}
                                                </Form>
                                            }
                                        </Formik>


                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Link href="/forgot-password" underline="hover" sx={{ fontSize: '0.875rem' }}>
                                                ¿Olvidaste tu contraseña?
                                            </Link>
                                        </Box>
                                        <Typography variant="body2" align="center" sx={{ color: 'gray.600' }}>
                                            ¿No tienes una cuenta?{' '}
                                            <NavLink to="/auth/register" underline="hover" sx={{ color: '#1f2937', fontWeight: 500 }}>
                                                Regístrate aquí
                                            </NavLink>
                                        </Typography>
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
