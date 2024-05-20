import React from 'react'
import Instance from './Instance'
import { User } from '../interface/Type'
// import { User } from '../interface/User'

export const register = (user: User) =>{
   return  Instance.post('/user/register', user)
}
export const login = (user: User) =>{
   return  Instance.post('/user/login', user)
}
export const getAllUser = () =>{
   return  Instance.get('/user')
}
export const deleteUser = (_id:number|string) =>{
   return  Instance.delete(`/user/${_id}`)
}
export const getUserDetail = async (id:any) => {
   return Instance.get('/user/'+id)
 };