import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import TransactionsController from '../controllers/TransactionsController';

const transactionsRouter = Router();
const transactionsController = new TransactionsController();

transactionsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      account_id: Joi.string().required(),
      operation_type_id: Joi.string().required(),
      amount: Joi.number().precision(2).required(),

    },
  }),
  transactionsController.create,
);

export default transactionsRouter;