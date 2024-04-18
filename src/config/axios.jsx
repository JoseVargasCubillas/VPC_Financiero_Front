import axios from "axios";

const clienteAxios = axios.create({
    baseURL: `https://lobster-app-tjkht.ondigitalocean.app/api`,
})

export default clienteAxios;