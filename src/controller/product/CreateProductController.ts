import {Request, Response} from 'express';
import {CreateProductService} from '../../services/product/CreateProductService';

class CreateProductController {
  async handle(req: Request, res: Response) {
    const {name, price, category_id, description} = req.body;

    if (!req.file) {
      throw new Error('A imagem é obrigatoria');
    }

    console.log(req.file);
    const createProduct = new CreateProductService();

    const product = await createProduct.execute({
      name,
      category_id,
      description,
      price: parseInt(price),
      imageBuffer: req.file.buffer,
      imageName: req.file.originalname,
    });

    res.json(product);
  }
}

export {CreateProductController};
