import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Round } from '../../types/trivia';
import { RoundDifficultyComponent } from '../../shared/components/round-difficulty/round-difficulty.component';
import { RoundAnswerComponent } from '../../shared/components/round-answer/round-answer.component';
import { RoundAnswerPipe } from '../../pipes/round-answer.pipe';

@Component({
  selector: 'app-round',
  standalone: true,
  imports: [RoundDifficultyComponent, RoundAnswerComponent, RoundAnswerPipe],
  templateUrl: './round.component.html',
  styleUrl: './round.component.scss',
})
export class RoundComponent {
  @Input() round?: Round;
  @Input() roundNumber?: number;
  @Output() handleSelect: EventEmitter<string> = new EventEmitter<string>();
}
