import listProductsService from "../../services/products/listProducts.service";

const listProductsController = async (req, response) => {
  try {
    const products = await listProductsService();

    return response.status(200).json(products);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default listProductsController;