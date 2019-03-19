import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class GridProduct extends Component{
  render() {
    const {id,img,name,price,content,numberBuy} = this.props;
    const link=`/detail/${id}`;
    return (
      <div className="product">
        <Link to={link}>
        <img src={img}/>
        </Link>
        <div className="product__detail">
          <div className="product__detail__type">{name}</div>
          <div className="product__detail__buy"><i className="fa fa-heart"></i><i className="fa fa-heart"></i><i
            className="fa fa-heart"></i><i className="fa fa-heart"></i><span>( {numberBuy} lượt mua)</span></div>
          <p className="product__detail__text">{content}</p>
          <p className="product__detail__price">{price}</p>
          <div className="product__detail__button">
            <button>MUA HÀNG</button>
            <button><i className="fa fa-heart"></i></button>
            <button><i className="fa fa-refresh"></i></button>
          </div>
        </div>
      </div>
    );
  }
}
