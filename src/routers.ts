import { Request, Response, Router } from 'express';
import { CreateUserController } from './controller/user/create-user';
import { validateSchema } from './middlewares/validateSchema';
import { authUserSchema, createUserSchema } from './schemas/userSchema';
import { AuthUserController } from './controller/user/auth-user';
import { UserDetailController } from './controller/user/user-details';
import { isAuthenticated } from './middlewares/isAuthenticated';

const router = Router();

router.post(
  '/user',
  validateSchema(createUserSchema),
  new CreateUserController().handle,
);

router.post(
  '/session',
  validateSchema(authUserSchema),
  new AuthUserController().handle,
);

router.post('/me', isAuthenticated, new UserDetailController().handle);

export { router };
