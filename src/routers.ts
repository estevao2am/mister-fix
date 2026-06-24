import { Request, Response, Router } from "express";
import { CreateUserController } from "./controller/user/create-user";
import { validateSchema } from "./middlewares/validateSchema";
import { createUserSchema } from "./schemas/userSchema";

const router = Router();

router.post(
  "/user",
  validateSchema(createUserSchema),
  new CreateUserController().handle,
);

export { router };
