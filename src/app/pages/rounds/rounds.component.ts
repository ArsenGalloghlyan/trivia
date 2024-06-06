import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from '../../services/core.service';
import { RoundComponent } from '../round/round.component';
import { Round } from '../../types/trivia';
import { Observable, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

const translateInitialValue: string = 'translate3d(0, 0, 0)';

@Component({
  selector: 'app-rounds',
  standalone: true,
  imports: [RoundComponent, AsyncPipe],
  templateUrl: './rounds.component.html',
  styleUrl: './rounds.component.scss',
})
export class RoundsComponent {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  private coreService: CoreService = inject(CoreService);
  public roundNumber: number = 0;
  public rounds$: Observable<Round[]> = this.getRound();
  public translate = translateInitialValue;
  public currentSliderIndex: number = 0;

  public getRound(): Observable<Round[]> {
    return this.route.params.pipe(
      switchMap(({ id }) => this.coreService.getQuestions(id)),
    );
  }

  public handleSelect(answer: string): void {
    if (this.roundNumber < 9) {
      ++this.roundNumber;
      this.currentSliderIndex += 1;
      this.translate = `translate3d(${this.currentSliderIndex * -100}%, 0, 0)`;
    } else {
      this.router.navigateByUrl(`result`);
    }
  }
}
