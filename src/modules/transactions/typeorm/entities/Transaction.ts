import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity('transactions')
  class Transaction {
    @PrimaryGeneratedColumn('uuid')
      id!: string;
     
    @Column('int')
      operation_type_id!: number;  
    
    @Column('text')
      account_id!: string;    
  
    @Column('float')
      amount!: number;
  
    @CreateDateColumn()
      created_at!: Date;
  
    @UpdateDateColumn()
      updated_at!: Date;
  }
  
  export default Transaction;