import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Todo} from '../../Todo'
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from "../add-todo/add-todo.component";
import { FooterTodoComponent } from "../footer-todo/footer-todo.component";

@Component({
  selector: 'app-todos',
  imports: [CommonModule, TodoItemComponent, AddTodoComponent, FooterTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {

  // 
  todos: Todo[]
  // In Angular the Objects are Created Behind the scenes when the <app-todos> loads in the HTML, and automatically runs the constructor.
  constructor()
  {
    // “array of objects that look like Todo”
    this.todos = [
      {
        sno: 1,
        title: "this is title1",
        desc:"description",
        active:true
      },
      {
        sno: 2,
        title: "this is title2",
        desc:"description",
        active:true
      },
      {
        sno: 3,
        title: "this is title3",
        desc:"description",
        active:true
      }
    ]
  }

  deleteTodo(todo: Todo) 
  {
    console.log(todo);
    // deleting an element in an array
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1)
  }

  addTodo(todo: Todo) 
  {
    console.log(todo);
    this.todos.push(todo)
  }
}
