import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Difficulty } from '../../../types/trivia';

@Component({
  selector: 'app-round-difficulty',
  standalone: true,
  imports: [],
  templateUrl: './round-difficulty.component.html',
  styleUrl: './round-difficulty.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoundDifficultyComponent {
  @Input() difficulty?: Difficulty;
}
