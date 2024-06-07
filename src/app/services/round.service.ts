import { Injectable } from '@angular/core';
import { UserAnswer } from '../types/trivia';

@Injectable({
  providedIn: 'root',
})
export class RoundService {
  private userAnswers: UserAnswer[] = [];

  constructor() {}

  public addAnswer(question: UserAnswer): void {
    this.userAnswers.push(question);
  }

  public getUserAnswers(): UserAnswer[] {
    return this.userAnswers;
  }
}
