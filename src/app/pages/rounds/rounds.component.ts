import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from '../../services/core.service';
import { RoundComponent } from '../round/round.component';
import { Round, UserAnswer } from '../../types/trivia';
import { Observable, switchMap } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { RoundService } from '../../services/round.service';
import { LocalStorageService } from '../../services/local-storage.service';
import {
  GAMES,
  ROUNDS_COUNT,
  TRANSLATE_INITIAL_VALUE,
} from '../../helpers/constants';

@Component({
  selector: 'app-rounds',
  standalone: true,
  imports: [RoundComponent, AsyncPipe, NgIf, MatButton],
  templateUrl: './rounds.component.html',
  styleUrl: './rounds.component.scss',
})
export class RoundsComponent {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  private coreService: CoreService = inject(CoreService);
  private roundService: RoundService = inject(RoundService);
  private localStorageService: LocalStorageService =
    inject(LocalStorageService);
  public roundNumber: number = 0;
  public rounds$: Observable<Round[]> = this.getRound();
  public translate = TRANSLATE_INITIAL_VALUE;
  public currentSliderIndex: number = 0;

  public getRound(): Observable<Round[]> {
    return this.route.params.pipe(
      switchMap(({ id }) => this.coreService.getQuestions(id)),
    );
  }

  public handleSelect(): void {
    if (this.roundNumber < 9) {
      ++this.roundNumber;
      this.currentSliderIndex += 1;
      this.translate = `translate3d(${this.currentSliderIndex * -100}%, 0, 0)`;
    } else {
      const userAnswers = this.roundService.getUserAnswers();
      this.localStorageService.setItem(GAMES, this.getDataToStore(userAnswers));
      this.router.navigate(['result'], {
        queryParams: {
          correctAnswers: userAnswers.filter(
            (value) => value.is_answered_correct,
          ).length,
          roundsCount: ROUNDS_COUNT,
        },
      });
    }
  }

  private getDataToStore(userAnswers: UserAnswer[]): string {
    const oldGamesStr = this.localStorageService.getItem(GAMES);
    let result: Array<UserAnswer[]> = [];
    if (oldGamesStr) {
      try {
        const oldGames = JSON.parse(oldGamesStr);
        oldGames.push(userAnswers);
        result = oldGames;
      } catch (e) {
        console.error('Could not parse the given string: ', e);
      }
    } else {
      result = [userAnswers];
    }
    return JSON.stringify(result);
  }

  public handleReturnHome(): void {
    this.router.navigateByUrl(`/`);
  }
}
