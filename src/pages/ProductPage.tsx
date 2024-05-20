import  { useContext } from 'react'
import { ProductShopContext } from '../Context/Context'
import './css/productpage.css'

const ProductPage = () => {
    const { products: data } = useContext(ProductShopContext)

    return (
        <div className="product-page">
            <div className="search-box">
                <h2 className="search-title">Tìm kiếm theo tên</h2>
                <form className="search-form">
                    <input
                        type="text"
                        placeholder="Search......"
                        name="searchText"
                        className="search-input"
                    />
                    <button type="submit" className="search-button">Tìm kiếm</button>
                </form>
            </div>

            <div className="product-box">
                <div id="wp-products">
                    <ul id="list-products">
                        {data?.map((p : any, index : any) => (
                            <li className="item" key={index}>
                                <img src={p.image} alt={p.name} className="product-image" />
                                <div className="stars">
                                    <span>
                                        <img src="https://i.imgur.com/jL2JTRw.png" alt="Star" />
                                    </span>
                                    <span>
                                        <img src="https://i.imgur.com/jL2JTRw.png" alt="Star" />
                                    </span>
                                    <span>
                                        <img src="https://i.imgur.com/jL2JTRw.png" alt="Star" />
                                    </span>
                                    <span>
                                        <img src="https://i.imgur.com/jL2JTRw.png" alt="Star" />
                                    </span>
                                    <span>
                                        <img src="https://i.imgur.com/jL2JTRw.png" alt="Star" />
                                    </span>
                                </div>
                                <div className="name">{p.name}</div>
                                {/* <div className="desc">{p.desc}</div> */}
                                <div className="price">{p.price} VNĐ</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProductPage