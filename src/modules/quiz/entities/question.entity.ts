import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('questions')
export class Question extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: 'This is the unique identifieer'
  })
  id: number;
  @Column({
    type: 'varchar'
  })
  question: string;
}
