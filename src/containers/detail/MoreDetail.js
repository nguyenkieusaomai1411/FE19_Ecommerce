import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ProductBest from "./ProductBest";
import {connect} from "react-redux";
import {MoreDetailItem} from "../../components/detail/MoreDetailItem";
import parse from 'html-react-parser';
class MoreDetail extends Component {
  render() {
    const {id, products} = this.props;
    let product = products[id-1];
    console.log(product)
    return (
      <div className="more-detail">
        <div className="description-product">
          <div className="description-head"><p className="description-head--seleted">Đặc điểm nổi bật</p>
            <p>Thông tin sản phẩm</p>
            <p>Đánh giá</p></div>
          <div className="description-body">
            {product && parse(product.more)}
          </div>
        </div>
        <ProductBest/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products_hot,
  }
}
export default connect(mapStateToProps, null)(MoreDetail)
