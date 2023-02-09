import { EntityRepository, Repository } from 'typeorm';
import Account from '../entities/Account';

@EntityRepository(Account)
class AccountsRepository extends Repository<Account> {
    
      public async findById(id: string): Promise<Account | undefined> {
        const account = await this.findOne({
          where: {
            id,
          },
        });
    
        return account;
      }
    }
    
export default AccountsRepository;