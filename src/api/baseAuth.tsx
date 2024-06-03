import axios from "axios"

export const InsanceTokenFn = (token:string, endPoint:string) => {
    const accessToken = localStorage.getItem(token)
    const API_URL = `${import.meta.env.VITE_API_URL}/api`
    const InsanceTokenAccess = axios.create({
      baseURL: `${API_URL}/${endPoint}`,
  
      headers: { Authorization: `Bearer ${accessToken}` }
    })
    return InsanceTokenAccess
  }