import listCategorieService from "../services/listCategorie.service";

const listCategorieController = async (request, response) => {
  try {
    const categorieId = request.params.id;

    const categorie = await listCategorieService(categorieId);

    return response.json(categorie);
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    });
  }
};

export default listCategorieController;
