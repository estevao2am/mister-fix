import { Request, Response } from "express";
import { createUserServices } from "../../services/user/create-user";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;

    console.log({ name, email, password });

    const CreateUserServices = new createUserServices();
    const user = await CreateUserServices.execute({ email, name, password });

    res.json(user);
  }
}

export { CreateUserController };
