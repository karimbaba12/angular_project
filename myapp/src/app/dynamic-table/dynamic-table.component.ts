import { Component, OnInit } from '@angular/core';
import { TableRow } from './table.model';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
})
export class DynamicTableComponent implements OnInit {
  tableData: TableRow[] = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Doe', age: 30 },
  ];
  newRow: TableRow = { id: 0, name: '', age: 0 }; // For adding new rows
  editingRow: number | null = null; // For editing rows
  constructor() {}

  ngOnInit(): void {}
  addRow(): void {
    // Assign a unique ID to the new row
    this.newRow.id = this.tableData.length + 1;
    this.tableData.push({ ...this.newRow });
    this.resetNewRow();
  }

  deleteRow(index: number): void {
    this.tableData.splice(index, 1);
  }

  editRow(index: number): void {
    this.editingRow = index;
  }

  saveRow(index: number): void {
    this.editingRow = null;
  }

  cancelEdit(): void {
    this.editingRow = null;
    this.resetNewRow();
  }

  private resetNewRow(): void {
    this.newRow = { id: 0, name: '', age: 0 };
  }
}
