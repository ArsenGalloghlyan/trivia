import { Component, Input, OnInit } from '@angular/core';
import { DisplayColumns } from '../../../types/scoreboard';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
} from '@angular/material/table';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    MatHeaderCellDef,
    MatCellDef,
    MatCell,
    MatHeaderCell,
    MatColumnDef,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    MatTable,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent<T> implements OnInit {
  @Input({ required: true }) dataSource!: T[];
  @Input({ required: true }) displayedColumns!: DisplayColumns[];
  public columnFields?: string[];

  ngOnInit() {
    this.columnFields = this.displayedColumns.map((col) => col.field);
  }
}
