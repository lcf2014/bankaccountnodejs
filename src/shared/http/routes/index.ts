import { Router } from 'express';
import accountsRouter from '@modules/accounts/routes/accounts.routes';
import transactionsRouter from '@modules/transactions/routes/transactions.routes';


const routes = Router();

routes.use('/accounts', accountsRouter);
routes.use('/transactions', transactionsRouter);


export default routes;