import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'rounds/:id',
    loadComponent: () =>
      import('./pages/rounds/rounds.component').then((m) => m.RoundsComponent),
  },
  {
    path: 'result',
    loadComponent: () =>
      import('./pages/result/result.component').then((m) => m.ResultComponent),
  },
  {
    path: 'scoreboard',
    loadComponent: () =>
      import('./pages/scoreboards/scoreboards.component').then(
        (m) => m.ScoreboardsComponent,
      ),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
