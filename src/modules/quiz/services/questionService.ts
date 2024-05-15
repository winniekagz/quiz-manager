import { Injectable } from '@nestjs/common';

@Injectable()
export class QuestionService {
  getAllQuestions() {
    return [1, 2, 2, 'From the service'];
  }
 
}
