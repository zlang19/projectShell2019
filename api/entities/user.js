/* eslint-disable import/no-cycle */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import ToDo from './todo';
import Categroy from './category';

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id

  @Column({ type: 'varchar', unique: true })
  email

  @Column({ type: 'varchar', nullable: false })
  password

  @OneToMany(() => Categroy, (category) => category.user, { eager: true })
  categories
}
