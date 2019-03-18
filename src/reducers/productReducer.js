import {PRODUCT_FETCH_SUCCESS} from "../actions/ActionTypes";
import {combineReducers} from 'redux'
import ProductService from "../service/ProductService";
import React from "react";

let initSate = {
  products_new: [],
  products_hot: [],
  products_best: []
}

export const productReducer = (state=initSate, action) =>{
  switch (action.type) {
    case PRODUCT_FETCH_SUCCESS :
      return Object.assign({},state,action.products)
    default: // need this for default case
      return state
  }
}
