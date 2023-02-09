import { Request, Response } from 'express';
import CreateAccountService from '../services/CreateAccountService';

export default class TransactionsController {

  public async create(request: Request, response: Response): Promise<Response> {
    const { document_number } = request.body;

    const createAccount = new CreateAccountService();

    const account = await createAccount.execute({
      document_number
    });

    return response.json(account);
  }
}