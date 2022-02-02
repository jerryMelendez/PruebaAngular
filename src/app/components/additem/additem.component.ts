import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/interfaces/interfaces';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.scss']
})
export class AdditemComponent implements OnInit {

  public id: string = '';
  public title: string = ''
  public price: number = 0;
  public quantity: number = 0;

  constructor(
    private itemService: ItemService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    const item: Item = new Item();
    item.id =  parseInt(this.id);
    item.title = this.title;
    item.price = this.price;
    item.quatity = this.quantity;
    item.completed = false;

    this.itemService.setItem(item);

    this.id = '';
    this.title = '';
    this.price = 0;
    this.quantity = 0;
    this.router.navigate(['/']);
  }
}
