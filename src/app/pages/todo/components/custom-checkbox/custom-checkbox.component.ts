import { Component, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-custom-checkbox',
  standalone: true,
  imports: [
    MatCheckboxModule,
    MatButtonModule,
  ],
  templateUrl: './custom-checkbox.component.html',
  styleUrl: './custom-checkbox.component.scss'
})
export class CustomCheckboxComponent {

  public checked = model(false);

}
