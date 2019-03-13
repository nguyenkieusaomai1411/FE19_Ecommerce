import React, { Component } from 'react';

export  default  class HeaderMenu extends Component{
  render() {
    return (
      <ul className="header__primary">
        <li><a href="index.html">TRANG CHỦ</a></li>
        <li><a href="about-us.html">GIỚI THIỆU</a></li>
        <li className="header__primary__product"><a href="list.html">SẢN PHẨM</a>
          <div className="menu-product">
            <div className="menu-product__item"><h6 className="menu-product__item__title">DƯỠNG DA</h6>
              <div className="menu-product__item__list"><p>Áo khoác</p>
                <p>Bộ áo liền quần</p>
                <p>Dress</p>
                <p>Quần/Váy</p>
                <p>Quần sort</p>
                <p>Quần jean</p>
                <p>Đồ đan</p>
                <p>Áo nỉ</p>
                <p className="menu-product__item__list--active">Áo sơ mi</p></div>
            </div>
            <div className="menu-product__item"><h6 className="menu-product__item__title">DƯỠNG DA</h6>
              <div className="menu-product__item__list"><p>Áo khoác</p>
                <p>Bộ áo liền quần</p>
                <p>Dress</p>
                <p>Quần/Váy</p>
                <p>Quần sort</p>
                <p>Quần jean</p>
                <p>Đồ đan</p>
                <p>Áo nỉ</p>
                <p className="menu-product__item__list--active">Áo sơ mi</p></div>
            </div>
            <div className="menu-product__item"><h6 className="menu-product__item__title">DƯỠNG DA</h6>
              <div className="menu-product__item__list"><p>Áo khoác</p>
                <p>Bộ áo liền quần</p>
                <p>Dress</p>
                <p>Quần/Váy</p>
                <p>Quần sort</p>
                <p>Quần jean</p>
                <p>Đồ đan</p>
                <p>Áo nỉ</p>
                <p className="menu-product__item__list--active">Áo sơ mi</p></div>
            </div>
          </div>
        </li>
        <li><a href="blog.html">TIN TỨC</a></li>
        <li><a href="contact.html">BẢN ĐỒ</a></li>
        <li><a href="register.html">ĐĂNG KÝ</a></li>
      </ul>
    );
  }
}
