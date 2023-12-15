import React from 'react'

const Footer = () => {

    

  return (
    <>
  <div id="footer">
        <div className="box">
          <div className="logo">
            {/* <img src="https://i.imgur.com/5bpFLM0.png" alt="abc"> */}
            <img src="https://i.imgur.com/5bpFLM0.png" alt="Action" />
          </div>
          <p>Cung cấp sản phẩm với chất lượng an toàn cho quý khách</p>
        </div>
        <div className="box">
          <h3>NỘI DUNG</h3>
          <ul className="quick-menu">
            <div className="item">
              <a href="">Trang chủ</a>
            </div>
            <div className="item">
              <a href="">Sản phẩm</a>
            </div>
            <div className="item">
              <a href="">Blog</a>
            </div>
            <div className="item">
              <a href="">Liên hệ</a>
            </div>
          </ul>
        </div>
        <div className="box">
          <h3>LIÊN HỆ</h3>
          <form action="">
            {/* <input className="submit" type="text" placeholder="Địa chỉ email"> */}
            <input className="submit" type="text" placeholder="Địa chỉ email" />
            <button>Nhận tin</button>
            {/* <button>Nhận tin</button> */}
          </form>
        </div>
      </div>
    </>
  )
}

export default Footer