import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TESTComponent implements OnInit, OnDestroy {
  @Input() inputFromParent: string = '';
  @Output() public isrowupdated = new EventEmitter<string>();
  constructor(private _snack: MatSnackBar) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  openSnackBar(message: string, action: string) {
    this._snack.open(message, action);
  }
}
