import { TodoItem } from './models/todoitem.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoItemService {
  constructor() {}

  TodoItems: TodoItem[] = [{
    id:'1',
    title: 'Todo A',
    priority: 'low',
    done: false
  }, {
     id:'2',
     title: 'Todo B',
     priority: 'medium',
     done: false
  }, {
      id:'3',
     title: 'Todo C',
     priority: 'high',
     done: true
  }, {
      id:'4',
     title: 'Todo D',
     priority: 'low',
     done: true
  }, {
      id:'5',
     title: 'Todo E',
     priority: 'high',
     done: false
  }];

  getTodoItems(): TodoItem[] {
    return this.TodoItems;
  }

  updateItems(TodoItems: TodoItem[])  {
    this.TodoItems = TodoItems;
  }
  addTodoItem(todoTitle:string, todoPriority:string){
    let todo: TodoItem = {
      id: Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36),
      title: todoTitle,
      priority: todoPriority,
      done: false
    }
    this.TodoItems.push(todo);
  }

  filterElements(priority: string) {
    console.log(priority);
    this.TodoItems = this.TodoItems.filter((TodoItem: TodoItem) => {
      return TodoItem.priority === priority;
    });
  }

}