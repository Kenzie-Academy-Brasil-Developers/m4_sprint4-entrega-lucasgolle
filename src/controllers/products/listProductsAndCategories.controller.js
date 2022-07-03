import listProductsAndCategoriesService from "../../services/products/listProductsAndCategories.service";

const listProductsAndCategoriesController = async (req, response) => {
  try {
    const category_id = req.params.category_id;
    
    const products = await listProductsAndCategoriesService(category_id);

    console.log(products)

    return response.status(200).json(products);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default listProductsAndCategoriesController;