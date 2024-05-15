import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('quizzes')
export class Quiz extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({
    type: 'varchar'
  })
  title: string;
  @Column({
    type: 'text'
  })
  description: string;
  @Column({
    type: 'boolean',
    default: 1
  })
  isActive: string;
}
