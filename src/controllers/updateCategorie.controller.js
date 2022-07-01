import updateCategorieService from "../services/updateCategorie.service";

const updateCategorieController = async (request, response) => {
  try {
    const categorieId = request.params.id
    const data = request.body

    const categorie = await updateCategorieService(categorieId, data)
    
    return response.json(categorie)
} catch (error) {
    return response.status(400).json({
        message: error.message
    })
}
};

export default updateCategorieController;
