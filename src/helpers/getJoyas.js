const baseURL = 'http://192.168.43.233:8000/api/store'

export const Product = {
    getCategorys: async () => {
        try {
            const response = await fetch(`${baseURL}/category/`)
            if (!response) {
                throw new Error('Error al obtener las joyas');
            }
            const data = await response.json();
            // console.log(data)
            return data;
        } catch (err) {
            console.error('Error en getJoyas', err);
            throw err;
        }
    },

    getTopJoyas: async () => {
        try {
            const response = await fetch(`${baseURL}/top-productos/`)
            if (!response) {
                throw new Error('Error al obtener las joyas');
            }
            const data = await response.json();
            // console.log(data)/
            return data;
        } catch (err) {
            console.error('Error en getTopJoyas', err);
            throw err;
        }
    },

    getAnillos: async () => {
        try {
            const response = await fetch(`${baseURL}/joyas/anillos/`)
            if (!response) {
                throw new Error('Error al obtener los anillos');
            }
            const data = await response.json();
            // console.log(data)
            return data;
        } catch (err) {
            console.error('Error en getAnillos', err);
            throw err;
        }
    },

    getNecklace: async () => {
        try {
            const response = await fetch(`${baseURL}/joyas/collares/`)
            if (!response) {
                throw new Error('Error al obtener los collares');
            }
            const data = await response.json();
            // console.log(data)
            return data;
        } catch (err) {
            console.error('Error en getNecklace', err);
            throw err;
        }
    },

    geteEarrings: async () => {
        try {
            const response = await fetch(`${baseURL}/joyas/pendientes/`)
            if (!response) {
                throw new Error('Error al obtener los pendientes');
            }
            const data = await response.json();
            // console.log(data)
            return data;
        } catch (err) {
            console.error('Error en getEarringis', err);
            throw err;
        }
    },

    geteWatches: async () => {
        try {
            const response = await fetch(`${baseURL}/joyas/relojes/`)
            if (!response) {
                throw new Error('Error al obtener los relojes');
            }
            const data = await response.json();
            // console.log(data)
            return data;
        } catch (err) {
            console.error('Error en getWatches', err);
            throw err;
        }
    },

    geteBracelets: async () => {
        try {
            const response = await fetch(`${baseURL}/joyas/pulseras/`)
            if (!response) {
                throw new Error('Error al obtener los pulseras');
            }
            const data = await response.json();
            // console.log(data)
            return data;
        } catch (err) {
            console.error('Error en getBracelets', err);
            throw err;
        }
    },
}



