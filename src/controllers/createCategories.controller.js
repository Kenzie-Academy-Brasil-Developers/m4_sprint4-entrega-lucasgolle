import createCategoriesService from "../services/createCategories.service";

const createCategoriesController = async (request, response) => {
  const { name } = request.body;

  try {
    const categorie = await createCategoriesService(name);

    return response.status(201).json(categorie);
  } catch (error) {
    return response.status(400).json(error.message);
  }
};

export default createCategoriesController;
