import createCategoriesService from "../services/createCategories.service";

const createCategoriesController = async (request, response) => {
  const { name } = request.body;

  try {
    const category = await createCategoriesService(name);

    return response.status(201).json({
      category,
      message: "Category created"
    });
  } catch (error) {
    return response.status(400).json({
      message: "Error create category"
    });
  }
};

export default createCategoriesController;
