import axios from 'axios';
import React, { useState } from 'react'
import { useMutation } from 'react-query';
import { CreateProduct } from '../api/Product';
import { toast } from 'react-toastify';

const AddProduct = () => {

  const [data, setdata] = useState({})

  const mutationproduct = useMutation({
    mutationFn: (product: any) => CreateProduct(product),
    onSuccess(respone) {
      console.log(respone.data);
      alert("Thêm sản phẩm thành công")
    },
    onError() {
      alert("error")
    }
  })

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setdata({
      ...data,
      [name]: value
    })
  }


  const onSubmit = (e: any) => {
    e.preventDefault()
    const respone = mutationproduct.mutate(data)
    //    console.log(res);

  }

  return (
    <>

      <form onSubmit={onSubmit} className="max-w-xl mx-auto" >
        <h1>Thêm sản phẩm</h1>
        <div className="mb-3">
          <input type="text" className="form-control" name="name" placeholder="Tên sản phẩm" onChange={onChange} />
        </div>
        <div className="mb-3">
          <input type="number" className="form-control" name="price" placeholder="Giá sản phẩm" onChange={onChange} />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" name="img" placeholder="Ảnh sản phẩm" onChange={onChange} />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" name="desc" placeholder="Mô tả sản phẩm" onChange={onChange} />
        </div>
        {/* <div className="mb-3">
          <input type="number" className="form-control" name="categories" placeholder="Loại sản phẩm" onChange={onChange} />
        </div> */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

    </>
  )
}

export default AddProduct