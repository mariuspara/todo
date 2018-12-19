import { Component, OnChanges, Input, Output, EventEmitter  } from '@angular/core';

import { TodoItem } from '../../models/todoitem.interface'


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnChanges {

  @Input()
  todo: TodoItem;

  @Output()
  edit: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();

  @Output()
  remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();

  editing: boolean = false;
  isComplete: boolean = false;
  
  constructor() {}

  ngOnChanges(changes) {
    if (changes.todo) {
      this.todo = Object.assign({}, changes.todo.currentValue);
    }
  }

  onComplete(){
    this.isComplete = true;
  }
  
  onNameChange(value: string) {
    this.todo.title = value;
  }
  
  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.todo);
    }
    this.editing = !this.editing;
  }
  onRemove() {
    this.remove.emit(this.todo);
  }

}
