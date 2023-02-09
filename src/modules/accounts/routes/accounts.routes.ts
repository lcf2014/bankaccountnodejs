import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import AccountsController from '../controllers/AccountsController';

const accountsRouter = Router();
const accountsController = new AccountsController();

accountsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      document_number: Joi.number().required(),
    },
  }),
  accountsController.create,
);

export default accountsRouter;