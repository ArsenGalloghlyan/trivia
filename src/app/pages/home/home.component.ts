import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DropdownComponent } from '../../shared/components/dropdown/dropdown.component';
import { CoreService } from '../../services/core.service';
import { finalize, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Option } from '../../types/dropdown';
import { MatAnchor, MatButton } from '@angular/material/button';
import { Router } from '@angular/router';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DropdownComponent, AsyncPipe, MatButton, MatAnchor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private coreService: CoreService = inject(CoreService);
  private router: Router = inject(Router);
  private loaderService: LoaderService = inject(LoaderService);
  public categories$: Observable<Option[]> = this.getCategories$();
  public selectedCategoryId?: number;

  public handleSelect(categoryId: number): void {
    this.selectedCategoryId = categoryId;
  }

  private getCategories$(): Observable<Option[]> {
    this.loaderService.changeState(true);
    return this.coreService
      .getCategories()
      .pipe(finalize(() => this.loaderService.changeState(false)));
  }

  public handleStartButtonClick(): void {
    this.router.navigateByUrl(`rounds/${this.selectedCategoryId}`);
  }
}
