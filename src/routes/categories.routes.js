import { Router } from "express";

import createCategoriesController from "../controllers/createCategories.controller";
import listCategoriesController from "../controllers/listCategories.controller";
import listCategorieController from "../controllers/listCategorie.controller";
import updateUserController from "../controllers/updateCategorie.controller";
import deleteCategorieController from "../controllers/deleteCategorie.controller";

const router = Router();

router.post("", createCategoriesController);

router.get("", listCategoriesController);

router.get("/:id", listCategorieController);

router.patch("/:id", updateUserController);

router.delete("/:id", deleteCategorieController);

export default router;
