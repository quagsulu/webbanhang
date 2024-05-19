// import { IProduct } from "../interface/Type"
import { IProduct } from "../interface/Type"
import Instance from "./Instance"

export const getAllProduct = () =>{
    return Instance.get('/products')
}
export const deleteProduct = (id:number | string) =>{
    return Instance.delete('/products/' +id)
}
export const getDetailProduct = (id: number | string) =>{
    return Instance.get('/products/' + id)
}
export const CreateProduct = (product : IProduct) =>{
    return Instance.post('/products/', product)
}
export const updateProduct = (product : IProduct) =>{
    return Instance.patch('/products/' + product.id,product)
}