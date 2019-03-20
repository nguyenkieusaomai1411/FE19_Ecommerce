import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class HeaderButton extends Component{
  render() {
    return (
      <div className="header__right">
        <button><a><i className="fa fa-shopping-cart"></i></a>
          <div className="cart">
            <div className="list__item"></div>
            <p className="cart__sum-price">Tổng số<span
              className="cart__sum-price__value">0<sup>đ</sup></span></p><a
            className="cart__button" href="shopping-cart.html">GIỎ HÀNG</a></div>
        </button>
        <button><Link to='/admin_signin'><i className="fa fa-user" style={color}></i></Link></button>
        <button><a><i className="fa fa-bars"></i></a></button>
      </div>
    );
  }

}
//-------------
const color={
  color: 'black'
}