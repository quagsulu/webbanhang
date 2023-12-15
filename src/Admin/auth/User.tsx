import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductShopContext } from '../../Context/Context';

const User = () => {

  const {user, isError, isLoading,deleteuser} = useContext(ProductShopContext)
  console.log('user : ', user);
  
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(isError){
    throw new Error("Something wrong")
  }

  return (
    <>
    <h1>Danh Sách Tài Khoản</h1>

<button className="them">Thêm Mới</button>
  
<div className="table-responsive small">
    <table className="table table-striped table-sm">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
        </tr>
      </thead>
      <tbody>
      {user?.map((item:any, index:number) =>(

        <tr key={index}>
          <td>{item?.id}</td>
          <td>{item?.email}</td>
          <td>{item?.password}</td>
          <td> 
            <button className="xoa" onClick={()=> deleteuser.mutate(item.id)} >Xóa</button>
            <button className="sua" >Sửa</button>
          </td>
   
        </tr>
          ))}



      </tbody>
    </table>
  </div>
    </>
  )
}

export default User