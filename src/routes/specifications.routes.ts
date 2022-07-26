import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/Specifications.Repository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecifationService";

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationRepository();

specificationsRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository
  );

  createSpecificationService.execute({ name, description });

  return res.status(201).send();
});

export { specificationsRoutes };
