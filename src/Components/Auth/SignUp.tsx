import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../../api/User'
// import { User } from '../../interface/User'
import { toast } from 'react-toastify'
import { User } from '../../interface/Type'
const Signup = () => {
    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState({})
    const mutationAccount = useMutation({
        
        mutationFn: (user: User) => register(user),
        onSuccess() {
            toast.success("Thành Công Rồi Nè =))))")
            setTimeout(() =>
            navigate('/signin')
            
            ,2000)
        },
        onError() {
            // console.log(user)
            toast.error("Đăng ký thất bại. lỗi rồi")
        }

    })

    const onChange = (e: any) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value
        })
    }


    const onSubmit = (e: any) => {
        e.preventDefault()
        console.log(inputValue)
        mutationAccount.mutate(inputValue as User)
    }
    return (
        <>
            <form className="form a1"  onSubmit={onSubmit}>
                <p className="form-title">Đăng ký</p>
                <div className="input-container">
                    <label >Email :</label>
                    <input type="email" name="email" placeholder="Email..." onChange={onChange} />
                    <p className="thongbao">
                    </p>
                </div>
                <div className="input-container">
                    <label >Password :</label>
                    <input type="password" name="password" id="" placeholder="Password..." onChange={onChange}/>
                    <p className="thongbao">
                    </p>
                </div>
                <input type="submit" name="dangnhap" className="submit" />
                <p className="signup-link">
                    Đã có tài khoản?
                    <a href="/signin">Đăng nhập</a>
                </p>
            </form>
        </>
    )
}

export default Signup