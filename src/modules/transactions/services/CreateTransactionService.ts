import AppError from '@shared/errors/AppError';
import { getCustomRepository, TransactionRepository } from 'typeorm';
import Transaction from '../typeorm/entities/Transaction';
import TransactionsRepository from '../typeorm/repositories/TransactionsRepository';

interface IRequest {
  account_id: string;
  operation_type_id: number;
  amount: number;
}

class CreateTransactionService {
  public async execute({ account_id, operation_type_id, amount }: IRequest): Promise<Transaction> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transaction = transactionsRepository.create({
        account_id, 
        operation_type_id, 
        amount
    });

    await transactionsRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;