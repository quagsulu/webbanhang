import axios from 'axios';
import React, { useState, useContext } from 'react'
import { useMutation, useQuery } from 'react-query';
import { getDetailProduct, updateProduct } from '../api/Product';
import { Navigate, useParams } from 'react-router-dom';
import { IProduct } from '../interface/User';
import { toast } from 'react-toastify'
// import { Link, useNavigate } from 'react-router-dom'

const UpdateProduct = () => {
  const { id } = useParams()
  const [value, setvalue] = useState({})

  const { data, isLoading, isError } = useQuery({
    queryKey: ['PRODUCT', id],
    queryFn: async () => {
      try {
        const respone = await axios.get(`http://localhost:3000/products/${id}`)
        console.log("respone", respone);
        console.log('data 2', respone.data);
        return respone.data
      } catch (error) {
        console.log(error)
      }
    }
  })


console.log('data', data) 

  if (isLoading) <div>Loading...</div>
  if (isError) <div>error...</div>

  const mutationproduct = useMutation({
    mutationFn: async (product: any) => {
      try {
        console.log('first', product)
        const response = await updateProduct(product)
        console.log("respone", response);

      } catch (error) {

      }
    },
    onSuccess() {
      toast.success("Sua Thành Công =))))")
      // setTimeout(() => navigate('/admin/product'),2000)
    
    },
    onError() {
      throw new Error("error")
    }
  })

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setvalue({
      ...value,
      [name]: value,
    })
  }


  const onSubmit = (e:any) => {
    console.log('aaaa',axios.request)
    e.preventDefault()
    mutationproduct.mutate({...value, id: id})


  }

  return (
    <>
    <form  onSubmit={onSubmit} className="max-w-xl mx-auto">
        <h1>cập nhật sản phẩm</h1>
        <div className="mb-3">
          <input type="text" className="form-control" name="name" placeholder="Tên sản phẩm" onChange={onChange} defaultValue={data?.name}/>
        </div>
        <div className="mb-3">
          <input type="number" className="form-control" name="price" placeholder="Giá sản phẩm" onChange={onChange}  defaultValue={data?.price}/>
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" name="img" placeholder="Ảnh sản phẩm" onChange={onChange}  defaultValue={data?.img}/>
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" name="desc" placeholder="Mô tả sản phẩm" onChange={onChange}  defaultValue={data?.desc}/>
        </div>
        {/* <div className="mb-3">
          <input type="number" className="form-control" name="categories" placeholder="Loại sản phẩm" onChange={onChange}  defaultValue={data?.name}/>
        </div> */}
        <button type="submit" className="btn btn-primary">
          Cập nhật
        </button>
      </form>



    </>
  )
}

export default UpdateProduct