import prismaClient from '../../prisma';

class UserDetailServices {
  async execute(user_id: string) {
    try {
      const user = await prismaClient.user.findFirst({
        where: {
          id: user_id,
        },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          createdAt: true,
        },
      });

      if (!user) {
        throw new Error('Usuario não encontrado');
      }
      return user;
    } catch (error) {
      throw new Error('Usuario não encontrado');
    }
  }
}

export { UserDetailServices };
