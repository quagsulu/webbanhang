
import axios from 'axios'

const instance = axios.create({
    // baseURL: import.meta.env.VITE_URL_API
    baseURL:`http://localhost:3000`,

})
export default instance

