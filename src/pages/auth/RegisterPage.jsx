import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import * as Yup from "yup"
import { Box, Breadcrumbs, Button, Card, CardContent, CardHeader, CircularProgress, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { JoyeriaAppLayout } from "../../layout/JoyeriaAppLayout"
import { Field, Form, Formik } from "formik"
import { register } from "../../services/authServices"



export const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();



    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);


    //Validacion con Yup
    const validationSchema = Yup.object({
        username: Yup.string()
            .required("El nombre de usuario es requerido")
            .min(3, "El nombre debe tener al menos 3 caracteres"),
        email: Yup.string()
            .email("Correo electrónico no válido")
            .matches(
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                "Correo electrónico no válido"
            )
            .required("Requerido"),
        password: Yup.string()
            .min(6, "Minimo 6 caracteres")
            .matches(/[a-z]/, "Debe contener al menos una letra minúscula")
            .matches(/[A-Z]/, "Debe contener al menos una letra mayúscula")
            .matches(/\d/, "Debe contener al menos un número")
            .matches(
                /[!@#$%^&*(),.?":{}|<>]/,
                "Debe contener al menos un carácter especial"
            )
            .required("Requerido"),
        confirmPassword: Yup.string()
            .required("La confirmación de la contraseña es obligatoria")
            .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
    });

    const handleSubmit = async (values) => {
        try {
            setIsLoading(true) // Activa el Spiner
            const data = {
                username: values.username,
                email: values.email,
                password: values.password,
                confirmPassword: values.confirmPassword,
            };

            await register(data);
            setSuccessMessage('Registro con éxito. Redirigiendo al login...');

            // Espera 2 segundos antes de redirigir
            setTimeout(() => {
                navigate('/auth/login');
            }, 2000);
        }
        catch (err) {
            console.error("Error al registrar:", (error && error.response && error.response.data) || error.message || error);
            alert("Error al registrar");
        }
        finally {
            setIsLoading(false); // Desactiva el spinner
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
                            <Box sx={{ width: '100%', maxWidth: 400, mx: 'auto' }}>
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
                                    />
                                    <CardContent>
                                        <Formik
                                            initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
                                            validationSchema={validationSchema}
                                            onSubmit={handleSubmit}
                                        >
                                            {({ errors, touched }) =>
                                                <Form>
                                                    <Grid>
                                                        <Grid>
                                                            <Field
                                                                name="username"
                                                                as={TextField}
                                                                label="Usuario"
                                                                variant="outlined"
                                                                fullWidth
                                                                margin="normal"
                                                                error={touched.username && Boolean(errors.username)}
                                                                helperText={touched.username && errors.username}
                                                            />

                                                        </Grid>
                                                        <Grid>
                                                            <Field
                                                                name="email"
                                                                as={TextField}
                                                                label="Email"
                                                                variant="outlined"
                                                                fullWidth
                                                                margin="normal"
                                                                error={touched.email && Boolean(errors.email)}
                                                                helperText={touched.email && errors.email}
                                                            />
                                                        </Grid>
                                                        <Grid>
                                                            <FormControl variant="outlined" fullWidth margin="normal">
                                                                <InputLabel htmlFor="password">Contraseña</InputLabel>
                                                                <Field
                                                                    label="Contraseña"
                                                                    name="password"
                                                                    as={OutlinedInput}
                                                                    id="password"
                                                                    type={showPassword ? "text" : "password"}
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
                                                                {touched.password && errors.password && (
                                                                    <p style={{ color: "red", fontSize: "12px", marginLeft: '12px' }}>{errors.password}</p>
                                                                )}
                                                            </FormControl>
                                                        </Grid>
                                                        <Grid >
                                                            <FormControl variant="outlined" fullWidth margin="normal">
                                                                <InputLabel htmlFor="confirm-password">Confirmar</InputLabel>
                                                                <Field
                                                                    label="Confirmar"
                                                                    name="confirmPassword"
                                                                    as={OutlinedInput}
                                                                    id="confirm-password"
                                                                    type={showConfirmPassword ? "text" : "password"}
                                                                    endAdornment={
                                                                        <InputAdornment position="end">
                                                                            <IconButton
                                                                                edge="end"
                                                                                onClick={handleClickShowConfirmPassword}
                                                                                aria-label="toggle confirm password visibility"
                                                                            >
                                                                                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                                                            </IconButton>
                                                                        </InputAdornment>
                                                                    }
                                                                    error={
                                                                        touched.confirmPassword &&
                                                                        Boolean(errors.confirmPassword)
                                                                    }
                                                                />
                                                                {touched.confirmPassword && errors.confirmPassword && (
                                                                    <p style={{ color: "red", fontSize: "12px", marginLeft: '12px' }}>{errors.confirmPassword}</p>
                                                                )}
                                                            </FormControl>
                                                        </Grid>
                                                    </Grid>
                                                    <div>
                                                        <Button type="submit" fullWidth variant="contained" sx={{ bgcolor: '#1f2937', height: 45, marginTop: 1, '&:hover': { bgcolor: '#374151' } }}>
                                                            {isLoading ? <CircularProgress size={24} color="inherit" /> : "Registrar"}
                                                        </Button>
                                                        {successMessage && (
                                                            <div className="bg-green-100 text-green-800 p-3 rounded mt-2">
                                                                {successMessage}
                                                            </div>
                                                        )}
                                                    </div>

                                                </Form>
                                            }
                                        </Formik>

                                        <Typography variant="body2" align="center" sx={{ color: 'gray.600', marginTop: 1 }}>
                                            ¿Ya tienes una cuenta?{' '}
                                            <NavLink to="/auth/login" underline="hover" sx={{ color: '#1f2937', fontWeight: 500 }}>
                                                Iniciar aquí
                                            </NavLink>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Box>

                            {/* Right Side - Benefits */}
                            <div className="hidden md:block">
                                <div className="sticky">
                                    <div className="relative mb-12">
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
        </JoyeriaAppLayout >

    )
}
