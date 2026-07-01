import prismaClient from '../../prisma';

class GetAllCategoryServices {
  async execute() {
    try {
      const category = await prismaClient.category.findMany({
        select: {
          id: true,
          name: true,
          createdAt: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
      });

      return category;
    } catch (err) {
      throw new Error('Falha ao buscar categorias');
    }
  }
}

export { GetAllCategoryServices };
