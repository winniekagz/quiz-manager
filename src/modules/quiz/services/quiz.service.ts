import { HttpCode, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from '../entities/quiz.entity'; // Adjust the path accordingly
import { CreateQuizDto } from '../dto/quizDto'; // Adjust the path accordingly
import { Repository } from 'typeorm';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private quizRepository: Repository<Quiz>
  ) {}
  @HttpCode(200)
  async getAllQuiz() {
    const quizes = await this.quizRepository.find();
    return { data: quizes, message: 'Quizes retrieved successfully!' };
  }
  @HttpCode(201)
  async createQuizes(payload: CreateQuizDto) {
    const { title, description } = payload;
    const quiz = new Quiz();
    quiz.description = description;
    quiz.title = title;
    const createdQuiz = await this.quizRepository.save(quiz);
    return createdQuiz;
  }
}
