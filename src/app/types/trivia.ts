export type BooleanAnswer = 'True' | 'False';
export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Round {
  type: string;
  difficulty: Difficulty;
  category: string;
  question: string;
  correct_answer: BooleanAnswer;
  incorrect_answers: BooleanAnswer[];
}

export interface UserAnswer extends Round {
  userAnswer: BooleanAnswer;
  is_answered_correct: boolean;
}
