// import { IProduct } from "../interface/Type"
import { IProduct } from "../interface/Type"
import Instance from "./Instance"

export const getAllProduct = async() =>{
    const data = await Instance.get('/product')
    return data.data
}
export const deleteProduct = async(id:number | string) =>{
    const data = await Instance.delete('/product/' +id)
    return data.data
}
export const getDetailProduct = async(id: number | string) =>{
    const data = await Instance.get('/product/' + id)
    return data.data
}
export const CreateProduct = async(product : IProduct) =>{
    const result = await Instance.post('/product/', product)
    console.log(result)
    return result.data
}
export const updateProduct = async(product : IProduct) =>{
    const result = await Instance.patch('/product/' + product._id,product)
    return result.data
}