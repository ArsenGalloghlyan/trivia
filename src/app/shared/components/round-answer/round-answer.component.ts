import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { BooleanAnswer } from '../../../types/trivia';

@Component({
  selector: 'app-round-answer',
  standalone: true,
  imports: [MatButton],
  templateUrl: './round-answer.component.html',
  styleUrl: './round-answer.component.scss',
})
export class RoundAnswerComponent {
  @Input({ required: true }) answer!: BooleanAnswer;
  @Output() handleClick: EventEmitter<void> = new EventEmitter<void>();
}
