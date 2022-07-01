import database from "../../database";

const updateProductService = async (productId, data) => {
  try {
    const findProduct = await database.query(
      `SELECT
                *
            FROM
                products
            WHERE
                id = $1`,
      [productId]
    );

    if (!findProduct.rowCount) {
      throw new Error("Product not found");
    }

    let query = "UPDATE products SET ";
    const keys = Object.keys(data);
    const values = Object.values(data);

    keys.forEach((key, index) => {
      query += `${key} = \$${(index += 1)}, `;
    });
    query = query.slice(0, -2);

    query += ` WHERE id = \$${(keys.length += 1)} RETURNING *;`;

    const res = await database.query(query, [...values, productId]);

    if (!res.rowCount) {
      throw new Error("productId not found");
    }

    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default updateProductService;
