import { Pipe, PipeTransform } from '@angular/core';
import { BooleanAnswer } from '../types/trivia';

@Pipe({
  name: 'roundAnswer',
  standalone: true,
})
export class RoundAnswerPipe implements PipeTransform {
  transform(value: BooleanAnswer, answers: BooleanAnswer[]): BooleanAnswer[] {
    return answers.concat([value]).sort((a, b) => b.localeCompare(a));
  }
}
