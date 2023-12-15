import React from 'react'
import Instance from './Instance'
import { User } from '../interface/User'

export const register = (user: User) =>{
   return  Instance.post('/users/register', user)
}
export const login = (user: User) =>{
   return  Instance.post('/users/login', user)
}
export const getAllUser = () =>{
   return  Instance.get('/users')
}
export const deleteUser = (_id:number|string) =>{
   return  Instance.delete(`/users/${_id}`)
}
export const getUserDetail = async (id:any) => {
   return Instance.get('/users/'+id)
 };