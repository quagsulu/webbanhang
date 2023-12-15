import React, { createContext, useEffect, useState } from 'react'
import {useMutation,useQueryClient,useQuery} from 'react-query'
import { toast } from 'react-toastify'
import { deleteProduct, getAllProduct } from '../api/Product'
import { IProduct, User } from '../interface/User'
import { deleteUser, getAllUser, getUserDetail } from '../api/User'

export const ProductShopContext = createContext({} as any)

const ProductContext = ({children} : {children : React.ReactNode}) => {

    const queryClient = useQueryClient();

    const {data :products , isLoading, isError} = useQuery({
        queryKey: ['PRODUCTS'],
        queryFn: async() =>{
            try {
                const {data} = await getAllProduct()
                console.log("data",data);
                return data as IProduct[]
                
            } catch (error) {
                console.error('Error fetching products:', error);
                throw error;
            }
        }
    })

    const {data :user} = useQuery({
        queryKey: ['USERS'],
        queryFn: async() =>{
            try {
                const {data} = await getAllUser()
                console.log("data",data);
                return data as User[]
                
            } catch (error) {
                console.error('Error fetching products:', error);
                throw error;
            }
        }
    })
    

    const deleteuser = useMutation({
        mutationFn : (_id:any) => deleteUser(_id),
        onSuccess() {
            alert('User deleted');
            queryClient.invalidateQueries({
                queryKey:['USER']
            })
        }
    })


    const deleteprd = useMutation({
        mutationFn : (_id:any) => deleteProduct(_id),
        onSuccess() {
            alert('Product deleted successfully');
            queryClient.invalidateQueries({
                queryKey:['PRODUCTS']
            })
        }
    })


    const ContextValue = {products, isError,isLoading, deleteprd, user,deleteuser}
  return (
    <ProductShopContext.Provider value={ContextValue}>
        {children}
    </ProductShopContext.Provider>
  )
}

export default ProductContext