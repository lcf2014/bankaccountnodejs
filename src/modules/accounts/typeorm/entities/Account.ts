import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity('accounts')
  class Account {
    @PrimaryGeneratedColumn('uuid')
      id!: string;
  
    @Column('int')
      document_number!: number;
  
    @CreateDateColumn()
      created_at!: Date;
  
    @UpdateDateColumn()
      updated_at!: Date;
  }
  
  export default Account;