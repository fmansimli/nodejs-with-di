import type { UsersController } from "../_modules/users/users.controller";
import { Router } from "express";
import { TYPES } from "../di/constants";
import { DI } from "../di/di";

const router = Router();

const controller = DI.get<UsersController>(TYPES.UsersController);

router.get("/", controller.getAllUsers.bind(controller));
router.get("/:id", controller.getUserById.bind(controller));

router.post("/", controller.createUser.bind(controller));

export default router;
