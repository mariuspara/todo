import { Component} from '@angular/core';
import { TodoItemService } from 'src/app/app.service';



@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent  {

  todoTitle:string;
  todoPriority:string = '';
  newTodo: string = '';
  

  priorityChange(event) {
    this.todoPriority = event.target.value;
  }

  addToDo() {
    if (this.newTodo) {
      this.todoTitle = this.newTodo;
      if(this.todoPriority != '') {
        this.todoService.addTodoItem(this.todoTitle, this.todoPriority);
      }
    }
  }

  

  constructor(private todoService: TodoItemService) {}

}

