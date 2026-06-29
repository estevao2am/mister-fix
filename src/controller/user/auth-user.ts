import { Request, Response } from "express";

class AuthUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;
    console.log({ email, password });
    res.json({ ok: true });
  }
}

export { AuthUserController };
