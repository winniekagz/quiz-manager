import { Injectable } from '@nestjs/common';

@Injectable()
export class QuizService {
  getAllQuiz() {
    return [1, 2, 2, 'From the service'];
  }
}
