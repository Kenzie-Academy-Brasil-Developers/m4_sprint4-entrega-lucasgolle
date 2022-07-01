import listCategoriesService from "../services/listCategories.service";

const listCategoriesController = async (req, response) => {
  try {
    const categories = await listCategoriesService();

    return response.status(200).json(categories);
  } catch (err) {
    return response.status(400).json(err.message);
  }
};

export default listCategoriesController;
