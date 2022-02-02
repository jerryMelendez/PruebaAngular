import { Injectable } from '@angular/core';
import { Item } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private items: Item[] = [
    {
      id: 0,
      title: 'Manzana',
      price: 10.5,
      quatity: 4,
      completed: false
    },
    {
      id: 1,
      title: 'Pan',
      price: 3.5,
      quatity: 8,
      completed: true
    },
    {
      id: 2,
      title: 'Chamarra',
      price: 300,
      quatity: 1,
      completed: false
    }
  ]
  constructor() { }

  getItems()
  {
    return this.items;
  }

  setItem(item: Item){
    this.items.push(item);
  }
}
