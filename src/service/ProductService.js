import Request from "../common/Axios";

class ProductService {
  static createProduct(data) {
    return Request.post("products", data);
  }

  static getProduct(id) {
    return Request.get(`products/${id}`);
  }

  static getAllProducts()  {
    return Request.get("products");
  }

  static updateProduct(id, data) {
    return Request.put(`products/${id}`, data);
  }

  static deleteProduct(id) {
    return Request.delete(`products/${id}`);
  }

  static getUserProducts() {
    return Request.get("users/getProducts");
  }
}

export default ProductService;
