import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('quizzes')
export class Quiz extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: 'This is the unique identifieer'
  })
  id: number;
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