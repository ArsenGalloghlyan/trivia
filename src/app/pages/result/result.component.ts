import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [MatButton, NgIf, AsyncPipe, RouterLink],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultComponent implements OnInit {
  private route: ActivatedRoute = inject(ActivatedRoute);
  public params$ = this.route.queryParams.pipe(
    map(({ correctAnswers, roundsCount }) => ({ correctAnswers, roundsCount })),
  );

  ngOnInit() {}
}
