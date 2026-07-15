import prismaClient from '../../prisma';

interface DeleteProductServiceProps {
  product_id: string;
}

class DeleteProductService {
  async execute({product_id}: DeleteProductServiceProps) {
    try {
      await prismaClient.product.update({
        where: {
          id: product_id,
        },
        data: {
          disabled: true,
        },
      });
      return {message: 'Produto deletado/Arquivado com sucesso!'};
    } catch (error) {
      console.log(error);
      throw new Error('Erro ao deletar/arquivar produto!');
    }
  }
}
export {DeleteProductService};
