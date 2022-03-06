import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  classTitle = 'FEW 100';
  classSubTitle = 'Introduction to Angular and Typescript';
}
