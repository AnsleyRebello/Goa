import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {

  // i want a todo of type Todo.....mujhe sweekar karna hai

  @Input() todo!: Todo; // ! = don't complain
  // when todoDelete is fired it is an EventEmitter 
  
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter()

  constructor() {}
  
  onClick(todo: Todo)
  {
    this.todoDelete.emit(todo)
    console.log("onClick has been triggered");
  }
}
