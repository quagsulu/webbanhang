// import React from 'react'
import Instance from './Instance'
import { User } from '../interface/Type'
import { InsanceTokenFn } from './baseAuth'
// import { User } from '../interface/User'

export const register = (user: User) => {
   return Instance.post('/user/register', user)
}
export const login = (user: User) => {
   return Instance.post('/user/login', user)
}
export const getAllUser = () => {
   return Instance.get('/user')
}
export const getUserById = (id: any) => {
   return Instance.get(`/user/${id}`)
}
export const getUser = async () => {
   const token = localStorage.getItem('token');
   const response = await Instance.get(`/user`, {
      headers: {
         'x-auth-token': token
      }
   });
   return response.data;
};
export const deleteUser = (_id: number | string) => {
   return Instance.delete(`/user/${_id}`)
}
export const getUserDetail = async (id: any) => {
   return Instance.get('/user/' + id)
};
export const getDetailUserClient = () => {
   const instanceToken = InsanceTokenFn('Accesstoken', 'user')
   return instanceToken.get('/userDetail')
}
export const getUserDetailToken = async (token: any): Promise<any>  => {
   // const token = localStorage.getItem('token');
   if (token) {
      try {
         const response = await Instance.get('/usertoken', {
            headers: {
               Authorization: token,
            },
         })
         return response.data
      } catch (error) {
         localStorage.removeItem('token');
         throw new Error('Failed to fetch user details');
      }

   }else {
      throw new Error('No token found');
    }
};
