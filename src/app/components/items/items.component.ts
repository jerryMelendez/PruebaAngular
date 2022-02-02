import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/interfaces';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  public items: Item[] = [];
  public total: number = 0;
  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
    this.items = this.itemService.getItems();
    this.getTotal();
  }

  deleteItem(event: any)
  {
    console.log(event);
    this.items = this.items.filter(e => e.id !== event.id);
    setTimeout(() => {
      this.getTotal();
    }, 500);
  }

  getTotal()
  {
    // codigo para obtener el total de un campo en un array
    this.total = this.items.filter(e => !e.completed)
                            .map(e => (e.quatity && e.price)? ( e.quatity * e.price) : 0)
                            .reduce((acc, item) => acc += item, 0);
  }

  toggleItem(event: any)
  {
    this.getTotal();
  }

}
