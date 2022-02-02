import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  public items: Item[] = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        id: 0,
        title: 'Manzana',
        price: 10.5,
        quatity: 4,
        completed: false
      },
      {
        id: 0,
        title: 'Pan',
        price: 3.5,
        quatity: 8,
        completed: true
      }
    ]
  }

}
