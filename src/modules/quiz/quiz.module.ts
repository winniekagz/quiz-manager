import { Module } from '@nestjs/common';
import { QuizService } from './services/quiz.service';
import { QuestionsController } from './controllers/question.controller';
import { QuizControllerController } from './controllers/quiz-controller.controller';
import { QuestionService } from './services/questionService';
import { QuizRepository } from './quiz.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz])],

  controllers: [QuizControllerController, QuestionsController],
  providers: [QuizService, QuestionService, QuizRepository],
  exports: [TypeOrmModule]
})
export class QuizModule {}
