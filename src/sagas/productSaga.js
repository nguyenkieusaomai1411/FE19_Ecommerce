import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects'
import ProductService from "../service/ProductService";
import { fetchAllProduct} from "../actions/ActionCreaters";

export function* getAllProducts() {
  const productsBest = yield call(ProductService.getBestProducts);
  const productsNew = yield call(ProductService.getNewProducts);
  const productsHot = yield call(ProductService.getHotProducts);
  const productsAll = {"products_new":productsNew.data,"products_hot":productsHot.data,"products_best":productsBest.data}
  console.log(productsAll)
  yield put(fetchAllProduct(productsAll))
}


export default function* rootSaga() {
  yield all([fork(getAllProducts)])
}
