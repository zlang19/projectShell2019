import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import Category from './category';

@Entity()
export default class ToDo {
  @PrimaryGeneratedColumn()
  id

  @Column({ type: 'boolean' })
  done

  @Column({ type: 'varchar' })
  title

  @ManyToOne(() => Category, (category) => category.todos)
  category
}
