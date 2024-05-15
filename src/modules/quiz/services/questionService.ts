import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from '../entities/question.entity';
import { CreateQuestionDto } from '../dto/questionDto';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>
  ) {}


  getAllQuestions() {
    return [1, 2, 2, 'From the service'];
  }

  async createQuestion(payload: CreateQuestionDto): Promise<Question> {
    const { question } = payload;
    const questionPayload = new Question();
    questionPayload.question = question;
    const createdQuestion = await this.questionRepository.save(questionPayload);
    return createdQuestion;
  } 
}
