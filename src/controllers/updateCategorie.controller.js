import updateCategorieService from "../services/updateCategorie.service";

const updateCategorieController = async (request, response) => {
  try {
    const categorieId = request.params.id
    const data = request.body

    const category = await updateCategorieService(categorieId, data)
    
    return response.json({
        category,
        message: "Update category"
    })
} catch (error) {
    return response.status(400).json({
        message: error.message
    })
}
};

export default updateCategorieController;
