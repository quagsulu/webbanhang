// src/context/AuthContext.js
import { createContext, useEffect, useReducer } from 'react';
// import {  getUserDetailToken } from '../api/User';
// import { useQuery } from 'react-query';
// import { useNavigate } from 'react-router-dom';
// import { getUser } from '../api/User';
const initialState = {
    isAuthenticated: false,
    user: null,
    token: localStorage.getItem('Accesstoken'),
};
// const userNavigate = useNavigate()
 const AuthContext = createContext(initialState);

const authReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token,
            };
        case 'SET_USER':
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.data,
            };
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: null,
            };
        default:
            return state;
    }
};

const AuthProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
        // const userDetail= useQuery({
        //   queryKey: ['USERDETAIL'],
        //   queryFn: async () => {
        //     // const token = state.token;
        //     const token = localStorage.getItem('token');
        //     if (token) {
        //       const data = await getUserDetailToken(token);
        //       dispatch({ type: 'SET_USER', payload: { data } });
        //       console.log('abc', data)
        //       return data;
        //     } else {
        //       throw new Error('No token found');
        //     }
        //   },
        //   enabled: !!state.token, // Chỉ chạy query khi có token
        // });
        useEffect(() => {
            const storedUserData = localStorage.getItem('detailuser');
            if (storedUserData) {
            //   setUser(JSON.parse(storedUserData));
            let data = JSON.parse(storedUserData);
              dispatch({ type: 'SET_USER', payload: { data } });
                console.log('first', data)
            }
          }, []);

    const login = (user: any, token: any) => {
        dispatch({ type: 'LOGIN_SUCCESS', payload: { user, token } });
    };

    const logout = () => {
        // confirm('Are you sure you want to log out?');
        if (confirm('Are you sure you want to log out?')){

            dispatch({ type: 'LOGOUT' });
            localStorage.removeItem('Accesstoken');
            localStorage.removeItem('detailuser');
        }
        // userNavigate('/')
        
    };
    //  logout();
    // const states = {...state}
    return (
        <AuthContext.Provider value={{ ...state, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
