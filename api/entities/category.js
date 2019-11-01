import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne,
  } from 'typeorm';
  import ToDo from './todo';
  import User from './user';
  
  @Entity()
  export default class Categroy {
    @PrimaryGeneratedColumn()
    id
  
    @Column({ type: 'varchar' })
    name

    @ManyToOne(() => User, (user) => user.categories)
    user

    @OneToMany(() => ToDo, (todo) => todo.category, { eager: true })
    todos
  }
  