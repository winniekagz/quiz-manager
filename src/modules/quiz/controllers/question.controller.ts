import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';

import { CreateQuestionDto } from '../dto/questionDto';
import { QuestionService } from '../services/questionService';

@Controller('questions')
export class QuestionsController {
  constructor(private questionService: QuestionService) {}
  @Get('/')
  getAllQuestions() {
    return this.questionService.getAllQuestions();
  }

  @Post('/')
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  createQuestion(@Body() question: CreateQuestionDto) {
    return { data: question, message: 'Question created successfully!'};
  }
}
