import { hash } from "bcryptjs";
import prismaClient from "../prisma";

interface CreateUserProps {
  name: string;
  email: string;
  password: string;
}
class createUserServices {
  async execute({ email, password, name }: CreateUserProps) {
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
      },

      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });
    return user;
  }
}

export { createUserServices };
