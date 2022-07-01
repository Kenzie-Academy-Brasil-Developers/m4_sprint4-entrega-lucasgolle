import database from "../../database";

const listProductsAndCategoriesService = async (category_id) => {
  try {
    const res = await database.query(`SELECT *,p.name as name FROM products p JOIN categories c ON c.id = p.category_id WHERE c.id = ${category_id}`);
    return res.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default listProductsAndCategoriesService;