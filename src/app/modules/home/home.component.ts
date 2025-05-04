import { Component } from '@angular/core';
import { ZigzagSectionComponent } from './components/zigzag-section/zigzag-section.component';
import { MapTrackerComponent } from '../core/components/map-tracker/map-tracker.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ZigzagSectionComponent,MapTrackerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
