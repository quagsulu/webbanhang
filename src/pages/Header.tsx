// import React, { useContext, useEffect, useState } from 'react'
// import logo from '../Components/Assets/logo.png'
// import { Link } from 'react-router-dom'
// import { IoCartOutline } from "react-icons/io5";
// import { RiAccountPinCircleFill } from "react-icons/ri";
// import jwt, { VerifyErrors } from "jsonwebtoken"
// import {jwtDecode} from 'jwt-decode';
// import { ProductShopContext } from '../Context/Context';
// import { useMutation } from 'react-query';
// import { getUserDetail } from '../api/User';
// // import { IProduct } from '../interface/User';
// import { VscSignOut } from "react-icons/vsc";

const Header = () => {
   
    // const token = localStorage.getItem('AccessToken');
    // console.log("otk", token);
//     const [data, setData] = useState({})

    

    
//     useEffect(() => {
//         const fetchUserDetails = async () => {
//           try {
//             const token = localStorage.getItem('AccessToken');
//             if (token) {
//               const res = await getUserDetail();
//               const userDetails: IProduct = res.data;
//               setData(userDetails.response);
//               console.log("User details:", userDetails.response);
//             }
//           } catch (error) {
//             console.error("Error fetching user details:", error);
//           }
//         };
      
//         fetchUserDetails();
//       }, []);
      
 

// console.log("data", data);

  
    
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
        <div className="item">
            <a href="/signin">
                <img src="https://i.imgur.com/w1wKLvZ.png" alt="Sign In" />
            </a>
        </div>
        <div className="item">
            <img src="https://i.imgur.com/EFrNw6B.png" alt="Action" />
        </div>
    </div>
</div>
    </>
  )
}

export default Header

