
import { Router } from "express";
import * as projectsController from "../controllers/projects";

const router = Router();

// Check section 1-2 in the README for more details on how to create these routes.
router.get("/project/:id", projectsController.getProjectById);
router.get("/projects/all", projectsController.getAllProjects);
router.post("/project", projectsController.createProject);
router.put("/project/:id", projectsController.updateProject);
router.delete("/project/:id", projectsController.deleteProject);


export default router;
