import { DisplayColumns } from '../types/scoreboard';

export const GAMES = 'played_games';
export const TRANSLATE_INITIAL_VALUE: string = 'translate3d(0, 0, 0)';
export const ROUNDS_COUNT = 10;
export const SCOREBOARD_COLUMNS: DisplayColumns[] = [
  { displayName: 'Question', field: 'question' },
  { displayName: 'Correct Answer', field: 'correctAnswer' },
  { displayName: 'User Answer', field: 'userAnswer' },
  { displayName: 'Point', field: 'point' },
];
