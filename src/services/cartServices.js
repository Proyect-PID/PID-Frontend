const API_URL = 'http://192.168.43.233:8000/api/store'


export const addProductToCart = async (product, token) => {
    try {
        const response = await fetch(`${API_URL}/cart/${product.id}/add/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                // Si usas autenticación con token, agrega aquí el header Authorization, por ejemplo:
            },
            body: JSON.stringify(product),
        });

        if (!response.ok) {
            // Manejo de errores HTTP
            const errorData = await response.json();
            throw new Error(errorData.message || 'Error al agregar producto al carrito');
        }

        const data = await response.json();
        return data; // respuesta del backend (carrito actualizado o confirmación)

    } catch (error) {
        console.error("Error al agregar producto al carrito:", error);
        throw error;
    }
}


export const processPayment = async (cartItems, token) => {
    try {
        const payload = {
            items: cartItems.map(item => ({
                productId: item.id,
                quantity: item.quantity,
            })),
            // Puedes agregar otros datos necesarios para el pago, como dirección, método, etc.
        };

        const response = await fetch(`${API_URL}/checkout/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Token para autenticar la petición
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || 'Error al procesar el pago');
        }

        const data = await response.json();
        return data; // Respuesta del backend, por ejemplo confirmación del pago

    } catch (error) {
        console.error("Error al procesar el pago:", error);
        throw error;
    }
}