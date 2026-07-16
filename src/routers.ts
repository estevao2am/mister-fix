import {Request, Response, Router} from 'express';
import {CreateUserController} from './controller/user/create-user';
import {validateSchema} from './middlewares/validateSchema';
import {authUserSchema, createUserSchema} from './schemas/userSchema';
import {AuthUserController} from './controller/user/auth-user';
import {UserDetailController} from './controller/user/user-details';
import {isAuthenticated} from './middlewares/isAuthenticated';
import {CreateCategoryController} from './controller/category/create-category';
import {isAdmin} from './middlewares/isAdmin';
import {createCategorySchema} from './schemas/categorySchema';
import {GetAllCategoryController} from './controller/category/get-categpries';
import {CreateProductController} from './controller/product/CreateProductController';
import multer from 'multer';
import uploadConfig from './config/multer';
import {
  createProductSchema,
  listProductByCategorySchema,
  listProductSchema,
} from './schemas/productSchema';
import {ListProductController} from './controller/product/ListProductController';
import {DeleteProductController} from './controller/product/DeleteProductController';
import {ListProductByCategoryController} from './controller/product/ListProductByCategoryController';
import {createOrderSchema} from './schemas/orderSchema';
import {CreateOrderController} from './controller/order/CreateOrderController';
import {ListOrdersController} from './controller/order/ListOrdersController';

const upload = multer(uploadConfig);
const router = Router();

router.post(
  '/user',
  validateSchema(createUserSchema),
  new CreateUserController().handle,
);

router.post(
  '/session',
  validateSchema(authUserSchema),
  new AuthUserController().handle,
);

router.get('/me', isAuthenticated, new UserDetailController().handle);

// Category routes

router.post(
  '/category',
  isAuthenticated,
  isAdmin,
  validateSchema(createCategorySchema),
  new CreateCategoryController().handle,
);

router.get('/category', isAuthenticated, new GetAllCategoryController().handle);

// Rotas Products
router.post(
  '/product',
  isAuthenticated,
  isAdmin,
  validateSchema(createProductSchema),

  upload.single('file'),
  new CreateProductController().handle,
);

// localhost:3333/products?disabled=true
router.get(
  '/products',
  isAuthenticated,
  validateSchema(listProductSchema),
  new ListProductController().handle,
);

// localhost:3333/products?disabled=true

router.delete(
  '/products',
  isAuthenticated,
  isAdmin,
  new DeleteProductController().handle,
);

router.get(
  '/category/product',
  isAuthenticated,
  validateSchema(listProductByCategorySchema),
  new ListProductByCategoryController().handle,
);

// Rotas Order
router.post(
  '/order',
  isAuthenticated,
  validateSchema(createOrderSchema),
  new CreateOrderController().handle,
);

router.get('/orders', isAuthenticated, new ListOrdersController().handle);

export {router};
