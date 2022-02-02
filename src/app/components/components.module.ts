import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ItemsComponent } from './items/items.component';

@NgModule({
  declarations: [
  
    HeaderComponent,
    ItemsComponent
  ],
  exports: [
    HeaderComponent,
    ItemsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ]
})
export class ComponentsModule { }