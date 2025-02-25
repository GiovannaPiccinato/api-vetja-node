import { Router } from "express";
import { AnimalController } from "../Controllers/AnimalController";
import { AuthMiddleware } from "../Middleware/AuthMiddleware.js";

const router = Router();

router.get("/animais", AuthMiddleware, AnimalController.getAllAnimais);
router.get("/animal/:id", AuthMiddleware, AnimalController.getAnimalById);
router.post("/animal", AuthMiddleware, AnimalController.createAnimal);
router.put("/animal/:id", AuthMiddleware, AnimalController.updateAnimal);
router.delete("/animal/:id", AuthMiddleware, AnimalController.deleteAnimal);

export default router;
