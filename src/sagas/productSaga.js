import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects'
import ProductService from "../service/ProductService";
import { fetchAllProduct} from "../actions/ActionCreaters";

export function* getAllProducts() {
  const productsBest = yield call(ProductService.getBestProducts);
  const productsNew = yield call(ProductService.getNewProducts);
  const productsHot = yield call(ProductService.getHotProducts);
  console.log(productsBest);
  const productsAll = {"products_new":productsNew.data.records,"products_hot":productsHot.data.records,"products_best":productsBest.data.records}
  console.log(productsAll)
  yield put(fetchAllProduct(productsAll))
}


export default function* rootSaga() {
  yield all([fork(getAllProducts)])
}
