import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ListComponent } from '../components/list/list.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    ListComponent,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  private _snackBar = inject(MatSnackBar);

  public search = new FormControl('', { nonNullable: true });

  public onItemSelected(item: string): void {
    this._snackBar.open(item, undefined, { duration: 5000 });
  }

}
