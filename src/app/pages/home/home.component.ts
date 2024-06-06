import { Component, inject, OnInit } from '@angular/core';
import { DropdownComponent } from '../../shared/components/dropdown/dropdown.component';
import { CoreService } from '../../services/core.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Option } from '../../types/dropdown';
import { MatAnchor, MatButton } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DropdownComponent, AsyncPipe, MatButton, MatAnchor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private coreService: CoreService = inject(CoreService);
  private router: Router = inject(Router);
  public categories$: Observable<Option[]> = this.coreService.getCategories();
  public selectedCategoryId?: number;

  public handleSelect(categoryId: number): void {
    console.log(categoryId);
    this.selectedCategoryId = categoryId;
  }

  ngOnInit(): void {}

  public handleStartButtonClick(): void {
    this.router.navigateByUrl(`rounds/${this.selectedCategoryId}`);
  }
}
