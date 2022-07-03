import { Router } from "express";
import createProductController from "../controllers/products/createProduct.controller";
import deleteProductController from "../controllers/products/deleteProduct.controller";
import listProductController from "../controllers/products/listProduct.controller";
import listProductsController from "../controllers/products/listProducts.controller";
import listProductsAndCategoriesController from "../controllers/products/listProductsAndCategories.controller";
import updateProductController from "../controllers/products/updateProduct.controller";

const productRouter = Router();

productRouter.post("", createProductController);

productRouter.get("", listProductsController);

productRouter.get("/:id", listProductController);

productRouter.patch("/:id", updateProductController);

productRouter.delete("/:id", deleteProductController);

productRouter.get("/category/:category_id", listProductsAndCategoriesController);

export default productRouter;
