import { Router } from "express";
import "express-async-errors";

import usersRouter from "./users";
import postsRouter from "./posts";

const router = Router();

router.use("/users", usersRouter);
router.use("/posts", postsRouter);

export default router;
