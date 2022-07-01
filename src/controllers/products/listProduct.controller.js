import listProductService from "../../services/products/listProduct.service";

const listProductController = async (request, response) => {
  try {
    const ProductId = request.params.id;

    const product = await listProductService(ProductId);

    return response.json(product);
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    });
  }
};

export default listProductController;