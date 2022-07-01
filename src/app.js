import express from "express";
import "dotenv/config";
import { startDatabase } from "./database";
import router from "./routes/categories.routes"
import productRouter from "./routes/product.routes";

const app = express();

app.use(express.json());

app.use("/categories", router);
app.use("/products", productRouter);

export default app.listen(process.env.PORT||3000, () => {
  startDatabase();
});
