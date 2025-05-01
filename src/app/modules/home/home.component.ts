import { Component } from '@angular/core';
import { ZigzagSectionComponent } from './components/zigzag-section/zigzag-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ZigzagSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
