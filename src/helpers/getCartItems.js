const baseURL = 'http://192.168.43.233:8000/api/store'

export const Cart = {
    getCartProducts: async (token) => {
        try {
            const response = await fetch(`${baseURL}/cart/`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || 'Error al obtener los productos del carrito');
            }

            const data = await response.json();
            return data; // Array de productos en el carrito
        } catch (error) {
            console.error("Error al obtener productos del carrito:", error);
            throw error;
        }
    },

    removeCartProduct: async (productId, token) => {
        try {
            const response = await fetch(`${baseURL}/cart/${productId}/delete/`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                // Intentar parsear error si hay contenido
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || 'Error al eliminar producto del carrito');
            }

            // Si la respuesta es 204 No Content, no parsear JSON
            if (response.status === 204) {
                return null; // o cualquier valor que indique éxito sin contenido
            }

            // Si hay contenido, parsearlo
            return await response.json();

        } catch (error) {
            console.error("Error al eliminar producto del carrito:", error);
            throw error;
        }
    }
}