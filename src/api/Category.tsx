// import { IProduct } from "../interface/User"
import { Category } from "../interface/Type"
import Instance from "./Instance"

export const getAllCategory = async () =>{
    const data = await Instance.get('/category')
     return data.data
}
export const deleteCategory = async(id:any | string) =>{
    const data = await Instance.delete('/category/' +id)
     return data.data
}
export const getDetailCategory = async(id: any | string) =>{
    const data = await Instance.get('/category/' + id)
     return data.data
}
export const CreateCategory = async(product : Category) =>{
    const data = await Instance.post('/category/', product)
     return data.data
}
export const updateCategory = async (product : Category) =>{
    const data = await Instance.patch('/category/' + product.id,product)
     return data.data
}