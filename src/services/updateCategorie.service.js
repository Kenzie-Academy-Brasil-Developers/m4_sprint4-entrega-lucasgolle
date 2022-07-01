import database from "../database";

const updateCategorieService = async (categorieId, data) => {
  try {
    const findCategorie = await database.query(
      `SELECT
                *
            FROM
                categories
            WHERE
                id = $1`,
      [categorieId]
    );

    if (!findCategorie.rowCount) {
      throw new Error("Categorie not found");
    }

    let query = "UPDATE categories SET ";
    const keys = Object.keys(data);
    const values = Object.values(data);

    keys.forEach((key, index) => {
      query += `${key} = \$${(index += 1)}, `;
    });
    query = query.slice(0, -2);

    query += ` WHERE id = \$${(keys.length += 1)} RETURNING *;`;

    const res = await database.query(query, [...values, categorieId]);

    if (!res.rowCount) {
      throw new Error("categorieId not found");
    }

    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default updateCategorieService;
