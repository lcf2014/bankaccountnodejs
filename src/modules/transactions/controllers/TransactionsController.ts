import { Request, Response } from 'express';
import CreateTransactionService from '../services/CreateTransactionService';

export default class TransactionsController {

  public async create(request: Request, response: Response): Promise<Response> {
    const { account_id, operation_type_id, amount } = request.body;

    const createTransaction = new CreateTransactionService();

    const account = await createTransaction.execute({
      account_id, 
      operation_type_id,
      amount
    });

    return response.json(account);
  }
}