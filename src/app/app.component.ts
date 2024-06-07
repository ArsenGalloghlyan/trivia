import { Component, inject } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private loaderService: LoaderService = inject(LoaderService);
  public isLoading$: Observable<boolean> = this.loaderService.isLoadingObs$;
}
