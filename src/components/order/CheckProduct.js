import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Table from '../../containers/cart/Table'

export default class CheckProduct extends Component{
  render() {
    return (
        <div>
        <div className="link-intro">
          <Link to="/">Home ></Link>
          <Link to="/cart">Giỏ hàng ></Link>
          <Link className="cl-green" to="/cart">Kiểm tra giỏ hàng ></Link>
        </div>
        <div className="container" style={style.container}>
        <div className="step-payment">
          <div className="step-payment__item bg-yellow" style={style.step_color}>
            <div className="step-payment__item__step">Bước 1:</div>
            <div className="step-payment__item__content">Kiểm tra giỏ hàng</div>
          </div>
          <div className="step-payment__item bg-yellow" >
            <div className="step-payment__item__step">Bước 2:</div>
            <div className="step-payment__item__content">Thông tin thanh toán</div>
          </div>
          <div className="step-payment__item bg-yellow">
            <div className="step-payment__item__step" >Bước 3:</div>
            <div className="step-payment__item__content">Thông báo kết quả</div>
          </div>
        </div>
      </div>
      <div>
          <div className="shopping-cart">
          List sp
            <div className="shopping-cart__button">
              <Link to="/list" style={style.buttonContine}>Tiếp tục mua hàng</Link>
              <Link to="/cart" style={style.buttonContine}>Quay lại giỏ hàng</Link>
              <Link to="/contactform" style={style.buttonOrder}>Điền thông tin</Link>
            </div>
      </div>
          </div>
        </div>
    );
  }
}
//-----
const style ={
    container:{
      paddingTop:"40px"
    },
    step_color:{
      background:'blue'
    },
    buttonContine:{
        backgroundColor:"black",
        marginRight:"10px",
        padding:"10px",
        color:"white"
      },
      buttonOrder:{
        backgroundColor:"green",
        marginRight:"10px",
        padding:"10px",
        color:"white"
      },
      buttonDelete:{
        backgroundColor:"green",
        marginRight:"10px",
        padding:"12px",
        color:"white"
      }
  }