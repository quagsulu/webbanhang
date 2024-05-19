// import { IProduct } from "../interface/User"
import { Category, IProduct } from "../interface/Type"
import Instance from "./Instance"

export const getAllCategory = () =>{
    return Instance.get('/category')
}
export const deleteCategory = (id:any | string) =>{
    return Instance.delete('/category/' +id)
}
export const getDetailCategory = (id: any | string) =>{
    return Instance.get('/category/' + id)
}
export const CreateCategory = (product : Category) =>{
    return Instance.post('/category/', product)
}
export const updateCategory = (product : Category) =>{
    return Instance.patch('/category/' + product.id,product)
}