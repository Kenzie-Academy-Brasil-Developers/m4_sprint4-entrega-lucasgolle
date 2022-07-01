import updateProductService from "../../services/products/updateProduct.service";

const updateProductController = async (request, response) => {
    try {
      const productId = request.params.id
      const data = request.body
  
      const product = await updateProductService(productId, data)
      
      return response.json({
        product,
        message: "Product updated"
    })
  } catch (error) {
      return response.status(400).json({
          message: error.message
      })
  }
  };
  
  export default updateProductController;