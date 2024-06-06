export type BooleanAnswer = 'True' | 'False';
export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Question {
  type: string;
  difficulty: Difficulty;
  category: string;
  question: string;
  correct_answer: BooleanAnswer;
  incorrect_answers: BooleanAnswer[];
}
