import { Client } from "pg";

const database = new Client(
  process.env.NODE_ENV === "test"
    ? {
        user: "lucasback",
        host: "localhost",
        database: "products_management",
        password: "1234",
        port: 5432,
      }
    : {
        user: "lucasback",
        host: "localhost",
        database: "products_management",
        password: "1234",
        port: 5432,
      }
);

export const startDatabase = async () => {
  await database.connect();
};

export default database;
