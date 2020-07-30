import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})

export class TodoDataService {

  constructor() { }

  todos: Todo[] = []; 
  todoId: number = 0;

  addTodo(todo: Todo) {
    if (!todo.id) {
      todo.id = ++this.todoId;
    }
    this.todos.push(todo);
    return this.todos;
  }

  deleteTodo(deleteId: number) {
    this.todos = this.todos.filter(todo => todo.id !== deleteId);
    return this.todos;
  }
  
}
