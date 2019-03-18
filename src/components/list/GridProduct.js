import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class GridProduct extends Component{
  render() {
    const {id,img,name,price,content} = this.props;
    return (
      <div className="product"><img src={img}/>
        <div className="product__detail">
          <div className="product__detail__type">{name}</div>
          <div className="product__detail__buy"><i className="fa fa-heart"></i><i className="fa fa-heart"></i><i
            className="fa fa-heart"></i><i className="fa fa-heart"></i><span>( 4 lượt mua)</span></div>
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
