import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private isLoadingSub$: Subject<boolean> = new Subject<boolean>();
  public isLoadingObs$: Observable<boolean> = this.isLoadingSub$.asObservable();

  constructor() {}

  public changeState(value: boolean): void {
    this.isLoadingSub$.next(value);
  }
}
