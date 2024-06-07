import { Component, inject, OnInit } from '@angular/core';
import { GAMES, SCOREBOARD_COLUMNS } from '../../helpers/constants';
import { UserAnswer } from '../../types/trivia';
import { LocalStorageService } from '../../services/local-storage.service';
import { ScoreboardComponent } from '../scoreboard/scoreboard.component';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-scoreboards',
  standalone: true,
  imports: [ScoreboardComponent, MatButton, RouterLink],
  templateUrl: './scoreboards.component.html',
  styleUrl: './scoreboards.component.scss',
})
export class ScoreboardsComponent implements OnInit {
  public columns = SCOREBOARD_COLUMNS;
  private localStorageService: LocalStorageService =
    inject(LocalStorageService);
  public userAnswers?: UserAnswer[][];

  ngOnInit() {
    this.initData();
  }

  private initData(): void {
    const data = this.localStorageService.getItem(GAMES);
    if (!data) {
      return;
    }
    this.userAnswers = JSON.parse(data);
  }
}
