import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('questions')
export class Question extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column({
    type: 'varchar'
  })
  question: string;
}
