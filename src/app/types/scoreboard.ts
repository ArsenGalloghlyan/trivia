export interface DataSource {
  question: string;
  userAnswer: string;
  correctAnswer: string;
  point: number;
}

export interface DisplayColumns {
  displayName: string;
  field: string;
}
