import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Intro from "./Intro";
import ContactForm from "./ContactForm";

export default class PageOrder extends Component{
  render() {
    return (
      <div className="container">
        <Intro/>
        <div className="container" style={style.container}>
        <div className="step-payment">
          <div className="step-payment__item bg-yellow">
            <div className="step-payment__item__step">Bước 1:</div>
            <div className="step-payment__item__content">Kiểm tra giỏ hàng</div>
          </div>
          <div className="step-payment__item bg-yellow" style={style.step_color}>
            <div className="step-payment__item__step">Bước 2:</div>
            <div className="step-payment__item__content">Thông tin thanh toán</div>
          </div>
          <div className="step-payment__item bg-yellow">
            <div className="step-payment__item__step" >Bước 3:</div>
            <div className="step-payment__item__content">Thông báo kết quả</div>
          </div>
        </div>
      </div>
        <ContactForm/>
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
  }
}