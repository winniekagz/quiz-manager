import { IsNotEmpty } from 'class-validator';

export class CreateQuizDto {
  @IsNotEmpty({ message: 'Title is required' })
  title: string;
  @IsNotEmpty({ message: 'Description is required' })
  description: string;
}
