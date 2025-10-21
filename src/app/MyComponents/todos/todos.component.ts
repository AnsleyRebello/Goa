import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Todo} from '../../Todo'
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
  selector: 'app-todos',
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {

  localItem: string | null
  todos: Todo[]
  // In Angular the Objects are Created Behind the scenes when the <app-todos> loads in the HTML, and automatically runs the constructor.
  constructor()
  {
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null) 
    {
    // “array of objects that look like Todo”
    this.todos = []
    }
    else 
    {
      this.todos = JSON.parse(this.localItem)
    }
  }

  deleteTodo(todo: Todo) 
  {
    console.log(todo);
    // deleting an element in an array
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1)
    localStorage.setItem("todos",JSON.stringify(this.todos))  // saving your todo
  }

  addTodo(todo: Todo) 
  {
    console.log(todo);
    this.todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
}
