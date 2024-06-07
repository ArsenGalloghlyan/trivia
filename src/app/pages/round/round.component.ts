import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { BooleanAnswer, Round } from '../../types/trivia';
import { RoundDifficultyComponent } from '../../shared/components/round-difficulty/round-difficulty.component';
import { RoundAnswerComponent } from '../../shared/components/round-answer/round-answer.component';
import { RoundAnswerPipe } from '../../pipes/round-answer.pipe';
import { RoundService } from '../../services/round.service';

@Component({
  selector: 'app-round',
  standalone: true,
  imports: [RoundDifficultyComponent, RoundAnswerComponent, RoundAnswerPipe],
  templateUrl: './round.component.html',
  styleUrl: './round.component.scss',
})
export class RoundComponent {
  @Input({ required: true }) round!: Round;
  @Input() roundNumber?: number;
  @Output() handleSelect: EventEmitter<void> = new EventEmitter<void>();

  private roundService: RoundService = inject(RoundService);

  public handleAnswerSelect(answer: BooleanAnswer): void {
    this.roundService.addAnswer({
      ...this.round,
      ...{
        userAnswer: answer,
        is_answered_correct: this.round.correct_answer === answer,
      },
    });
    this.handleSelect.emit();
  }
}
