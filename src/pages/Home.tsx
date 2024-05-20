import  { useContext } from "react";
// import { useEffect, useState } from 'react'
import { ProductShopContext } from "../Context/Context";
import { Link } from "react-router-dom";

const Home = () => {
    const {products: data} = useContext(ProductShopContext)
    console.log('data :',data)

  return (
    <>
            <div id="banner">
                <div className="box-left">
                    <h2>
                        <span>THỨC ĂN</span>
                        <br />
                        <span>THƯỢNG HẠNG</span>
                    </h2>
                    <p>Chuyên cung cấp các món ăn đảm bảo dinh dưỡng
                        hợp vệ sinh đến người dùng,phục vụ người dùng 1 cái
                        hoàn hảo nhất</p>
                    <button>Mua ngay</button>
                </div>
                <div className="box-right">
                    <img src="https://i.imgur.com/Z1y5gnL.png" alt="Action" />
                    <img src="https://i.imgur.com/oTw1gHm.png" alt="Action" />
                    <img src="https://i.imgur.com/oK91dJu.png" alt="Action" />
                    <img src="" alt="" />

                </div>
                <div className="to-bottom">
                    <a href="">
                        <img src="https://i.imgur.com/L0K8xjE.png" alt="Action" />

                    </a>
                </div>
            </div>

            <div id="wp-products" >
                <h2>SẢN PHẨM CỦA CHÚNG TÔI</h2>
                <div id="list-products" >
                {data?.map((p:any, index :number) =>(

                                <div className="item" key={index}>
                                    <Link to={`/product/detail/${p._id}`}>

                                    <img className="imgprd" src={p.image} alt="" />

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
                                    {/* <div className="desc">{p.desc}</div> */}
                                    <div className="price">{p.price} VNĐ</div>
                                    </Link>
                                </div>

))}
                </div>
                <div className="list-page">
                    <div className="item">
                        <a href="">1</a>
                    </div>
                    <div className="item">
                        <a href="">2</a>
                    </div>
                    <div className="item">
                        <a href="">3</a>
                    </div>
                    <div className="item">
                        <a href="">4</a>
                    </div>
                </div>
            </div >

            <div id="saleoff">
                <div className="box-left">
                    <h1>
                        <span>GIẢM GIÁ LÊN ĐẾN</span>
                        <span>45%</span>
                    </h1>
                </div>
                <div className="box-right"></div>
            </div>

            <div id="comment">
                <h2>NHẬN XÉT CỦA KHÁCH HÀNG</h2>
                <div id="comment-body">
                    <div className="prev">
                        <a href="#">
                            <img src="https://i.imgur.com/YWYLseA.png" alt="" />
                        </a>
                    </div>
                    <ul id="list-comment">
                        <li className="item">
                            <div className="avatar">
                                <img src="https://i.imgur.com/1mFG8Ov.png" alt="" />

                            </div>
                            <div className="stars">
                                <span>
                                    <img src="https://i.imgur.com/jL2JTRw.png" alt="" />
                                </span>
                                <span>
                                    <img src="https://i.imgur.com/jL2JTRw.png" alt="" />
                                </span>
                                <span>
                                    <img src="https://i.imgur.com/jL2JTRw.png" alt="" />
                                </span>
                                <span>
                                    <img src="https://i.imgur.com/jL2JTRw.png" alt="" />
                                </span>
                                <span>
                                    <img src="https://i.imgur.com/jL2JTRw.png" alt="" />
                                </span>
                            </div>
                            <div className="name">Nguyễn Van quang</div>

                            <div className="text">
                                <p>Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type
                                    specimen book.</p>
                            </div>
                        </li>
                        <li className="item">
                            <div className="avatar">
                                <img src="https://i.imgur.com/1mFG8Ov.png" alt="" />

                            </div>
                            <div className="stars">
                                <span>
                                    <img src="https://i.imgur.com/jL2JTRw.png" alt="" />
                                </span>
                                <span>
                                    <img src="https://i.imgur.com/jL2JTRw.png" alt="" />
                                </span>
                                <span>
                                    <img src="https://i.imgur.com/jL2JTRw.png" alt="" />
                                </span>
                                <span>
                                    <img src="https://i.imgur.com/jL2JTRw.png" alt="" />
                                </span>
                                <span>
                                    <img src="https://i.imgur.com/jL2JTRw.png" alt="" />
                                </span>
                            </div>
                            <div className="name">Trần Ngọc Sơn</div>

                            <div className="text">
                                <p>Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type
                                    specimen book.</p>
                            </div>
                        </li>
                        <li className="item">
                            <div className="avatar">
                                <img src="https://i.imgur.com/1mFG8Ov.png" alt="" />

                            </div>
                            <div className="stars">
                                <span>
                                    <img src="https://i.imgur.com/jL2JTRw.png" alt="" />
                                </span>
                                <span>
                                    <img src="https://i.imgur.com/jL2JTRw.png" alt="" />
                                </span>
                                <span>
                                    <img src="https://i.imgur.com/jL2JTRw.png" alt="" />
                                </span>
                                <span>
                                    <img src="https://i.imgur.com/jL2JTRw.png" alt="" />
                                </span>
                                <span>
                                    <img src="https://i.imgur.com/jL2JTRw.png" alt="" />
                                </span>
                            </div>
                            <div className="name">Nguyễn Trần Vi</div>

                            <div className="text">
                                <p>Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type
                                    specimen book.</p>
                            </div>
                        </li>
                    </ul>
                    <div className="next">
                        <a href="#">
                            <img src="https://i.imgur.com/JaUXv8x.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>


    </>
  );
};

export default Home;
