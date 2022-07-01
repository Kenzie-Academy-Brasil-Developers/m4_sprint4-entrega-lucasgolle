import deleteProductService from "../../services/products/deleteProduct.service";

const deleteProductController = async (request, response) => {
  try {
    const productId = request.params.id;

    await deleteProductService(productId);

    return response.status(204).send();
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    });
  }
};

export default deleteProductController;