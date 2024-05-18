import React, { useContext } from 'react'
import { ProductShopContext } from '../Context/Context'


const ProductPage = () => {
    const { products: data } = useContext(ProductShopContext)

    return (
        <>
            <div className="product-page">
                <h2>SẢN PHẨM CỦA CHÚNG TÔI</h2>
                <div className="search-box">
                    <h2>Tìm kiếm theo tên </h2>
                    <form>
                        <input type="text" placeholder="Search......" name="searchText" />
                        <button type="submit">Tìm kiếm</button>
                    </form>
                </div>
                <div className="product-box">

                    <div id="wp-products ">
                        <ul id="list-products">
                            <div >

                                {/* <div className="item">
                        <img />
                        <div className="stars">
                            <span>
                                <img src="https://i.imgur.com/jL2JTRw.png" alt=""/>
                            </span>
                            <span>
                                <img src="https://i.imgur.com/jL2JTRw.png" alt=""/>
                            </span>
                            <span>
                                <img src="https://i.imgur.com/jL2JTRw.png" alt=""/>
                            </span>
                            <span>
                                <img src="https://i.imgur.com/jL2JTRw.png" alt=""/>
                            </span>
                            <span>
                                <img src="https://i.imgur.com/jL2JTRw.png" alt=""/>
                            </span>
                        </div>

                        <div className="name" >  </div>
                        <div className="desc"></div>
                        <div className="price"> VNĐ</div>
                    </div> */}
                                {data?.map((p: any, index: number) => (

                                    <div className="item" key={index}>
                                        <img src={p.img} alt="" />

                                        <div className="stars">
                                            <span>
                                                <img src="https://i.imgur.com/jL2JTRw.png" alt="Action" />
                                            </span>
                                            <span>
                                                <img src="https://i.imgur.com/jL2JTRw.png" alt="Action" />
                                            </span>
                                            <span>
                                                <img src="https://i.imgur.com/jL2JTRw.png" alt="Action" />
                                            </span>
                                            <span>
                                                <img src="https://i.imgur.com/jL2JTRw.png" alt="Action" />
                                            </span>
                                            <span>
                                                <img src="https://i.imgur.com/jL2JTRw.png" alt="Action" />
                                            </span>

                                        </div>

                                        <div className="name" > {p.name} </div>
                                        <div className="desc">{p.desc}</div>
                                        <div className="price">{p.price} VNĐ</div>
                                    </div>

                                ))}

                            </div>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductPage