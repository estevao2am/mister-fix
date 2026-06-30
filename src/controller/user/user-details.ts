import { Response, Request } from 'express';
import { UserDetailServices } from '../../services/user/user-details';

class UserDetailController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id;
    // const { user_id } = req.body;

    const userDetails = new UserDetailServices();
    const user = await userDetails.execute(user_id);

    res.json(user);
  }
}

export { UserDetailController };
