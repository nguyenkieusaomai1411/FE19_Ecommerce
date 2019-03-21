import React, { Component } from 'react';
import MenuAdmin from "./MenuAdmin";
import {fetchProduct} from "../../actions/ActionCreaters"
import { connect } from 'react-redux';
import OpenClose from './OpenClose';

class ProductItem extends Component{
    componentDidMount(){
        fetch("https://5c87325bcc034a0014bd267a.mockapi.io/products")
        .then(res=>{
            return res.json();  
        })
        .then(res=>{
            this.props.a({"all_product":res});
        })
    }

    render(){
        console.log("product2",this.props.products);
        var {products} = this.props;
        return(
            <div className="container" style={custyle}>
            <div className="row col-md-6 col-md-offset-2 custyle" >
            <OpenClose/>
            <table className="table table-striped custab" style={custab}>
            <thead>
            <h3 href="#" className="btn btn-primary btn-xs pull-right"style={custyle}>ALL PRODUCTS</h3>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th className="text-center">Action</th>
            </tr>
            </thead>
            {products && products.map(item =>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price_new}d</td>
                        <td className="text-center"><button className='btn btn-info btn-xs'><i class="fas fa-edit"></i> Edit</button> <button className="btn btn-danger btn-xs"><i class="fas fa-trash-alt"></i> Del</button></td>
                    </tr>)}
                    </table>
            </div>
            </div>
            )
    }

    
}
//----------------------------
const custab={
    border: '1px solid #ccc',
    padding: '5px',
    margin: '5% 0',
    boxShadow: '3px 3px 2px #ccc',
    transition: '0.5s',
    textAlign:'center'
}
const custyle={
    textAlign:'center'
    
}
const mapStateToProps = (state) =>{
    return {
      products : state.products.all_product
    }
  } 
  const mapDispatchToProps = (dispatch) =>{
    return {
      a :(products)=> dispatch(fetchProduct(products))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(ProductItem)