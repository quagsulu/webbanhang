import  { useState } from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { login } from '../../api/User'
import { toast } from 'react-toastify'
import '../../pages/css/auth.css'
const Signin = () => {

    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState({})


    const mutationAccount = useMutation({
        mutationFn: (user: any) => login(user),
        onSuccess(response) {
            console.log(response.data)
            toast.success("Đăng Nhập Thành Công =))))")
            navigate('/')
            // Hiển thị thông báo đăng nhập thành công hoặc thực hiện các hành động khác

        },

        onError() {
            toast.error("check lại đê")

        }
    })

    const onChange = (e: any) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value
        })
    }


    const onSubmit = async (e: any) => {
        e.preventDefault()
        const response = await mutationAccount.mutateAsync(inputValue);
        console.log('response ', response);

    }
    return (
        <>
            <form method="post" className="form a1" onSubmit={onSubmit} >

                <p className="form-title">Đăng nhập</p>
                <div className="input-container">
                    <label >Email :</label>
                    <input type="text" name="email" placeholder="username..." onChange={onChange} />
                    <p className="thongbao">
                    </p>

                </div>
                <div className="input-container">
                    <label >Password :</label>
                    <input type="password" name="password" id="" placeholder="password..." onChange={onChange} />
                    <p className="thongbao">
                    </p>

                </div>
                <input type="submit" name="dangnhap" className="submit" />

                <p className="signup-link">
                    Chưa có tài khoản?
                    <a href="/signup">Đăng ký</a>
                </p>
                <p className="signup-link">
                    <a href="/signup">quên mật khẩu ?</a>
                </p>
            </form>
        </>
    )
}

export default Signin