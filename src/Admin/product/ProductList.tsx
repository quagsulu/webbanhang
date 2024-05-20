import  {useContext} from 'react'
import {Link} from 'react-router-dom'
import { ProductShopContext } from '../../Context/Context'
const ListProduct = () => {

  const {products, isError, isLoading, deleteprd} = useContext(ProductShopContext)
  console.log('product :', products);
  


  if(isLoading) {
    return <div>Loading...</div>
  }
  if(isError){
    return <div>error...</div>
    
  }

  return (

        <>

<div>
      <h1>Danh Sách Sản Phẩm</h1>

<Link to={"/admin/product/add"}>
<button className="them" >Thêm Mới</button>

</Link>

<div className="table-responsive small">
    <table className="table table-striped table-sm">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">name</th>
          <th scope="col">Image</th>
          <th scope="col">Price</th>
          <th scope="col">description</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>

      {products?.map((p:any, index :number) =>(
        <tr key={index}>
          <td>{p.id}</td>
          <td>{p.name}</td>
          <td><img src={p.img}  alt=""/></td>
          <td>{p.price}</td>
          <td>{p.desc}</td>
          <td> 
            <button className="xoa"  onClick={()=> deleteprd.mutate(p.id)}>Xóa</button>
            <Link to={`/admin/product/edit/${p.id}`}>
            <button className="sua"  >Sửa</button>
            </Link>
          </td>
        </tr>

))}
      </tbody>
    </table>
  </div>
    </div>
    </>


  )
}

export default ListProduct