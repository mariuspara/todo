import { Component, OnInit, Input } from '@angular/core';

import { TodoItem } from '../../models/todoitem.interface'

import { TodoItemService } from '../../app.service'


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  TodoItems: TodoItem[];
  filterPriority:string = '';
  constructor(private TodoItemService: TodoItemService) {}
  ngOnInit() {
    this.TodoItems = this.TodoItemService.getTodoItems();
  }

  handleEdit(event: TodoItem): void {
    this.TodoItems = this.TodoItems.map((TodoItem: TodoItem) => {
      if (TodoItem.title === event.title) {
        TodoItem = Object.assign({}, TodoItem, event);
      }
      return TodoItem;
    });
    this.TodoItemService.updateItems(this.TodoItems)
  }
  handleRemove(event: TodoItem) {
    this.TodoItems = this.TodoItems.filter((TodoItem: TodoItem) => {
      return TodoItem.id !== event.id;
    });
    this.TodoItemService.updateItems(this.TodoItems)
  }
  filterElements(event){
    this.filterPriority = event.target.value;
    this.TodoItemService.filterElements(this.filterPriority);
    this.TodoItems=this.TodoItemService.getTodoItems();
}
}
