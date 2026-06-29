import { Request, Response, Router } from "express";
import { CreateUserController } from "./controller/user/create-user";
import { validateSchema } from "./middlewares/validateSchema";
import { authUserSchema, createUserSchema } from "./schemas/userSchema";
import { AuthUserController } from "./controller/user/auth-user";

const router = Router();

router.post(
  "/user",
  validateSchema(createUserSchema),
  new CreateUserController().handle,
);

router.post(
  "/session",
  validateSchema(authUserSchema),
  new AuthUserController().handle,
);

export { router };
