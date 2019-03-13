
import ProductService from "../service/ProductService";
import {PRODUCT_FETCH_SUCCESS} from "./ActionTypes";

export const fetchAllProduct = (products)  =>{
  return ({
    type: PRODUCT_FETCH_SUCCESS,
    products
  })
}

