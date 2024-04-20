import { Component, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomCheckboxComponent } from '../components/custom-checkbox/custom-checkbox.component';
import { TodoListComponent } from '../components/todo-list/todo-list.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    TodoListComponent,
    CustomCheckboxComponent,
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  private _snackBar = inject(MatSnackBar);

  public searchTerm = new FormControl('', { nonNullable: true });
  public isChecked = signal(false);

  public onSearchChange(value?: string): void {
    this.searchTerm.setValue(value || '');
    this._snackBar.open(value || '', undefined, { duration: 5000 });
  }

}
