import { useContext } from "react"
import { AuthContext } from "../Context/AuthContex"
import './css/header.css'
// import { useQuery } from "react-query"
// import { getUserDetailToken } from "../api/User"
const Header = () => {
    const { ...state }: any = useContext(AuthContext)
    const { logout }: any = useContext(AuthContext)
    // const value: any = useContext(AuthContext)
    // const state = value.state

    const datausser = localStorage.getItem('detailuser')
    console.log("data user", datausser)
    return (

        <>
            <div id="header">
                <a href="" className="logo">
                    <img src="https://i.imgur.com/5bpFLM0.png" alt="Logo" />
                </a>
                <div id="menu">
                    <div className="item">
                        <a href="/">Trang chủ</a>
                    </div>
                    <div className="item">
                        <a href="/product">Sản phẩm</a>
                    </div>
                    <div className="item">
                        <a href="/blog">Blog</a>
                    </div>
                    <div className="item">
                        <a href="/lienhe">Liên hệ</a>
                    </div>
                </div>
                <div id="actions">
                    {state?.user ? (
                        <div className="user-nav">
                            <div className="user-icon">
                                <img src={state?.user?.avatar} alt="User Icon" className="icon iconssss" />
                                <span className="user-name">{state?.user?.name}</span>
                            </div>
                            <div className="user-dropdown">
                                <ul>
                                    <li><a href="#">Đơn đang mua</a></li>
                                    <hr />
                                    <li><a href="#">Đơn hàng đã mua</a></li>
                                    <hr />

                                    <li><a href="#">Thông tin cá nhân</a></li>
                                    <hr />

                                    <li><a href="#" onClick={() => {
                                        // confirm("Are you sure you want to log out?");
                                        // if (!confirm) 
                                            logout();
                                    }}>Đăng xuất</a></li>
                                    <hr />

                                </ul>
                            </div>
                        </div>


                    ) : (

                        <a href="/signin">
                            <div className="item centersss">
                                <img src="https://i.imgur.com/w1wKLvZ.png" alt="Sign In" />
                                Signin
                            </div>
                        </a>
                    )}
                </div>
            </div>
        </>
    )
}

export default Header

