import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/auth-user";

class AuthUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const authUser = new AuthUserService();

    const session = await authUser.execute({ email, password });
    res.json({ session });
  }
}

export { AuthUserController };
