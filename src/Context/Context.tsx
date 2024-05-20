import React, { createContext, useEffect, useState } from 'react'
import { useMutation, useQueryClient, useQuery } from 'react-query'
import { toast } from 'react-toastify'
import { deleteProduct, getAllProduct, getDetailProduct } from '../api/Product'
// import { IProduct, User } from '../interface/User'
import { deleteUser, getAllUser, getUserDetail } from '../api/User'
import { getAllCategory, deleteCategory } from '../api/Category'
import { Category, IProduct, User } from '../interface/Type'

export const ProductShopContext = createContext({} as any)

const ProductContext = ({ children }: { children: React.ReactNode }) => {

    const queryClient = useQueryClient();

    const { data: products, isLoading, isError } = useQuery({
        queryKey: ['PRODUCTS'],
        queryFn: async () => {
            try {
                const { data } = await getAllProduct()
                console.log("data", data);
                return data as IProduct[]

            } catch (error) {
                console.error('Error fetching products:', error);
                throw error;
            }
        }
    })
    const { data: ProductDetail } = useQuery({
        queryKey: ['PRODUCTDETAIL'],
        queryFn: async (id: any) => {
            try {
                const { data } = await getDetailProduct(id)
                console.log("data", data);
                return data as IProduct[]

            } catch (error) {
                console.error('Error fetching products:', error);
                throw error;
            }
        }
    })
    const { data: category, isLoading: isLoadingcate, isError: isErrorcate } = useQuery({
        queryKey: ['CATEGORY'],
        queryFn: async () => {
            try {
                const { data } = await getAllCategory()
                console.log("data", data);
                return data as Category[]

            } catch (error) {
                console.error('Error fetching products:', error);
                throw error;
            }
        }
    })
    const { data: user } = useQuery({
        queryKey: ['USERS'],
        queryFn: async () => {
            try {
                const { data } = await getAllUser()
                console.log("data", data);
                return data as User[]

            } catch (error) {
                console.error('Error fetching products:', error);
                throw error;
            }
        }
    })
    const { data: getUsesrDetail } = useQuery({
        queryKey: ['USERDETAIL'],
        queryFn: async (id: any) => {
            try {
                const { data } = await getUserDetail(id)
                console.log("data", data);
                return data as User[]

            } catch (error) {
                console.error('Error fetching products:', error);
                throw error;
            }
        }
    })

    const deleteuser = useMutation({
        mutationFn: (_id: any) => deleteUser(_id),
        onSuccess() {
            alert('User deleted');
            queryClient.invalidateQueries({
                queryKey: ['USER']
            })
        }
    })


    const deleteCate = useMutation({
        mutationFn: (_id: any) => deleteCategory(_id),
        onSuccess() {
            alert('CATEGORY deleted successfully');
            queryClient.invalidateQueries({
                queryKey: ['CATEGORY']
            })
        }
    })
    const deleteprd = useMutation({
        mutationFn: (_id: any) => deleteProduct(_id),
        onSuccess() {
            alert('Product deleted successfully');
            queryClient.invalidateQueries({
                queryKey: ['PRODUCTS']
            })
        }
    })


    const ContextValue = {
        products, category, user,
        ProductDetail, getUsesrDetail,
        isError, isErrorcate,
        isLoading, isLoadingcate,
        deleteprd, deleteuser, deleteCate
    }
    return (
        <ProductShopContext.Provider value={ContextValue}>
            {children}
        </ProductShopContext.Provider>
    )
}

export default ProductContext