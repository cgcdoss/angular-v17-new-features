import { Component, ElementRef, OnInit, computed, input, output, signal, viewChild } from '@angular/core';
import { items } from './list';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {

  public search = input.required({
    transform: (value: string) => value.toLowerCase(),
  });
  public itemSelected = output<string>();

  public items = signal(items);
  public filteredItems = computed(() => {
    return this.items().filter(i => i.name.toLowerCase().includes(this.search()));
  });

  public ulElem = viewChild.required<ElementRef<HTMLUListElement>>('ulElem');

  ngOnInit(): void {
    this.ulElem().nativeElement.className = 'p-4 bg-gray-300 space-y-1';
  }

}
