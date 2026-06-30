import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface PayLoad {
  sub: string;
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authToken = req.headers.authorization;
  if (!authToken) {
    return res.json({ error: 'Token não fornecido' });
  }

  const [, token] = authToken.split(' ');
  console.log('TOKEN', token);

  try {
    const { sub } = verify(token!, process.env.JWT_SECRET as string) as PayLoad;
    req.user_id = sub;
    console.log(sub);
  } catch (error) {
    res.status(4001).json({ error: 'Token Invalido' });
  }

  return next();
}
