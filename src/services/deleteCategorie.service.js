import database from "../database";

const deleteCategorieService = async (categorieId) => {
  try {
    const res = await database.query(
      `DELETE FROM
            categories
        WHERE
            id = $1
        RETURNING *;`,
      [categorieId]
    );

    if (!res.rowCount) {
      throw new Error("Categories not found");
    }
  } catch (error) {
    throw new Error(error);
  }
};

export default deleteCategorieService;
