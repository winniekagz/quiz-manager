import { Module } from '@nestjs/common';
import { QuizControllerController } from './quiz-controller.controller';
import { QuizService } from './quiz.service';

@Module({
  controllers: [QuizControllerController],
  providers: [QuizService]
})
export class QuizModule {}
