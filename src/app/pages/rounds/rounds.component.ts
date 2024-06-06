import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-rounds',
  standalone: true,
  imports: [],
  templateUrl: './rounds.component.html',
  styleUrl: './rounds.component.scss',
})
export class RoundsComponent implements OnInit {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private coreService: CoreService = inject(CoreService);

  ngOnInit() {
    this.coreService
      .getQuestions(this.route.snapshot.params['id'])
      .subscribe((res) => {
        console.log(res);
      });
  }
}
