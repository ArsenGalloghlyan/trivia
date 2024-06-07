import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Option } from '../types/dropdown';
import { Round } from '../types/trivia';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../shared/components/dialog/dialog.component';
import { untilDestroyed } from '../helpers/untilDestroyed';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  private httpClient: HttpClient = inject(HttpClient);
  private dialog: MatDialog = inject(MatDialog);
  private untilDestroyed = untilDestroyed();

  public getQuestions(categoryId: number): Observable<Round[]> {
    return this.httpClient
      .get<{
        results: Round[];
      }>(
        `https://opentdb.com/api.php?amount=10&category=${categoryId}&type=boolean`,
      )
      .pipe(
        map((data) => data.results),
        catchError(() => this.handleServerError<Round[]>()),
      );
  }

  public getCategories(): Observable<Option[]> {
    return this.httpClient
      .get<{
        trivia_categories: Option[];
      }>('https://opentdb.com/api_category.php')
      .pipe(
        map((data) => data.trivia_categories),
        catchError(() => this.handleServerError<Option[]>()),
      );
  }

  private handleServerError<T>(): Observable<T> {
    const dialogInstance = this.dialog.open<DialogComponent>(DialogComponent, {
      width: '350px',
      disableClose: true,
    }).componentRef?.instance;
    if (!dialogInstance) {
      return of({} as T);
    }
    dialogInstance.handleClose
      .pipe(this.untilDestroyed())
      .subscribe(() => location.reload());
    dialogInstance.data = {
      title: 'Something went wrong',
      content: 'There was a server error. Please click OK to reload this page',
    };
    return of({} as T);
  }
}
