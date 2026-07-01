import { Request, Response } from 'express';
import { GetAllCategoryServices } from '../../services/category/list-category';

class GetAllCategoryController {
  async handle(req: Request, res: Response) {
    const listCategory = new GetAllCategoryServices();
    const category = await listCategory.execute();

    res.status(200).json(category);
  }
}

export { GetAllCategoryController };
