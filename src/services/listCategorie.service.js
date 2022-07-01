import database from "../database";

const listCategorieService = async (categorieId) => {
  try {
    const response = await database.query(
      `SELECT
            *
        FROM
            categories
        WHERE
            id = $1;`,
      [categorieId]
    );

    if (!response.rowCount) {
      throw new Error("User not found");
    }

    return response.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default listCategorieService;
