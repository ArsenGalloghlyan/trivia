import { Pipe, PipeTransform } from '@angular/core';
import { DataSource } from '../types/scoreboard';

@Pipe({
  name: 'userScore',
  standalone: true,
})
export class UserScorePipe implements PipeTransform {
  transform(dataSource: DataSource[]): string {
    return `${dataSource.filter((ds) => ds.point).length}/${dataSource.length}`;
  }
}
