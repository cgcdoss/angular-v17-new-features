import { Component } from '@angular/core';
import { DeferedComponent } from '../components/defered/defered.component';

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [
    DeferedComponent,
  ],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.scss'
})
export class DeferComponent {

}
