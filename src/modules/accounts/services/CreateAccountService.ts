import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Account from '../typeorm/entities/Account';
import AccountsRepository from '../typeorm/repositories/AccountsRepository';

interface IRequest {
  document_number: number;
}

class CreateAccountService {
  public async execute({ document_number }: IRequest): Promise<Account> {
    const accountsRepository = getCustomRepository(AccountsRepository);

    const account = accountsRepository.create({
        document_number
    });

    await accountsRepository.save(account);

    return account;
  }
}

export default CreateAccountService;