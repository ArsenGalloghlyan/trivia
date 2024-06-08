import { Component, Input, OnInit } from '@angular/core';
import { TableComponent } from '../../shared/components/table/table.component';
import { DataSource, DisplayColumns } from '../../types/scoreboard';
import { UserAnswer } from '../../types/trivia';
import { UserScorePipe } from '../../pipes/user-score.pipe';

@Component({
  selector: 'app-scoreboard',
  standalone: true,
  imports: [TableComponent, UserScorePipe],
  templateUrl: './scoreboard.component.html',
  styleUrl: './scoreboard.component.scss',
})
export class ScoreboardComponent implements OnInit {
  @Input({ required: true }) userAnswers!: UserAnswer[];
  @Input({ required: true }) columns!: DisplayColumns[];

  public dataSource?: DataSource[];

  ngOnInit() {
    this.initDataSource();
  }

  private initDataSource(): void {
    this.dataSource = this.userAnswers.map((ua) => ({
      question: ua.question,
      correctAnswer: ua.correct_answer,
      userAnswer: ua.userAnswer,
      point: ua.userAnswer === ua.correct_answer ? 1 : 0,
    }));
  }
}
