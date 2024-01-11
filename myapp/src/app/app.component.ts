import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `<app-sidebar></app-sidebar>`,
})
export class AppComponent {
  title = 'myapp';
  forParent: string = 'this is from parent';
  forChild: string = 'this is child from parenttttt';
}
