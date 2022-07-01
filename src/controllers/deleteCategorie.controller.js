import deleteCategorieService from "../services/deleteCategorie.service";

const deleteCategorieController = async (request, response) => {
  try {
    const categorieId = request.params.id;

    await deleteCategorieService(categorieId);

    return response.status(204).send();
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    });
  }
};

export default deleteCategorieController;
