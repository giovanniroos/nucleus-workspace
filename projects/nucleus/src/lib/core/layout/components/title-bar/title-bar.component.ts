import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent {

  @Input() title?: string;
}
