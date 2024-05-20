import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-query';
import { getDetailProduct, updateProduct } from '../../api/Product';
import {  useParams } from 'react-router-dom';
// import { IProduct } from '../interface/User';
import { toast } from 'react-toastify'
import Joi from 'joi';
import { useFormik } from 'formik';
// import { Link, useNavigate } from 'react-router-dom'

const UpdateProduct = () => {
  const [fileValue, setFileValue] = useState<File | null>(null)
  console.log(fileValue)
  const { id } = useParams()
  // const [value, setvalue] = useState({})
  // console.log(setvalue)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['PRODUCT', id],
    queryFn: async () => {
      try {
        const respone = await getDetailProduct(id as string)
        console.log('data 2', respone.data);
        formik.setFieldValue('name', data?.name)
        formik.setFieldValue('name', data?.image)
        formik.setFieldValue('name', data?.price)
        formik.setFieldValue('name', data?.desc)
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
      // mutationproduct.mutate(value)
      // setTimeout(() => navigate('/admin/product'),2000)
    
    },
    onError() {
      throw new Error("error")
    }
  })
  interface FormValues {
    name: string;
    price: number;
    img: string;
    desc: string;
}


  const formik = useFormik<FormValues>({
    initialValues: {
        name: '',
        price: 0,
        img: '',
        desc: '',
    },
    validationSchema: Joi.object({
        name: Joi.string().max(50).required(),
        price: Joi.number().positive().required(),
        img: Joi.string().uri().required(),
        desc: Joi.string().max(200).required(),
    }),
    onSubmit: (values) => {
        console.log('Form data:', values);
      mutationproduct.mutate(values)

        // formik.resetForm();
    },
});

const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const files = e.target.files;
  if (files && files.length > 0) {
      setFileValue(files[0]);
      formik.setFieldValue('img', files[0]);
  }
};
  return (
    <>
           <form onSubmit={formik.handleSubmit}>
            <h1>Thêm sản phẩm</h1>
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Tên sản phẩm"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                    <div>{formik.errors.name as any}</div>
                ) : null}
            </div>
            <div>
                <input
                    type="text"
                    name="price"
                    placeholder="Giá sản phẩm"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.price}
                />

                {formik.touched.price && formik.errors.price ? (
                    <div>{formik.errors.price as any}</div>
                ) : null}
            </div>
            <div>
                <input
                    type="file"
                    name="img"
                    accept="image/*"
                    onChange={handleFileChange}
                />
                {formik.touched.img && formik.errors.img ? (
                    <div>{formik.errors.img as any}</div>
                ) : null}
            </div>
            <div>
                <input
                    type="text"
                    name="desc"
                    placeholder="Mô tả sản phẩm"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.desc}
                />
                {formik.touched.desc && formik.errors.desc ? (
                    <div>{formik.errors.desc as any}</div>
                ) : null}
            </div>
            <button type="submit">Cập nhật</button>
        </form>


    </>
  )
}

export default UpdateProduct