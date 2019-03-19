
import ProductService from "../service/ProductService";
import {ADD_TO_CART, PRODUCT_FETCH_SUCCESS} from "./ActionTypes";

export const fetchAllProduct = (products)  =>{
  return ({
    type: PRODUCT_FETCH_SUCCESS,
    products
  })
}


export const addToCart = (id)  =>{
  return ({
    type: ADD_TO_CART,
    id
  })
}

