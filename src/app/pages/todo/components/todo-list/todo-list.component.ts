import { Component, model } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {

  public search = model<string>();

  constructor() {
    setTimeout(() => {
      // Emitirá um Output para o componente pai
      this.search.set('Já pesquisei!');
    }, 1500);
  }

}
