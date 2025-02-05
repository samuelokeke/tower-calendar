import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-drop',
  imports: [DragDropModule, CdkDropListGroup, CdkDropList, CdkDrag],
  templateUrl: './cart-drop.component.html',
  styleUrl: './cart-drop.component.scss',
})
export class CartDropComponent {
  store = [
    'Bag',
    'Cookie',
    'Butter',
    'Cutlery',
    'Pasta',
    'Potato',
    'Cranberry',
    'Tomato',
    'Wine',
    'Sock',
    'Meat',
    'Tuna',
  ];

  cart: string[] = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
