import { Component } from '@angular/core';

// constant
import { stationList } from './station-list.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practice Deploy Angular - HelloAngular';
  list = stationList;
}
