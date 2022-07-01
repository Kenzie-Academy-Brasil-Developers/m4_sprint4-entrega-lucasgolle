import database from "../../database";

const listProductService = async (product_id) => {
  try {
    const response = await database.query(
      `SELECT
            *
        FROM
            products
        WHERE
            id = $1;`,
      [product_id]
    );

    if (!response.rowCount) {
      throw new Error("Category not found");
    }

    return response.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default listProductService;