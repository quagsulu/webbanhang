import { useContext } from 'react'
import './css/ProductDetail.css'
import { ProductShopContext } from '../Context/Context';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getDetailProduct } from '../api/Product';
import { IProduct } from '../interface/Type';
// import { any } from 'joi';
const ProductDetail = () => {
  // const { ProductDetail } = useContext(ProductShopContext)
  const { id } = useParams()

  const { data: ProductDetail } = useQuery({
    queryKey: ['PRODUCTDETAIL', id],
    queryFn: async () => {
      try {
        const { data } = await getDetailProduct(id as any)
        console.log("data", data);
        return data as IProduct

      } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
      }
    }
  })
  const foodImageUrl = 'data:image/jpeg;base64,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';

  return (
    <>
      <div className="containers">
        <h2 className='title-detail'>Chi Tiết Dồ Ăn
          <br />
          <hr />
        </h2>

        {/* {ProductDetail?.map((p: any, index: any) => ( */}
        <div className="food-detail" key={ProductDetail?._id}>
          <div className="food-info">
            <h2 className="food-name">{ProductDetail?.name}</h2>
            <p className="description">{ProductDetail?.desc}</p>
            <p className="price">Giá : {ProductDetail?.price}</p>
            <button className="order-button">Order Now</button>
          </div>
          <div className="food-image-container">
            <img className="food-image" src={ProductDetail?.image} alt="Food Image" />
          </div>
        </div>
        <h3 className="related-foods-title">Related Foods <br /> <hr /></h3>
        <div className="related-foods  ">
          <div className="related-food borders bg-gray-600" >
            <Link to={`/product/detail/`}>
              <img className="related-food-image" src={foodImageUrl} alt="Related Food Image" />
              <h4 className="related-food-name">Caesar Salad</h4>
              <p className="related-food-price">$8.99</p>
            </Link>
          </div>
          <div className="related-food  borders bg-gray-600">
            <img className="related-food-image" src={foodImageUrl} alt="Related Food Image" />
            <h4 className="related-food-name">Pasta Alfredo</h4>
            <p className="related-food-price">$12.99</p>
          </div>
          <div className="related-food  borders bg-gray-600">
            <img className="related-food-image" src={foodImageUrl} alt="Related Food Image" />
            <h4 className="related-food-name">Margherita Pizza</h4>
            <p className="related-food-price">$14.99</p>
          </div>
        </div>

        <h3 className="related-foods-title">Comments <br /><hr /></h3>
        <div className="containercomments justify-content-center mt-5 border-left border-right">
          <div className="d-flex justify-content-center pt-3 pb-2"> <input type="text" name="text" placeholder="+ Add a note" 
className="form-control addtxt" /> 
          </div>

          <div className="d-flex justify-content-center py-2 w100">
            <div className="second py-2 px-2"> <span className="text1">Type your note, and hit enter to add it</span>
              <div className="d-flex justify-content-between py-1 pt-2">
                <div><img src="https://i.imgur.com/AgAC1Is.jpg" width="18" /><span className="text2">Martha</span></div>
                <div><span className="text3">Upvote?</span><span className="thumbup"><i className="fa fa-thumbs-o-up"></i></span><span className="text4">3</span></div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center py-2 w100">
            <div className="second py-2 px-2"> <span className="text1">Type your note, and hit enter to add it</span>
              <div className="d-flex justify-content-between py-1 pt-2">
                <div><img src="https://i.imgur.com/tPvlEdq.jpg" width="18" /><span className="text2">Curtis</span></div>
                <div><span className="text3">Upvote?</span><span className="thumbup"><i className="fa fa-thumbs-o-up"></i></span><span className="text4">3</span></div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center py-2 w100">
            <div className="second py-2 px-2"> <span className="text1">Type your note, and hit enter to add it</span>
              <div className="d-flex justify-content-between py-1 pt-2">
                <div><img src="https://i.imgur.com/gishFbz.png" width="18" height="18" /><span className="text2">Beth</span></div>
                <div><span className="text3 text3o">Upvoted</span><span className="thumbup"><i className="fa fa-thumbs-up thumbupo"></i></span><span className="text4 text4i">1</span></div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center py-2 pb-3 w100">
            <div className="second py-2 px-2"> <span className="text1">Type your note, and hit enter to add it</span>
              <div className="d-flex justify-content-between py-1 pt-2">
                <div><img src="https://i.imgur.com/tPvlEdq.jpg" width="18" /><span className="text2">Curtis</span></div>
                <div><span className="text3">Upvote?</span><span className="thumbup"><i className="fa fa-thumbs-o-up"></i></span><span className="text4 text4o">1</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail