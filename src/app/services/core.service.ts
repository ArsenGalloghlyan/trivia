import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Option } from '../types/dropdown';
import { Question } from '../types/trivia';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  private httpClient: HttpClient = inject(HttpClient);

  public getQuestions(categoryId: number): Observable<Question[]> {
    return this.httpClient
      .get<{
        results: Question[];
      }>(
        `https://opentdb.com/api.php?amount=10&category=${categoryId}&type=boolean`,
      )
      .pipe(map((data) => data.results));
  }

  public getCategories(): Observable<Option[]> {
    return this.httpClient
      .get<{
        trivia_categories: Option[];
      }>('https://opentdb.com/api_category.php')
      .pipe(map((data) => data.trivia_categories));
  }
}
