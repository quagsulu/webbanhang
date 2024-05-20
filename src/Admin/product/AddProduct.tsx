// import axios from 'axios';
import  { ChangeEventHandler, useContext, useState } from 'react'
import { useMutation } from 'react-query';
import { CreateProduct } from '../../api/Product';
import { useFormik } from 'formik';
import Joi from 'joi';
import Select from 'react-select'
import { ProductShopContext } from '../../Context/Context';
import { toast } from 'react-toastify';
const AddProduct = () => {
  const {category : datacate} = useContext(ProductShopContext)
  const [file, setFiles] = useState<File[]>([])

  const { mutate } = useMutation({
    mutationFn: async (product: any) =>{
    return CreateProduct(product)
      },
    onSuccess() {
      // console.log(respone.data);
      toast.success('successfully created')
      alert("Thêm sản phẩm thành công")
    },
    onError() {
      toast.error('error creating product')

      alert("errosr")
    }
  })

  
  const {
    values,
    handleBlur,
    resetForm,
    handleChange,
    handleSubmit,
    touched,
    errors
  } = useFormik<any>({
    initialValues :{
      name: '',
      price: 0,
      image: '',
      desc: '',
      categoryId: [],
    },
    // validationSchema: Joi.object({
    //   name: Joi.string().max(50).required(),
    //   price: Joi.number().min(0).required(),
    //   img: Joi.required(),
    //   desc: Joi.string().min(1).required(),
    //   // categoryId: Joi.string().min(1).required(),
    //   categoryId: Joi.array().items(Joi.string().min(1)).required(),
    // }),
    validate:(values) => {
      const errors: Partial<any> = {}
      if (!values.name) {
        errors.name = 'Tên bắt buộc'
      }
      if (!values.price) {
        errors.price = 'giá bắt buộc'
      }
      if (!values.categoryId) {
        errors.categoryId = 'danh mục bắt buộc'
      }
      if (!values.desc) {
        errors.desc = 'mô tả bắt buộc'
      }
    },

    onSubmit: async (values: any) => {
      try {
        const data = new FormData();
        data.set('categoryId', values?.name);
        data.set('price', values?.price);
        data.set('desc', values?.desc);
        data.set('image', file[0]);
        data.set('categoryId', JSON.stringify(values?.categoryId));
        console.log(data)
        console.log(values)
        // await mutate(data);
        resetForm();
        
      } catch (error) {
        throw new Error(error as string)
        
      }
    },
  });

  const handleChangeFile: ChangeEventHandler<HTMLInputElement> = (e): void => {
    const target = e.target as HTMLInputElement
    const filesTarget = target.files
    if (filesTarget) {
      const filesArray = Array.from(filesTarget)
      setFiles(filesArray)
    }
  }
  // select style
  const colourOptions = datacate?.map((cate: any) => ({
    value: cate._id,
    label: cate.name
  }))
  const handleSelectChange = (selectedOptions: any) => {
    const selectedValues = selectedOptions.map((option: any) => option.value)
    handleChange({
      target: { name: 'categoryId', value: selectedValues }
    })
  }

  const selectedOptions = colourOptions?.filter((option: any) =>
    values.categoryId?.includes(option.value)
  )
  // select style
  const dropdownStyles = {
    control: (provided: any) => ({
      ...provided,
      borderRadius: '8px',
      borderColor: '#e2e8f0',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#cbd5e0'
      },
      '&:focus': {
        borderColor: '#63b3ed',
        boxShadow: '0 0 0 2px rgba(99, 179, 237, 0.2)'
      }
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#edf2f7' : 'white',
      color: state.isSelected ? '#2d3748' : '#4a5568',
      '&:hover': {
        backgroundColor: state.isSelected ? '#edf2f7' : '#f7fafc',
        color: state.isSelected ? '#2d3748' : '#4a5568'
      }
    }),
    multiValue: (provided: any) => ({
      ...provided,
      backgroundColor: '#e2e8f0',
      borderRadius: '9999px'
    }),
    multiValueLabel: (provided: any) => ({
      ...provided,
      color: '#2d3748'
    }),
    multiValueRemove: (provided: any) => ({
      ...provided,
      color: '#718096',
      '&:hover': {
        color: '#4a5568'
      }
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Thêm sản phẩm</h1>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Tên sản phẩm"
            onChange={handleChange}
            onBlur={handleBlur}
          // value={values.name}
          />
          {touched.name && errors.name ? (
            <div>{errors.name as any}</div>
          ) : null}
        </div>
        <div>
          <input
            type="number"
            name="price"
            placeholder="Giá sản phẩm"
            onChange={handleChange}
            onBlur={handleBlur}
          // value={values.price}
          />
          {touched.price && errors.price ? (
            <div>{errors.price as any}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label className="block mb-2 font-medium text-primary dark:text-yellow-400">
            Danh mục:
          </label>
          <Select
            name="categoryId"
            closeMenuOnSelect={false}
            // defaultValue={colourOptions?.filter((option : any)  =>
            //   initialValues?.categoryId?.includes(option.value)
            // )}
            isMulti
            options={colourOptions}
            value={selectedOptions}
            onChange={handleSelectChange}
            onBlur={handleBlur}
            styles={dropdownStyles}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-border-primary"
          />
          {touched.categoryId && errors.categoryId ? (
            <div>{errors.categoryId as any}</div>
          ) : null}
        </div>
        <div>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChangeFile}
          />
          {touched.img && errors.img ? (
            <div>{errors.img as any}</div>
          ) : null}
        </div>
        <div>
          <input
            type="text"
            name="desc"
            placeholder="Mô tả sản phẩm"
            onChange={handleChange}
            onBlur={handleBlur}
            // value={values.desc}
          />
          {touched.desc && errors.desc ? (
            <div>{errors.desc as any}</div>
          ) : null}
        </div>
        <button type="submit">Thêm</button>
      </form>
    </>
  )
}

export default AddProduct